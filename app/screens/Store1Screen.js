import React, { useState } from 'react';
import { Image, Text, StyleSheet, TouchableOpacity, View, ScrollView, ImageBackground, Platform, Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, Foundation, FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons";

// components
import Screen from './../components/Screen';

// config
import Colors from '../config/Colors';

// Images
import pop2 from "../../assets/images/pop2.png"
import pop1 from "../../assets/images/pop1.png"
import pop3 from "../../assets/images/pop3.png"
import sunPer from "../../assets/images/sunPer.png"

const { width } = Dimensions.get('window');

function Store1Screen(props) {

    const [popular, setPopular] = useState([
        {
            id: 0,
            title: 'Prime Spot',
            category: 'Grocery | Canned Food',
            price: "₦ 50,000",
            percentage: "+ 10% ",
            image: pop1
        },
        {
            id: 1,
            title: 'Ebeano  Highlight',
            category: 'Grocery | Canned Food',
            price: "₦ 50,000",
            percentage: "+ 10% ",
            image: pop1
        },
        {
            id: 2,
            title: 'Ebeano  Highlight',
            category: 'Grocery | Canned Food',
            price: "₦ 50,000",
            percentage: "+ 10% ",
            image: pop1
        },
    ])

    const [recommended, setRecommended] = useState([
        {
            id: 0,
            title: 'Fire Spot',
            category: 'Grocery | Canned Food',
            price: "₦ 50,000",
            percentage: "+ 10% ",
            image: pop3
        },
        {
            id: 1,
            title: 'Special Spot',
            category: 'Grocery | Canned Food',
            price: "₦ 50,000",
            percentage: "+ 10% ",
            image: pop3
        },
        {
            id: 2,
            title: 'Fire Spot',
            category: 'Grocery | Canned Food',
            price: "₦ 50,000",
            percentage: "+ 10% ",
            image: pop3
        },
    ])

    return (
        <Screen barStyle="dark-content" style={styles.container}>
            <ScrollView style={{ width: "100%" }} >
                <View>
                    <ImageBackground source={pop2} style={{ alignItems: "center", width: width, height: RFPercentage(18) }} >
                        <View style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, backgroundColor: "rgba(0, 0, 0, 0.25)" }} ></View>
                        <View style={{ marginTop: RFPercentage(1), flexDirection: "row", justifyContent: "space-between", width: "90%", alignItems: "center" }} >
                            <TouchableOpacity style={{ marginRight: RFPercentage(1) }} onPress={() => props.navigation.navigate("HomeScreen")} activeOpacity={0.5} >
                                <MaterialCommunityIcons name="arrow-left" size={RFPercentage(3)} color={Colors.white} />
                            </TouchableOpacity>

                            <View style={{ flexDirection: "row" }} >
                                <TouchableOpacity onPress={() => console.log("Recording mic")} style={{ marginRight: RFPercentage(2.3) }} activeOpacity={0.5} >
                                    <FontAwesome name="share-square-o" size={RFPercentage(3)} color={Colors.white} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => console.log("Recording mic")} style={{}} activeOpacity={0.5} >
                                    <MaterialCommunityIcons name="heart-outline" size={RFPercentage(3)} color={Colors.white} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>

                    <View style={{ marginTop: RFPercentage(2), flexDirection: "row", justifyContent: "space-between", width: "85%", marginLeft: "7.5%", alignItems: "center" }} >
                        <Text style={{ fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(3.8), marginRight: RFPercentage(1) }} onPress={() => props.navigation.navigate("HomeScreen")} activeOpacity={0.5} >
                            Ebeano Lekki
                        </Text>
                        <View style={{ flexDirection: "row" }} >
                            <Text onPress={() => console.log("Recording mic")} style={{ marginRight: RFPercentage(2.3) }} activeOpacity={0.5} >
                                0.1 Km
                            </Text>
                            <View style={{ flexDirection: "row" }} >
                                <MaterialCommunityIcons name="star" size={RFPercentage(2)} color={Colors.grey} />
                                <Text style={{ color: Colors.grey }} >4.6</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: RFPercentage(0.3), flexDirection: "row", justifyContent: "space-between", width: "85%", marginLeft: "7.5%", alignItems: "center" }} >
                        <Text style={{ fontSize: RFPercentage(2), marginRight: RFPercentage(1), color: "#50555C" }}  >
                            Food | Home | Health | Beauty
                        </Text>
                    </View>
                    <View style={{ marginTop: RFPercentage(0.3), flexDirection: "row", justifyContent: "space-between", width: "85%", marginLeft: "7.5%", alignItems: "center" }} >
                        <View style={{ flexDirection: "row" }} >
                            <MaterialCommunityIcons name="location-enter" size={RFPercentage(2)} color={Colors.grey} />
                            <Text style={{ marginLeft: RFPercentage(1), fontSize: RFPercentage(2), color: "#AAAAAA" }}  >
                                14b Muritala Eletu Way, Lekki
                            </Text>
                        </View>
                        <View style={{ marginRight: RFPercentage(2) }} >
                            <Image source={sunPer} style={{ width: RFPercentage(3), height: RFPercentage(3) }} />
                        </View>
                    </View>

                    <View style={{ marginTop: RFPercentage(0.3), flexDirection: "row", justifyContent: "space-between", width: "85%", marginLeft: "7.5%", alignItems: "center" }} >
                        <Text style={{ fontSize: RFPercentage(2), marginRight: RFPercentage(1), color: "#AAAAAA" }}  >
                            8am - 10pm
                        </Text>
                    </View>


                    {/* Hot Spots */}
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginTop: RFPercentage(4), }} >
                        <View style={{ width: "90%", marginLeft: RFPercentage(2) }} >
                            <Text style={{ fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(2.5) }} >
                                Hot Spots
                            </Text>
                        </View>
                        <ScrollView showsHorizontalScrollIndicator={false} style={{ width: "90%", maxHeight: RFPercentage(35), marginTop: RFPercentage(1) }} horizontal={true} >
                            {popular.map((item, index) => (
                                <View key={index} style={{
                                    width: RFPercentage(20),
                                    height: RFPercentage(28),
                                    borderRadius: 14,
                                    backgroundColor: Colors.white,
                                    margin: RFPercentage(0.6),
                                    padding: RFPercentage(2),
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column"
                                }} >
                                    <Image style={{ borderRadius: 20, width: RFPercentage(20), height: RFPercentage(15), }} source={item.image} />
                                    <View style={{ height: RFPercentage(9), marginTop: RFPercentage(2), alignItems: "flex-start", width: "100%" }} >
                                        <Text numberOfLines={1} style={{ fontFamily: "Philosopher_700Bold", textAlign: "left", fontSize: RFPercentage(2.4) }} >{item.title}</Text>
                                        <Text numberOfLines={1} style={{ textAlign: "left", fontSize: RFPercentage(1.8), color: "#AAAAAA" }} >{item.category}</Text>
                                        <View style={{ marginTop: RFPercentage(2), flexDirection: "row", justifyContent: "space-between", width: "100%" }} >
                                            <Text numberOfLines={1} style={{ textAlign: "left", fontSize: RFPercentage(1.8), color: Colors.primary }} >{item.price}</Text>
                                            <Text numberOfLines={1} style={{ textAlign: "left", fontSize: RFPercentage(1.8), color: "#F5C03D" }} >{item.percentage}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Spots */}
                    <View style={{ marginLeft: "5%", marginTop: RFPercentage(2), width: "90%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flex: 1 }} >
                        <Text style={{ marginLeft: RFPercentage(2), color: Colors.black, fontFamily: "Philosopher_700Bold", fontSize: RFPercentage(2.5) }} >
                            Spots
                        </Text>
                    </View>

                    <ScrollView showsHorizontalScrollIndicator={false} style={{ marginTop: RFPercentage(1.5) }}>
                        {recommended.map((item, index) => (
                            <View key={index} style={{
                                width: "90%",
                                height: RFPercentage(12),
                                borderRadius: 14,
                                backgroundColor: Colors.white,
                                margin: RFPercentage(1),
                                padding: RFPercentage(2),
                                alignItems: "center",
                                justifyContent: "flex-start",
                                flexDirection: "row"
                            }} >
                                <Image source={item.image} style={{ borderRadius: 14, width: RFPercentage(13), height: RFPercentage(10) }} />
                                <View style={{ marginLeft: RFPercentage(2), width: "70%", height: "100%", justifyContent: "space-between" }} >
                                    <Text numberOfLines={1} style={{ maxWidth: "90%", fontSize: RFPercentage(2.2) }} >{item.title}</Text>
                                    <Text numberOfLines={1} style={{ maxWidth: "90%", fontSize: RFPercentage(2), color: "#AAAAAA" }} >{item.category}</Text>
                                    <View style={{ flexDirection: "row", width: "80%", justifyContent: "space-between" }} >
                                        <Text style={{ color: Colors.primary }} >{item.price}</Text>
                                        <Text style={{ color: "#F5C03D", marginLeft: RFPercentage(2) }} >{item.percentage}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </ScrollView>


                </View>
            </ScrollView>

        </Screen >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        alignItems: "center"
    }
})

export default Store1Screen;