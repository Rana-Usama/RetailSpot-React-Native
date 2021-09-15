import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from "@expo/vector-icons";

//config
import Colors from '../../config/Colors';

function Nav({ onPress = () => { } }) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', bottom: RFPercentage(2), position: 'absolute' }}>
                {/* <Ionicons
                    name="arrow-back"
                    size={40}
                    color={Colors.white}
                    style={{
                        fontSize: RFPercentage(3.6),
                        fontWeight: "bold",
                        right: RFPercentage(10)

                    }}
                    onPress={onPress}
                /> */}

                <Text style={{ color: Colors.white, fontFamily: 'Philosopher_700Bold', fontSize: RFPercentage(3) }}>
                    Login Into RetailSpot
                </Text>
            </View>
            <View style={{ flexDirection: 'row', position: 'absolute', left: RFPercentage(2), bottom: RFPercentage(2) }}>
                <Ionicons
                    name="arrow-back"
                    size={40}
                    color={Colors.white}
                    style={{
                        fontSize: RFPercentage(3.6),
                        fontWeight: "bold",

                    }}
                    onPress={onPress}
                />
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        backgroundColor: Colors.primary,
        width: '100%',
        height: RFPercentage(17),
        borderBottomLeftRadius: RFPercentage(3.3),
        borderBottomRightRadius: RFPercentage(3.3),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // alignItems: 'flex-end'
    }
})

export default Nav;