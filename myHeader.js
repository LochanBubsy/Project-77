import React from 'react'
import {Header,Icon,Badge} from 'react-native-elements'
import {View, Text,StyleSheet} from 'react-native'

const BellIconWithBadge=(props)=>{
    return(
        <View>
            <Icon name="bell"
            type="font-awesome"
            color="#00AFF0" size={25}
            onPress={()=>props.navigation.navigate('Notification')}></Icon>
            <Badge value="1"
            containerStyle={{position:'absolute',top:-4, right:-4}}></Badge>
        </View>
    )
}


const MyHeader=props=>{
    return(
        <Header 
        leftComponent={<Icon name="bars"
        type="font-awesome"
        color="#000000" onPress={()=>props.navigation.toggleDrawer()}></Icon>}
        centerComponent={{text:props.title,style:{color:"#00b8b8",fontSize:20,fontWeight:"bold"}}}
        backgroundColor="#FFFFFF"
        rightComponent={<BellIconWithBadge {...props}/>}
        >
            
                    </Header>
    )
}