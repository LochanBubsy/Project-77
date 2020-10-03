import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Modal, TextInput, FlatList} from 'react-native';
import db from '../config'
import firebase from 'firebase'
import { render } from 'react-dom';
import {ListItem} from 'react-native-elements'

export default class BookDonate extends React.Component{
    constructor(){
super()
this.state={

    requestedBookList:[]
}
this.requestRef=null

    }
    getrequestedBookList=()=>{
        this.requestRef=db.collection("requested_book")
        .onSnapshot((snapshot)=>{
            var requestedBookList=snapshot.docs.map(document=>document.data())
            this.setState({
                requestedBookList:requestedBookList
            })
        })


    }
    componentDidMount(){
        this.getrequestedBookList()
    }
    componentWillUnmount(){
        this.requestRef()
    }
    keyExtractor=(item,index)=>index.toString()
    renderItem=({item,i})=>{
        return(
            <ListItem
            key={i}
            title={item.bookName}
            subtitle={item.reasonToRequest}
            titleStyle={{color:'black', fontWeight:'bold'}}
            
            rightElement={
                <TouchableOpacity
                style={{width:100,height:50, borderWidth:3}}
                >
                    <Text>View</Text>
                </TouchableOpacity>
            }
            bottomDivider></ListItem>
        )
    }
render(){
return(
<View style={{flex:1}}>
{
    this.state.requestedBookList.length===0
    ?
    (
        <View>
            <Text>listofbooks</Text>
        </View>
    )
    :(
    <FlatList
    keyExtractor={this.keyExtractor}
    data={this.state.requestedBookList}
    renderItem={this.renderItem}></FlatList>    
    )
}
</View>

)

}


}