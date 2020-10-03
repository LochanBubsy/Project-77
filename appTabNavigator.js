import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Modal, TextInput} from 'react-native';
import db from '../config'
import firebase from 'firebase'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookDonate from '../Screens/bookDonateScreen'
import BookRequest from '../Screens/bookRequestScreen'

export const AppTabNavigator=createBottomTabNavigator({
DonateBooks:{
screen:BookDonate

},
BookRequest:{
    screen:BookRequest
}

})