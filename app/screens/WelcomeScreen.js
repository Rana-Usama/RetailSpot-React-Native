import React from 'react';
import { View, Image, Text } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../config/Colors';
import MyAppButton from './../components/common/MyAppButton';
import { LibreBaskerville_400Regular } from '@expo-google-fonts/libre-baskerville';

function WelcomeScreen(props) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}  >
            {/* PathImage */}
            <View style={{ position: "absolute", top: 0, right: 0 }}>
                <Image source={require("../../assets/images/path1.png")} style={{ width: RFPercentage(60), height: RFPercentage(50) }} />
            </View>

            {/* Text */}
            <View style={{ marginTop: RFPercentage(40) }}><Text style={{ fontFamily: 'LibreBaskerville_400Regular', fontSize: RFPercentage(3) }}>Welcome, Chinedu! </Text></View>
            <View style={{ marginTop: RFPercentage(2) }}><Text style={{ fontFamily: 'LibreBaskerville_400Regular', fontSize: RFPercentage(3) }}>Now let’s get you that spot! </Text></View>

            {/* Continue Button */}
            <View style={{ width: "100%", alignItems: "center", position: 'absolute', bottom: RFPercentage(8) }}>
                <MyAppButton
                    title="CONTINUE"
                    padding={RFPercentage(3)}
                    bold={false}
                    // onPress={() => props.navigation.navigate("WelcomeScreen")}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    width={"98%"}
                />
            </View>
        </View>
    );
}

export default WelcomeScreen;