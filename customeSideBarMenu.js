import React from 'react'
import {View,TextInput, Text,TouchableOpacity} from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase'

export default class CustomSideBar extends React.Component{
    render(){
        return(
            <View>
                <DrawerItems {...this.props}></DrawerItems>
                <TouchableOpacity style={{
                    width:200,
                    height:30,
                    borderWidth:2
                }}
                onPress={()=>{
                    this.props.navigation.navigate("WelcomeScreen")
                    firebase.auth().signOut()
                }}>
                    <Text>Sign Out</Text>
                </TouchableOpacity>
            </View>
        )

    }


}