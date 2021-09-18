import React from 'react';
import { TextInput, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../config/Colors';

function SmallInputField(props) {
    return (
        <View style={{ marginLeft: RFPercentage(0.5), justifyContent: 'center', alignItems: 'center', width: RFPercentage(6), height: RFPercentage(4), backgroundColor: Colors.circle }}>
            <TextInput placeholder="50m" placeholderTextColor={Colors.black} style={{ fontSize: RFPercentage(1.8), fontFamily: 'Quicksand_400Regular' }} />
        </View>
    );
}

export default SmallInputField;