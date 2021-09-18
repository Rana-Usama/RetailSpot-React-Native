import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ActivityIndicator, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//custom fonts
import { LibreBaskerville_400Regular } from "@expo-google-fonts/libre-baskerville"
import { Philosopher_700Bold, useFonts } from "@expo-google-fonts/philosopher";
import { Montserrat_200ExtraLight, Montserrat_500Medium, Montserrat_700Bold, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import { Quicksand_500Medium, Quicksand_400Regular, Quicksand_700Bold } from "@expo-google-fonts/quicksand"

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
import MyShelvesScreen from './app/screens/MyShelvesScreen';
import MyShelvesBookedScreen from './app/screens/MyShelvesBookedScreen';
import ViewShelfEditScreen from './app/screens/ViewShelfEditScreen';
import MyBookings from './app/screens/MyBookings';
import NotificationScreen from './app/screens/NotificationScreen';
import DashboardScreen from './app/screens/DashboardScreen';
import BuyerProfileScreen from './app/screens/BuyerProfileScreen';

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Philosopher_700Bold,
    LibreBaskerville_400Regular,
    Montserrat_200ExtraLight,
    Montserrat_500Medium,
    Quicksand_500Medium,
    Quicksand_400Regular,
    Quicksand_700Bold,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  })

  if (!fontsLoaded) return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
    <ActivityIndicator size={RFPercentage(6)} color={Colors.primary} />
  </View>

  return (
    <NavigationContainer>

      <Stack.Navigator headerMode="none" initialRouteName="ViewShelfEditScreen">

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="BuyerProfileScreen" component={BuyerProfileScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="MyBookings" component={MyBookings} />
        <Stack.Screen name="ViewShelfEditScreen" component={ViewShelfEditScreen} />
        <Stack.Screen name="MyShelvesScreen" component={MyShelvesScreen} />
        <Stack.Screen name="MyShelvesBookedScreen" component={MyShelvesBookedScreen} />
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
