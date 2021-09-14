import React, { useState } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

//components
import InputField from "../components/common/InputField";

//config
import Colors from "../config/Colors";

const { height } = Dimensions.get("window")

function SignupScreen(props) {
  const [inputField, SetInputField] = useState([
    {
      placeholder: "Type your phone number",
      type: "numeric",
      value: "",
    },
  ]);

  const handleChange = (text, i) => {
    let tempfeilds = [...inputField];
    tempfeilds[i].value = text;
    SetInputField(tempfeilds);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}  >
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
          onPress={() => props.navigation.navigate("LoginScreen")}
        />
      </View>


      {/* Heading */}
      <View style={{ width: "85%", position: "absolute", top: height / 2.5 }} >
        <View style={{ alignSelf: "flex-start", }}>
          <Text style={{ fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(5) }}>What is your </Text>
          <Text style={{ fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(5) }}>phone number ? </Text>
        </View>

        {/* InputField */}
        {inputField.map((item, i) => (

          <View key={i} style={{ marginTop: RFPercentage(3) }} >
            <InputField
              secure={item.secure}
              placeholder={item.placeholder}
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


    </View>
  );
}

export default SignupScreen;