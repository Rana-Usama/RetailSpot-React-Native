import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ActivityIndicator, View } from "react-native";
import { Philosopher_700Bold, useFonts } from "@expo-google-fonts/philosopher";
import { RFPercentage } from "react-native-responsive-fontsize";


//components
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";
import Colors from "./app/config/Colors";

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Philosopher_700Bold
  })

  if (!fontsLoaded) return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
    <ActivityIndicator size={RFPercentage(6)} color={Colors.primary} />
  </View>

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
