import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

//components
import InputField from "../components/common/InputField";

//config
import Colors from "../config/Colors";

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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* PathImage */}
      <View
        style={{
          width: "100%",
          position: "absolute",
          top: 0,
          paddingTop: Constants.statusBarHeight,
        }}
      >
        <Image
          source={require("../assets/path.png")}
          style={{
            width: RFPercentage(45),
            height: RFPercentage(40),
            marginRight: RFPercentage(0),
            marginLeft: RFPercentage(15),
          }}
        ></Image>
      </View>

      {/* BackIcon */}
      <View
        style={{
          alignSelf: "flex-start",
          position: "absolute",
          top: RFPercentage(17),
          left: RFPercentage(5),
        }}
      >
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

      {/* Headings */}
      <View
        style={{
          alignSelf: "flex-start",
          position: "absolute",
          top: RFPercentage(43),
          left: RFPercentage(5),
        }}
      >
        <Text style={{ fontSize: RFPercentage(4) }}>What is your </Text>
        <Text style={{ fontSize: RFPercentage(4) }}>phone number ? </Text>
      </View>

      {/* InputField */}
      <View
        style={{
          alignSelf: "flex-start",
          position: "absolute",
          top: RFPercentage(57),
          left: RFPercentage(5),
        }}
      >
        {inputField.map((item, i) => (
          <InputField
            key={i}
            placeholder={item.placeholder}
            keyboardType={item.type}
            backgroundColor={Colors.inputFieldBackgroundColor}
            borderRadius={RFPercentage(1)}
            // onTouchStart={() => setFeildMarginBottom(-RFPercentage(30))}
            // onTouchEnd={() => setFeildMarginBottom(0)}
            handleFeild={(text) => handleChange(text, i)}
            value={item.value}
            width={"90%"}
          />
        ))}
      </View>
    </View>
  );
}

export default SignupScreen;
