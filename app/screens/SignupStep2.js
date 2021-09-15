import React, { useState } from "react";
import { View, Text, Image, Dimensions, KeyboardAvoidingView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";


//components
import InputField from "../components/common/InputField";

//config
import Colors from "../config/Colors";
import MyAppButton from './../components/common/MyAppButton';
import LoadingModal from './../components/common/LoadingModel';

const { height } = Dimensions.get("window")

function SignupStep2(props) {
    const [indicator, showIndicator] = useState(false);
    const [inputField, SetInputField] = useState([
        {
            placeholder: "Name",
            title: 'Name',
            // type: "numeric",
            value: "",
        },
        {
            placeholder: "Type your email",
            title: 'Email',
            // type: "numeric",
            value: "",
        },
        {
            placeholder: "Password",
            title: 'Password',
            secure: true,
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    //Right now i have apllied navigation temporary
    const handleLogin = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "" || tempfeilds[2].value === "") {
            alert("Please fill all the feilds !");
            showIndicator(false);
            return true;
        }
        if (!tempfeilds[1].value.includes("@")) {
            alert("Please write valid email");
            showIndicator(false);
            return true;
        }

        try {
            // API integration will come here
        } catch (error) {
            alert("Login Error");
        }

        showIndicator(false);
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}  >

            <LoadingModal show={indicator} />

            {/* PathImage */}
            <View style={{ position: "absolute", top: 0, right: 0, paddingTop: Constants.statusBarHeight, }}>
                <Image source={require("../../assets/images/path1.png")} />
            </View>

            {/* BackIcon */}
            <View style={{ alignSelf: "flex-start", position: "absolute", top: RFPercentage(10), left: RFPercentage(4), }} >
                <Ionicons
                    name="arrow-back"
                    size={40}
                    color={Colors.black}
                    style={{
                        fontSize: RFPercentage(3),
                        fontWeight: "bold",
                    }}
                    onPress={() => props.navigation.navigate("TypeCode")}
                />
            </View>

            <View style={{ width: "85%", position: "absolute", top: height / 3.2 }} >
                {/* Heading */}
                <View style={{ alignSelf: "flex-start", }}>
                    <Text style={{ fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(5) }}>Welcome to </Text>
                    <Text style={{ fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(5) }}> RetailSpot! </Text>
                </View>

                {/* InputFields */}
                {inputField.map((item, i) => (
                    <View key={i} style={{ marginTop: RFPercentage(2.5) }} >
                        <Text style={{ fontSize: RFPercentage(2.5), bottom: RFPercentage(0.5) }}>{item.title}</Text>
                        <InputField
                            placeholder={item.placeholder}
                            secure={item.secure}
                            keyboardType={item.type}
                            backgroundColor={Colors.inputFieldBackgroundColor}
                            borderRadius={RFPercentage(1)}
                            // onTouchStart={() => setFeildMarginBottom(-RFPercentage(30))}
                            onTouchEnd={() => console.log("here1")}
                            handleFeild={(text) => handleChange(text, i)}
                            value={item.value}
                            width={"100%"}
                        />
                    </View>
                ))}
            </View>

            {/* Joinnow button */}
            <View style={{ width: "100%", alignItems: "center", position: 'absolute', bottom: RFPercentage(4) }}>
                <MyAppButton
                    title="JOIN NOW"
                    padding={RFPercentage(3)}
                    bold={false}
                    onPress={() => props.navigation.navigate("WelcomeScreen")}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    width={"98%"}
                />
            </View>

        </View>
    );
}

export default SignupStep2;
