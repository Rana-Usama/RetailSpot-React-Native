import React from 'react';
import { Image, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';

// config
import Colors from '../config/Colors';

// Images
import menue from "../../assets/images/Title.png"
import { RFPercentage } from 'react-native-responsive-fontsize';
import InputField from '../components/common/InputField';
import Screen from './../components/Screen';

function HomeScreen(props) {
    return (
        <Screen style={styles.container}>
            <StatusBar backgroundColor={Colors.iconOrange} barStyle="dark-content" />
            <View style={{ marginTop: RFPercentage(1.7), width: "95%", justifyContent: "flex-start", alignItems: "center", flex: 1 }} >
                <View style={{ width: "100%", justifyContent: "flex-start", alignItems: "flex-start" }} >
                    <TouchableOpacity onPress={() => props.navigation.openDrawer()} activeOpacity={0.5} >
                        <Image source={menue} style={{ width: RFPercentage(3.8), height: RFPercentage(3.8), marginLeft: RFPercentage(1.6) }} />
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: RFPercentage(1) }} >
                    <InputField
                        secure={false}
                        placeholder={'Search for spot…'}
                        placeholderColor={Colors.grey}
                        onTouchStart={() => console.log("start")}
                        width={"100%"}
                        height={RFPercentage(6.5)}
                        backgroundColor={Colors.grey1}
                        leftIconName={'search'}
                        borderWidth={0}
                    />
                </View>

            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        alignItems: "center"
    }
})

export default HomeScreen;