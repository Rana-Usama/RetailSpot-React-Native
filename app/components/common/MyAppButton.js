import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

function MyAppButton({
  title,
  onPress,
  bold = true,
  backgroundColor,
  padding = RFPercentage(2),
  width = "100%",
  color,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        width: width,
        borderRadius: RFPercentage(30),
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center", //most important
        padding: padding,
      }}
    >
      <Text
        style={{
          fontSize: RFPercentage(2.5),
          color: color,
          fontWeight: bold ? "bold" : null,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default MyAppButton;
