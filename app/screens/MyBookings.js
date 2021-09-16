import React from 'react';
import { View, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../config/Colors';

//components
import Screen from './../components/Screen';
import NavTitlesAndIcon from '../components/common/NavTitlesAndIcon';
import TwoButtonsContainer from './../components/common/TwoButtonsContainer';
import MiniCardWithoutPic from './../components/common/MiniCardWithoutPic';
import BottomTab from '../components/common/BottomTab';

function MyBookings(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.background }}>
            <ScrollView style={{ backgroundColor: Colors.backgroundColor, flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* Nav Icon and titles */}
                    <NavTitlesAndIcon mainTitle="My Bookings" sideTitle="Book" />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* Top Buttons */}
                    <TwoButtonsContainer buttonTitle1="On-going" buttonTitle2="All" />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', top: RFPercentage(3), marginBottom: RFPercentage(28) }}>
                    {/* Notifications Listings */}
                    <MiniCardWithoutPic />
                    <MiniCardWithoutPic />
                    <MiniCardWithoutPic />
                    <MiniCardWithoutPic />
                    <MiniCardWithoutPic />
                </View>
                {/* Bottom tab */}
            </ScrollView>
            <BottomTab />
        </Screen>

    );
}

export default MyBookings;