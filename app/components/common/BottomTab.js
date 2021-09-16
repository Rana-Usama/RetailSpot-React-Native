import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

//config
import Colors from '../../config/Colors';

function BottomTab(props) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', justifyContent: 'center', bottom: 0, width: "98%", height: RFPercentage(12), backgroundColor: Colors.white }}>
            <TouchableOpacity style={{ position: 'absolute', left: RFPercentage(4) }}>
                <MaterialIcons name="all-inbox" size={RFPercentage(4)} color={Colors.circle} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="add-circle" size={RFPercentage(8)} color={Colors.circle} />
            </TouchableOpacity>
            <TouchableOpacity style={{ position: 'absolute', right: RFPercentage(4) }}>
                <MaterialIcons name="notifications" size={RFPercentage(4)} color={Colors.circle} />
            </TouchableOpacity>
        </View>
    );
}

export default BottomTab;