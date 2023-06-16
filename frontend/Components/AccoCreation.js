import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

export default function AccoCreation() {
  const [Name,setName] = useState("")
  const [Email,setEmail] = useState("")
  const [Password,setPassword] = useState("")
  const [Branch,setBranch] = useState("")
  const [Section,setSection] = useState(0)
  const [Year,setYear] = useState(0)
  const [Unit,setUnit] = useState(0)


  function Upload(){ 
    axios.post("http://192.168.120.253:4000/signup",{Name,Email,Password,Branch,Section,Year,Unit}).then((res)=>{
      console.log(res.data.message)
    })
    
  }
  return ( 
    <>

      <View style={styles.Container}>
        <View style={{ alignSelf: 'center', marginTop: 10 }}>
          <Text style={{ textAlign: 'center', color: '#000000', fontWeight: '900', fontSize: 28 }}>Account Creation</Text>
        </View>

        <KeyboardAvoidingView >
          <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold', width: '90%', alignSelf: 'center', marginTop: 20 }}>Name</Text>
          <TextInput style={styles.Input} placeholder='Enter volunteer Name' placeholderTextColor={'#000000'}  onChangeText={(e)=>setName(e)}/>
          <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold', width: '90%', alignSelf: 'center', marginTop: 5 }}>Email </Text>
          <TextInput style={styles.Input} placeholder='abc@gmail.com' placeholderTextColor={'#000000'} onChangeText={(e)=>setEmail(e)} />
          <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold', width: '90%', alignSelf: 'center', marginTop: 5 }}>Password </Text>
          <TextInput style={styles.Input} placeholder='abc@gmail.com' placeholderTextColor={'#000000'} onChangeText={(e)=>setPassword(e)} />
          <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold', width: '90%', alignSelf: 'center', marginTop: 5 }}>Branch</Text>
          <TextInput style={styles.Input} placeholder='branch' placeholderTextColor={'#000000'} onChangeText={(e)=>setBranch(e)} />
          <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold', width: '90%', alignSelf: 'center', marginTop: 5 }}>Section</Text>
          <TextInput style={styles.Input} keyboardType='number-pad' placeholder='01/02/03/04' placeholderTextColor={'#000000'} onChangeText={(e)=>setSection(e)} />
          <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold', width: '90%', alignSelf: 'center', marginTop: 5 }}>Year </Text>
          <TextInput style={styles.Input} keyboardType='number-pad' placeholder='Enter joined year' placeholderTextColor={'#000000'} onChangeText={(e)=>setYear(e)} />
          <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold', width: '90%', alignSelf: 'center', marginTop: 5 }}>Unit </Text>
          <TextInput style={styles.Input} keyboardType='number-pad' placeholder='unit No' placeholderTextColor={'#000000'} onChangeText={(e)=>setUnit(e)} />
        </KeyboardAvoidingView>

        <View>
          <Text style={styles.Button} onPress={Upload}>Create Account</Text>
        </View>
      </View>


    </>

  )
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffffff',



  },
  Input: {
    borderWidth: 2,
    width: '90%',
    borderRadius: 10,
    borderColor: '#ffffff',
    borderBottomColor: '#404040',
    paddingLeft: 30,
    alignSelf: 'center',
    color: '#000000',
    fontSize: 18
  },
  Button: {
    color: '#ffffff',
    width: '60%',
    fontWeight: '500',
    fontSize: 17,
    alignSelf: 'center',
    backgroundColor: '#404040',
    textAlign: 'center',
    borderRadius: 50,
    padding: 10,
    marginTop: 20,
    justifyContent: 'flex-start'
  }
})