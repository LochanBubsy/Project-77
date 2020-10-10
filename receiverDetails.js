import React from 'react'
import { render } from 'react-dom'
import {View, Text, TextInput} from 'react-native'
import firebase from 'firebase'
import db from '../config'
import {Card,Icon} from 'react-native-elements'

export default class ReceiverDetails extends React.Component{

    constructor(props){
        super(props)
        this.state={
            userId:firebase.auth().currentUser.email,
            receiverId:this.props.navigation.getParam('Details')['user_Id'],
            requestId:this.props.navigation.getParam('Details')['Request_Id'],
            bookName:this.props.navigation.getParam('Details')['book_name'],
            reason_for_requesting:this.props.navigation.getParam('Details')['reason_reuest'],
            receiverName:'',
            recieverContact:'',
            receiverAddress:'',
            receiverRequestDocId:''
        }
    }
    getReceiverDetails(){
        db.collection('users').where("email_Id","==",this.state.receiverId).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                this.setState({
                    receiverName:doc.data().first_name,
                    recieverContact:doc.data().contact,
                    receiverAddress:doc.data().address

                })
            })
        })
        db.collection('requested_books').where('request_id','==',this.state.requestId)
        .get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                this.setState({receiverRequestDocId:doc.id})
            })
        })
    }
    componentDidMount(){
        this.getReceiverDetails()
    }
    render(){
    return(
        <View>
            <View style={{flex:0.3}}>
                <Card title={"Book Information"}
                titleStyle={{fontSize:20}}>

                    <Card>
                <Text>Name:{this.state.bookName}</Text>
                    </Card>
                    <Card><Text>Reason:{this.state.reason_for_requesting}</Text></Card>
                    <Card><Text>receiverName:{this.state.receiverName}</Text></Card>
                    <Card><Text>receiverAddress:{this.state.receiverAddress}</Text></Card>
                    <Card><Text>contact:{this.state.contact}</Text></Card>
                </Card>
            </View>
            <Text>Receiver Details</Text>
        </View>
    )
}

}