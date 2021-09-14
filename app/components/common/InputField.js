import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//config
import Colors from "../../config/Colors";

function InputField({
  onTouchStart = () => {},
  onTouchEnd = () => {},
  placeholder,
  handleFeild,
  borderColor = Colors.inputFieldBorder,
  borderWidth = RFPercentage(0.2),
  width,
  value,
  secure = false,
  ...otherProps
}) {
  const [eyeIcon, setEyeIcon] = useState(false);

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: Colors.white,
        borderColor: borderColor,
        borderWidth: borderWidth,
        width: width,
        height: RFPercentage(8),
        borderRadius: RFPercentage(10),
        marginVertical: RFPercentage(1),
      }}
    >
      <TextInput
        placeholder={placeholder}
        onChangeText={(text) => handleFeild(text)}
        onResponderStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        value={value}
        secureTextEntry={secure && !eyeIcon}
        style={{
          color: "black",
          alignSelf: "center",
          left: RFPercentage(2),
          fontSize: RFPercentage(2.5),
          width: secure ? "90%" : "100%",
        }}
        {...otherProps}
      ></TextInput>

      {secure ? (
        <TouchableOpacity
          onPress={() => setEyeIcon(!eyeIcon)}
          style={{
            width: "10%",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <MaterialCommunityIcons
            color={eyeIcon ? Colors.black : Colors.inputFieldBorder}
            style={{ right: RFPercentage(1) }}
            size={RFPercentage(3)}
            name={eyeIcon ? "eye-outline" : "eye-off-outline"}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

export default InputField;
