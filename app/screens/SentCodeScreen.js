import React from 'react';
import { Image, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

//config
import Nav from '../components/common/Nav';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get("window")

function SentCodeScreen(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* navbar */}
            <Nav onPress={() => props.navigation.navigate("LoginNumberScreen")} />
            <TouchableOpacity onPress={() => props.navigation.navigate("TypeCode")}>
                <Image source={require('../../assets/images/hand.png')} style={{ top: height / 12, width: RFPercentage(35), height: RFPercentage(40) }} ></Image>
            </TouchableOpacity>
        </View>

    );
}

export default SentCodeScreen;