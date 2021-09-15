import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ActivityIndicator, View } from "react-native";
import { Philosopher_700Bold, useFonts } from "@expo-google-fonts/philosopher";
import { LibreBaskerville_400Regular } from "@expo-google-fonts/libre-baskerville"
import { RFPercentage } from "react-native-responsive-fontsize";


//screens
import SplashScreen from "./app/screens/SplashScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";
import Colors from "./app/config/Colors";
import LoginNumberScreen from './app/screens/LoginNumberScreen';
import SentCodeScreen from './app/screens/SentCodeScreen';
import TypeCode from './app/screens/TypeCode';
import SignupStep2 from './app/screens/SignupStep2';
import WelcomeScreen from './app/screens/WelcomeScreen';

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Philosopher_700Bold,
    LibreBaskerville_400Regular

  })

  if (!fontsLoaded) return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
    <ActivityIndicator size={RFPercentage(6)} color={Colors.primary} />
  </View>

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="LoginNumberScreen" component={LoginNumberScreen} />
        <Stack.Screen name="SentCodeScreen" component={SentCodeScreen} />
        <Stack.Screen name="TypeCode" component={TypeCode} />
        <Stack.Screen name="SignupStep2" component={SignupStep2} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
