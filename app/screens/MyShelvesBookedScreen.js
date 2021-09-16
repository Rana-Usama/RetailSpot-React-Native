import React from 'react';
import { ScrollView, View } from 'react-native'

//components
import Screen from './../components/Screen';
import MiniCard from './../components/common/MiniCard';
import TwoButtonsContainer from '../components/common/TwoButtonsContainer';
import NavTitlesAndIcon from './../components/common/NavTitlesAndIcon';

//config
import Colors from '../config/Colors';
import BottomTab from './../components/common/BottomTab';
import NotificationsCard from '../components/common/NotificationsCard';

function MyShelvesBookedScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.background }}>
            <ScrollView style={{ backgroundColor: Colors.backgroundColor, flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* Nav Icon and titles */}
                    <NavTitlesAndIcon mainTitle="My Spots" sideTitle="BOOK" />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/*Top Buttons */}
                    <TwoButtonsContainer buttonTitle1="Ongoing" buttonTitle2="Booking History" />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* Listings */}
                    <MiniCard number={false} />
                </View>
            </ScrollView>
            {/* Bottom tab */}
            <BottomTab />

        </Screen>
    );
}

export default MyShelvesBookedScreen;