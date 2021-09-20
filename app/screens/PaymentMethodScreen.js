import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Modal } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';


//config
import Colors from '../config/Colors';
//components
import Screen from './../components/Screen';
import LoadingModal from './../components/common/LoadingModel';
import MyAppButton from '../components/common/MyAppButton';
import PaymentMethodsComponent from '../components/PaymentMethodsComponent';

function PaymentMethodScreen(props) {
    const [indicator, showIndicator] = useState(false);

    const handleLogin = () => {
        showIndicator(true);
        try {

            // API integration will come here

        } catch (error) {
            alert("Payment Error");
        }

        showIndicator(false);
    };

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.background }}>
            {/* Loading Model */}
            <LoadingModal show={indicator} />
            {/* Header */}
            <View elevation={20} style={styles.boxWithShadow}>
                <Text style={{ color: Colors.black, fontFamily: 'Philosopher_700Bold', fontSize: RFPercentage(3) }}>
                    Payment Methods
                </Text>
            </View>
            {/* Scroll View starts */}
            <ScrollView style={{ backgroundColor: Colors.white, flex: 1, width: '100%', marginTop: RFPercentage(2) }} >
                <PaymentMethodsComponent />
            </ScrollView>
            {/*Continue Payment Button */}
            <View style={{ position: 'absolute', bottom: RFPercentage(2), width: '100%' }}>
                <MyAppButton
                    title="Continue Payment"
                    padding={RFPercentage(2.7)}
                    bold={false}
                    onPress={() => handleLogin()}
                    backgroundColor={Colors.primary}
                    color={Colors.white}
                    width={"90%"}
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    boxWithShadow: {
        width: '100%',
        backgroundColor: Colors.white,
        height: RFPercentage(17.5),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.lightestGrey,
        shadowOffset: {
            width: RFPercentage(0),
            height: RFPercentage(3)
        },
        shadowRadius: RFPercentage(1),
        shadowOpacity: 0.1
    }
})

export default PaymentMethodScreen;