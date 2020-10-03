import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Modal, TextInput} from 'react-native';
import db from '../config'
import firebase from 'firebase'

export default class BookRequest extends React.Component{
    constructor(){
super()
this.state={
    userId:firebase.auth().currentUser.email,
    bookName:"",
    reasonToRequest:""
}

    }
    createUniqueId(){
        return Math.random().toString(36).substring(7)

    }
    addRequest=(bookName,reasonToRequest)=>{
        var userId=this.state.userId
        var randomRequest=this.createUniqueId()
        db.collection("requested_book").add({
            user_id:userId,
            book_name:bookName,
            reasonToRequest:reasonToRequest,
            requestId:randomRequestId
        })
        this.setState({

            bookName:'',
            reasonToRequest:''
        })
    }
render(){
return(
<View>
// create TextInput for book name, reasonToRequest, and TouchableOpacity to add request to the database
<TextInput 
   style={styles.formTextInput}
   multiline
   numberOfLines = {8}
   placeholder={"Why do you need the book"}
   onChangeText = {(text)=>{
    this.setState({
        description:text
    })


   }}
   value={this.state.description}
     />
    <TextInput
        style={styles.formTextInput}
            placeholder={"Book Name"}
            onChangeText = {(text)=>{
               this.setState({
                   bookName:text
               }) 


            }}>
            
    </TextInput>
     <TouchableOpacity
         style={styles.button}
         onPress={()=>{this.addRequest}}
         >
             <Text>Request</Text>
     </TouchableOpacity>
 
</View>


)

}



}

const styles = StyleSheet.create({
formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#FFFF00',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10.

}

})