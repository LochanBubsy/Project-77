import React from 'react'
import {Text, View, TextInput} from 'react-native'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './appTabNavigator'
import CustomSideBar from './customSideBarMenu'
import SettingScreen from '../Screens/settingScreen'

export const AppDrawerNavigator = createDrawerNavigator({
    home:{
    screen:AppTabNavigator
    },
    Setting:{
    screen:SettingScreen
    }},
    {
        contentComponent:CustomSideBar
    },
    {
        initialRouteName:'home'
    }
)