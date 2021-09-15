import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import InputField from '../components/common/InputField';
import Nav from '../components/common/Nav';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function TypeCode(props) {

    const [inputField, SetInputField] = useState([
        {
            placeholder: "",
            type: "numeric",
            value: "",
        },
        {
            placeholder: "",
            type: "numeric",
            value: "",
        },
        {
            placeholder: "",
            type: "numeric",
            value: "",
        },
        {
            placeholder: "",
            type: "numeric",
            value: "",
        },
        {
            placeholder: "",
            type: "numeric",
            value: "",
        },
        {
            placeholder: "",
            type: "numeric",
            value: "",
        },


    ]);

    const handleChange = (text, i) => {
        if (i === 0 && text.length > 1) {
            alert("Only one digit in one field");
            return;
        }
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            {/* NavBar */}
            <Nav onPress={() => props.navigation.navigate("SentCodeScreen")} />

            {/* Heading */}
            <View style={{ marginTop: RFPercentage(22) }}>
                <Text style={{ fontSize: RFPercentage(3) }}>Enter your code</Text>
            </View>

            {/* Varification Text */}
            <View style={{ marginTop: RFPercentage(3) }}>
                <Text style={{ fontSize: RFPercentage(2.2) }}>The verification code is sent to the</Text>
            </View>
            <View style={{}}>
                <Text style={{ fontSize: RFPercentage(2.2) }}>phone number (+234) 817 0000 560</Text>
            </View>

            {/* CodeInput Fields */}
            <View style={{ width: '90%', flexDirection: 'row', marginTop: RFPercentage(3), justifyContent: 'space-evenly' }}>
                {inputField.map((item, i) => (
                    <InputField
                        key={i}
                        placeholder={item.placeholder}
                        keyboardType={item.type}
                        backgroundColor={Colors.codeInputFields}
                        borderRadius={RFPercentage(1.2)}
                        handleFeild={(text) => handleChange(text, i)}
                        value={item.value}
                        width={"15%"}
                    />
                ))}
            </View>

            {/* Continue Button */}
            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(5) }}>
                <MyAppButton
                    title="CONTINUE"
                    bold={false}
                    onPress={() => props.navigation.navigate("SignupStep2")}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    width={"90%"}
                />
            </View>

            {/* Did't get code text */}

            <View style={{ marginTop: RFPercentage(3) }}>
                <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.8) }}>
                    I didn’t get a code
                </Text>
            </View>

            {/* terms and policy text */}
            <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: RFPercentage(3), alignItems: 'flex-end' }}>
                <Text style={{ fontSize: RFPercentage(1.6), right: RFPercentage(0.7), }}>
                    Tap continue to accept Facebook’s
                </Text>
                <Text style={{ marginTop: RFPercentage(0.3), fontSize: RFPercentage(1.6), textDecorationLine: 'underline' }}>
                    Terms, Data
                </Text>
            </View>

            <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: RFPercentage(0), alignItems: 'flex-end' }}>
                <Text style={{ fontSize: RFPercentage(1.6), right: RFPercentage(0.7), textDecorationLine: 'underline' }}>
                    policy, cookie
                </Text>
                <Text style={{ marginTop: RFPercentage(0.3), fontSize: RFPercentage(1.6), }}>
                    use and the
                </Text>
                <Text style={{ marginTop: RFPercentage(0.3), left: RFPercentage(0.7), fontSize: RFPercentage(1.6), textDecorationLine: 'underline' }}>
                    Privacy Policy
                </Text>
                <Text style={{ marginTop: RFPercentage(0.3), left: RFPercentage(0.9), fontSize: RFPercentage(1.6) }}>
                    and
                </Text>
                <Text style={{ marginTop: RFPercentage(0.3), left: RFPercentage(1.2), fontSize: RFPercentage(1.6), textDecorationLine: 'underline' }}>
                    Terms
                </Text>
            </View>
            <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: RFPercentage(0), alignItems: 'flex-end' }}>
                <Text style={{ fontSize: RFPercentage(1.6), right: RFPercentage(0.7), textDecorationLine: 'underline' }}>
                    of Service
                </Text>
                <Text style={{ marginTop: RFPercentage(0.3), fontSize: RFPercentage(1.6), }}>
                    of
                </Text>
                <Text style={{ fontWeight: 'bold', marginTop: RFPercentage(0.3), left: RFPercentage(0.6), fontSize: RFPercentage(1.6), }}>
                    RetailSpot
                </Text>
            </View>


        </View >
    );
}

export default TypeCode;