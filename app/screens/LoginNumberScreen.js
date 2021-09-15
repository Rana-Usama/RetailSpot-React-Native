import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../config/Colors';

//components
import Nav from '../components/common/Nav';
import InputField from '../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';
import LoadingModal from './../components/common/LoadingModel';

function LoginNumberScreen(props) {
    const [indicator, showIndicator] = useState(false);
    const [inputField, SetInputField] = useState([
        {
            placeholder: "Number",
            type: "numeric",
            value: "",
        },

    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);
    };

    const handleLogin = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "") {
            alert("Please fill the number !");
            showIndicator(false);
            return true;
        }

        try {
            // API integration will come here
        } catch (error) {
            alert("Number error");
        }

        showIndicator(false);
    };


    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <LoadingModal show={indicator} />

            {/* NavBar */}
            <Nav onPress={() => props.navigation.navigate("SignupScreen")} />

            {/* Heading */}
            <View style={{ marginTop: RFPercentage(22) }}>
                <Text style={{ fontSize: RFPercentage(3) }}>Enter your mobile number</Text>
            </View>

            {/* Mobile number input field */}
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '90%', marginTop: RFPercentage(3) }}>


                {inputField.map((item, i) => (
                    <InputField
                        key={i}
                        placeholder={item.placeholder}
                        keyboardType={item.type}
                        backgroundColor={Colors.inputFieldBackgroundColor}
                        borderRadius={RFPercentage(1)}
                        handleFeild={(text) => handleChange(text, i)}
                        value={item.value}
                        handleClear={true}
                        width={"58%"}
                    />
                ))}
            </View>

            {/* Text */}
            <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: RFPercentage(3), alignItems: 'flex-end' }}>
                <Text style={{ fontWeight: 'bold', fontSize: RFPercentage(1.6), right: RFPercentage(1), textTransform: 'uppercase' }}>
                    Retailspot
                </Text>
                <Text style={{ marginTop: RFPercentage(0.3), fontSize: RFPercentage(1.6), textTransform: 'uppercase' }}>
                    uses Account Kit, a Facebook
                </Text>
            </View>
            <Text style={{ marginTop: RFPercentage(0.5), fontSize: RFPercentage(1.6), textTransform: 'uppercase' }}>
                technology, to help you sign in. You don’t need a
            </Text>
            <Text style={{ marginTop: RFPercentage(0.5), fontSize: RFPercentage(1.6), textTransform: 'uppercase' }}>
                Facebook account, Message and data rates may
            </Text>
            <Text style={{ marginTop: RFPercentage(0.5), fontSize: RFPercentage(1.6), textTransform: 'uppercase' }}>
                apply. Learn how Facebook users your info.
            </Text>

            {/* Buttons */}
            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(3) }}>
                <MyAppButton
                    title="GET A WHATSAPP CODE"
                    bold={false}
                    onPress={() => handleLogin()}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    width={"85%"}
                />
            </View>
            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(1) }}>
                <MyAppButton
                    title="USE SMS"
                    bold={false}
                    onPress={() => props.navigation.navigate("SentCodeScreen")}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    width={"85%"}
                />
            </View>


        </View>
    );
}

export default LoginNumberScreen;