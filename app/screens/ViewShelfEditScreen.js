import React, { useState } from 'react';
import { View, Text, ImageBackground, ScrollView, Image, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';


//config
import Colors from '../config/Colors';

//components
import Screen from './../components/Screen';
import InputField from '../components/common/InputField';
import MyAppButton from '../components/common/MyAppButton';
import NavTitlesAndIcon from './../components/common/NavTitlesAndIcon';
import BottomTab from '../components/common/BottomTab';

function ViewShelfEditScreen(props) {


    const [inputField, SetInputField] = useState([
        {
            placeholder: "Prime spot for your products",
            title: 'Description',
            editIcon: true,
            // type: "numeric",
            value: "",
        },
        {
            placeholder: "Width",
            title: 'Dimension',
            editIcon: true,
            // type: "numeric",
            value: "",
        },
        {
            placeholder: "Healthy Foods",
            title: 'Category',
            editIcon: true,
            // secure: true,
            value: "",
        },
        {
            placeholder: "Healthy Foods",
            title: 'Services',
            editIcon: true,
            // secure: true,
            value: "",
        },
        {
            placeholder: "Weekly, Monthly, Quarterly",
            title: 'Rental Period',
            editIcon: true,
            // secure: true,
            value: "",
        },
        {
            placeholder: "₦50,000",
            title: 'Price',
            editIcon: true,
            // secure: true,
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };
    return (

        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.background }}>
            <ScrollView style={{ backgroundColor: Colors.backgroundColor, flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* Nav Icon and titles */}
                    <NavTitlesAndIcon mainTitle="View Shelf" sideTitle="ADD" icon={true} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* Image Title */}
                    <Text style={{ fontFamily: 'Quicksand_400Regular', marginTop: RFPercentage(7), color: "#313942", fontSize: RFPercentage(2.3) }}>
                        Prime Shelf
                    </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* Main Image */}
                    <ImageBackground style={{ marginTop: RFPercentage(4), width: RFPercentage(50), height: RFPercentage(40) }} source={require('../../assets/images/completeBuilding.png')}>
                        {/* Edit Icon */}
                        <TouchableOpacity style={{ position: 'absolute', right: RFPercentage(2), top: RFPercentage(2) }}>
                            <MaterialIcons name="edit" size={RFPercentage(2.5)} color={Colors.editIcon} />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* white container images */}
                    <View style={{ flexDirection: 'row', width: '90%', backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'space-evenly', height: RFPercentage(16), marginTop: RFPercentage(2.4), borderRadius: RFPercentage(2) }}>
                        <TouchableOpacity style={{ position: 'absolute', right: RFPercentage(1.6), top: RFPercentage(0.4) }}>
                            <MaterialIcons name="edit" size={RFPercentage(1.8)} color={Colors.editIcon} />
                        </TouchableOpacity>
                        <Image style={{ width: RFPercentage(15), height: RFPercentage(10) }} source={require('../../assets/images/building.png')} />
                        <Image style={{ width: RFPercentage(15), height: RFPercentage(10) }} source={require('../../assets/images/building.png')} />
                        <Image style={{ width: RFPercentage(15), height: RFPercentage(10) }} source={require('../../assets/images/building.png')} />
                    </View>
                </View>

                {/* input fields */}
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <View style={{ width: '100%', alignItems: "center", marginTop: RFPercentage(4) }}>
                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: RFPercentage(2) }} >
                                <Text style={{ fontFamily: 'Quicksand_500Medium', color: "#82867D", fontWeight: 'bold', fontSize: RFPercentage(2.5), bottom: RFPercentage(0.5) }}>{item.title}</Text>
                                <InputField
                                    placeholder={item.placeholder}
                                    secure={item.secure}
                                    keyboardType={item.type}
                                    backgroundColor={Colors.white}
                                    placeholderColor={Colors.palceholderColor}
                                    borderColor={Colors.white}
                                    borderRadius={RFPercentage(1)}
                                    height={RFPercentage(9)}
                                    fontFamily={"Quicksand_400Regular"}
                                    fontSize={RFPercentage(2)}
                                    editIcon={item.editIcon}
                                    // onTouchStart={() => setFeildMarginBottom(-RFPercentage(30))}
                                    onTouchEnd={() => console.log("here1")}
                                    handleFeild={(text) => handleChange(text, i)}
                                    value={item.value}
                                    width={"90%"}
                                />
                            </View>
                        ))}
                    </View>
                </View>

                {/* Setup Spot Button */}
                <View style={{ width: "100%", alignItems: "center", top: RFPercentage(3), marginBottom: RFPercentage(33) }}>
                    <MyAppButton
                        title="Setup Spot"
                        padding={RFPercentage(2.7)}
                        bold={false}
                        // onPress={() => handleLogin()}
                        backgroundColor={Colors.primary}
                        color={Colors.white}
                        width={"90%"}
                    />
                </View>
            </ScrollView>
            {/* Bottom tab */}
            <BottomTab />
        </Screen>
    );
}

export default ViewShelfEditScreen;