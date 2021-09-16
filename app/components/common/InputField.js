import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';



//config
import Colors from "../../config/Colors";

function InputField({
  onTouchStart = () => { },
  onTouchEnd = () => { },
  placeholder,
  handleFeild,
  borderColor = Colors.inputFieldBorder,
  borderWidth = 1,
  fontFamily = null,
  placeholderColor = null,
  borderRadius = RFPercentage(10),
  backgroundColor = Colors.white,
  keyboardType = "default",
  textCenter = "left",
  fontSize = RFPercentage(2.5),
  editIcon = false,
  width,
  value,
  height = RFPercentage(6.8),
  secure = false,
  handleClear = false,
  ...otherProps
}) {
  const [eyeIcon, setEyeIcon] = useState(false);

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: backgroundColor, borderColor: borderColor, borderWidth: borderWidth, width: width, height: height, borderRadius: borderRadius, marginVertical: RFPercentage(0.7), }} >
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        onChangeText={(text) => handleFeild(text)}
        // onResponderStart={onTouchStart}
        // onEndEditing={onTouchEnd}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={secure && !eyeIcon}
        textAlign={textCenter}
        style={{ color: "black", alignSelf: "center", fontFamily: fontFamily, fontSize: fontSize, width: "90%" }}
        {...otherProps}
      ></TextInput>

      {handleClear && value.length > 0 ? (
        <TouchableOpacity onPress={() => handleFeild('')} style={{ position: "absolute", right: RFPercentage(1), }}>
          <MaterialCommunityIcons
            color={Colors.inputFieldBorder}
            style={{ right: RFPercentage(1) }}
            size={RFPercentage(3)}
            name="close"
          />
        </TouchableOpacity>
      ) : null}

      {editIcon ? (
        <TouchableOpacity onPress={() => handleFeild('')} style={{ position: "absolute", right: RFPercentage(1), top: RFPercentage(1.4) }}>
          <MaterialIcons
            color={Colors.inputFieldBorder}
            style={{ right: RFPercentage(1) }}
            size={RFPercentage(1.5)}
            name="edit"
          />
        </TouchableOpacity>
      ) : null}

      {secure ? (
        <TouchableOpacity onPress={() => setEyeIcon(!eyeIcon)} style={{ position: "absolute", right: RFPercentage(1), }}>
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
