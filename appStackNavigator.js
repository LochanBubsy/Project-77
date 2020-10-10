import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import BookDonate from '../Screens/bookDonateScreen'
import ReceiverDetails from '../Screens/receiverDetails'

export const AppStackNavigator=createStackNavigator({
    BookDonateList:{
        screen:BookDonate

    },
    ReceiverDetails:{
        screen:ReceiverDetails
    }
},
{
    initialRouteName:'bookDonateList'
})