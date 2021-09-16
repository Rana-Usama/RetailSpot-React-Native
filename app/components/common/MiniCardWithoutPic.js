import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SimpleLineIcons } from '@expo/vector-icons';


//config
import Colors from '../../config/Colors';

function MiniCardWithoutPic(props) {
    return (
        <View style={{ flexDirection: 'row', width: '90%', backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'flex-start', height: RFPercentage(14), marginTop: RFPercentage(1.3), borderRadius: RFPercentage(2) }}>
            {/* Titles to the left */}
            <View style={{ left: RFPercentage(4) }}>
                <Text style={{ fontSize: RFPercentage(2.5), color: "#313942", fontFamily: 'Quicksand_700Bold' }}>
                    X Large Shelf
                </Text>
                <Text style={{ fontFamily: 'Quicksand_400Regular', color: '#313942', fontSize: RFPercentage(2.3), marginTop: RFPercentage(1.2) }}>
                    Heldo Foods
                </Text>
                <Text style={{ fontFamily: 'Quicksand_400Regular', fontSize: RFPercentage(1.5), color: "#B1A9A9", top: RFPercentage(0.3) }}>
                    One Month
                </Text>
            </View>
            {/* Blue Box */}
            <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', right: RFPercentage(6), backgroundColor: Colors.lightBlue, width: RFPercentage(22), height: RFPercentage(4.3), borderRadius: RFPercentage(20) }}>
                <Text style={{ color: "#425A70", fontSize: RFPercentage(2) }}>Awaiting Supply</Text>
            </View>
            {/* Edit icon */}
            <TouchableOpacity style={{ right: RFPercentage(2), position: 'absolute', top: RFPercentage(3) }}>
                <SimpleLineIcons name="options-vertical" size={RFPercentage(2.5)} color={Colors.black} />
            </TouchableOpacity>
        </View>
    );
}

export default MiniCardWithoutPic;