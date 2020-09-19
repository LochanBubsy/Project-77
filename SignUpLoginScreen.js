import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import db from '../config'
import firebase from 'firebase';

export default class SignUpLoginScreen extends Component{
constructor(){
    super();
    this.state={
        emailId: '',
        password: ''

    }
}
userLogin=(emailId,password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId,password).then(()=>{
    return alert("succesful login")
    
    
    })
    .catch((error)=>{
    var errorCode=error.code
    var errorMessage=error.message
    return alert(errorMessage)
    })
    
    }
    userSignUp=(emailId,password)=>{
    firebase.auth().createUserWithEmailAndPassword(emailId,password).then(()=>{
    return alert("Succesful Sign Up")
    
    })
    .catch((error)=>{
    var errorCode=error.code
    var errorMessage=error.message
    return alert(errorMessage)
    
    
    })
    
    }

render(){
    return(
<View >
<View>
<Text>Barter App</Text>

</View>
<View>
<TextInput
       
        placeholder="abc@example.com"
        keyboardType = 'email - address'
        onChangeText={(text)=>{
            this.setState({
                emailId: text
            })

        }}
    />
   
    <TextInput
       
       secureTextEntry = {true}
        keyboardType = 'Enter Password'
        onChangeText={(text)=>{
            this.setState({
                password: text
            })

        }}
    />
     <TouchableOpacity
       
        onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
        >
        
        <Text >SignUp</Text>
    </TouchableOpacity>
    <TouchableOpacity
        
        onPress = {()=>{this.userSignUp(this.state.emailId, this.state.password)}}>
        
        <Text >SignUp</Text>
    </TouchableOpacity>
</View>
</View>
    )
}

}
