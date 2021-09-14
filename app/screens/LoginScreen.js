import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import InputField from "../components/common/InputField";

//config
import Colors from "../config/Colors";
import LoadingModal from "./../components/common/LoadingModel";
import MyAppButton from "./../components/common/MyAppButton";

function LoginScreen(props) {
  const [indicator, showIndicator] = useState(false);
  const [inputField, SetInputField] = useState([
    {
      placeholder: "E-mail",
      value: "",
    },
    {
      placeholder: "Password",
      secure: true,
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
      alert("Please fill all the feilds !");
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
    <View style={styles.container}>
      <LoadingModal show={indicator} />

      {/* Logo */}
      <View style={{ marginTop: RFPercentage(6) }}>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: RFPercentage(40), height: RFPercentage(40) }}
        />
      </View>

      {/* ReatilSpot Text */}
      <Text
        style={{
          color: Colors.lightOrange,
          fontSize: RFPercentage(3.4),
          bottom: RFPercentage(17),
        }}
      >
        RetailSpot
      </Text>

      {/*  Store Owner's App Text */}
      <Text
        style={{
          color: Colors.lightBlack,
          fontSize: RFPercentage(1.9),
          bottom: RFPercentage(14),
        }}
      >
        Store Owner's App
      </Text>

      {/* InputFields */}
      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: RFPercentage(3),
          bottom: RFPercentage(10),
        }}
      >
        {inputField.map((item, i) => (
          <InputField
            key={i}
            secure={item.secure}
            placeholder={item.placeholder}
            // onTouchStart={() => setFeildMarginBottom(-RFPercentage(30))}
            // onTouchEnd={() => setFeildMarginBottom(0)}
            handleFeild={(text) => handleChange(text, i)}
            value={item.value}
            width={"85%"}
          />
        ))}
      </View>

      {/* Login Button */}
      <View
        style={{
          width: "100%",
          alignItems: "center",
          bottom: RFPercentage(6.9),
        }}
      >
        <MyAppButton
          title="Login"
          onPress={() => handleLogin()}
          backgroundColor={Colors.primary}
          width={RFPercentage(26)}
          color={Colors.white}
          width={"85%"}
        />
      </View>

      <View
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          bottom: RFPercentage(6),
        }}
      >
        {/* forget password */}
        <TouchableOpacity>
          <Text style={{ color: Colors.inputFieldBorder, fontWeight: "400" }}>
            Forget Password
          </Text>
        </TouchableOpacity>
        <View
          style={{
            height: RFPercentage(5),
            backgroundColor: Colors.inputFieldBorder,
            width: 2,
          }}
        ></View>

        {/* create account */}
        <TouchableOpacity>
          <Text style={{ color: Colors.inputFieldBorder, fontWeight: "400" }}>
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default LoginScreen;
