import React from "react";
import { Platform, SafeAreaView, StyleSheet, View, StatusBar } from "react-native";
import Constants from "expo-constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {Platform.OS === "android" ? <StatusBar backgroundColor={Colors.iconOrange} barStyle="dark-content" /> : null}
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Constants.statusBarHeight,

    flex: 1,
  },
});

export default Screen;
