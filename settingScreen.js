import React from 'react'
import {View, Text, TextInput, TouchableOpacity} from react-native
import db from '../config'

export default class SettingScreen extends React.Component{
//Create textinput for first name, last name, contact number, address, and a save button
constructor(){
super()
this.state={
    firstName:"",
    lastName:"",
    contactNumber:"",
    address:"",
    docId:""
}

}
getUserDetails(){
    var user=firebase.auth().currentUser
    var email=user.email
    db.collection('users').where("email_id","==",email).get()
    .then(snapshot=>{
        snapshot.forEach(doc=>{
            var data=doc.data()
            this.setState({
                firstName:data.first_name,
                lastName:data.last_name,
                address:data.address,
                contactNumber:data.contact,
                docId:doc.id
            })
        })
    })
}
componentDidMount(){
    this.getUserDetails()
}
updateUserDetails=()=>{
    db.collection("users").doc(this.state.docId).update({
        first_name:this.state.firstName,
        last_name:this.state.lastName,
        address:this.state.address,
        contact:this.state.contact
    })
}
render(){
return(
<View>
    <Text>Setting screen</Text>
<TextInput 
style={Styles.SScreen}
placeHolder={"First Name"}
onChangeText={(text)=>{
firstName:text

}}
value={this.state.firstName}
>

</TextInput>

<TextInput
style={styles.SScreen}
placeHolder={"Last Name"}
onChangeText={(text)=>{
    lastName:text
}}
value={this.state.lastName}
></TextInput>

<TextInput
style={styles.SScreen}
placeHolder={"Contact Number"}
onChangeText={(text)=>{
    contactNumber:text
}}
value={this.state.contactNumber}
></TextInput>

<TextInput
style={styles.SScreen}
placeHolder={"Address"}
onChangeText={(text)=>{
    address:text
}}
value={this.state.address}
></TextInput>
<TouchableOpacity style={{width:200,height:30,borderWidth:3}}
onPress={()=>{this.updateUserDetails}}>

</TouchableOpacity>
</View>

)

}

}