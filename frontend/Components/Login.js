import { View, Text, StyleSheet, TextInput, Image, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Login() {
  const navigation = useNavigation()
  const [Email,setEmail] = useState("")
  const [Password,setPassword] = useState("")

  return (
    <>
      <View style={styles.Container}>
        <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
          <Image style={{ width: 40, height: 40, alignSelf: 'center', }} source={require('./gayatri.jpg')} />
          <Text style={{ color: '#ffffff', fontSize: 25, alignSelf: 'center', textAlign: 'center', fontWeight: 'bold' }}>GVPCOE(A)</Text>
          <Image style={{ width: 40,height:40, alignSelf: 'center',  }} source={require('./CFSR.jpg')} />
        </View>
        <View style={{ marginTop: 0 }}>
          <Text style={{ color: '#ffffff', fontSize: 25, alignSelf: 'center', textAlign: 'center', fontWeight: 'bold' }}>NSS</Text>
          <Text style={{ color: '#ffffff', fontSize: 25, alignSelf: 'center', textAlign: 'center', fontWeight: 'bold', }}>National Service Scheme</Text>
        </View>
        <Image style={{ width: 105, height: 105, alignSelf: 'center', marginTop: 19, marginBottom: 20 }} source={require('./icon1.png')} />
      </View>
      


      <KeyboardAvoidingView style={styles.subview}>
        <View style={{ marginTop: 60 }}>
          <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold', width: '90%', justifyContent: 'space-between', alignSelf: 'center' }}>Email</Text>
          <TextInput style={styles.Input} onChangeText={(e)=>setEmail(e)} />
          <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold', width: '90%', justifyContent: 'space-between', alignSelf: 'center' }}>Password</Text>
          <TextInput style={styles.Input} onChangeText={(e)=>setPassword(e)}/>
        </View>
        <Text style={styles.Button} 
       onPress={()=>{
        axios.post("http://192.168.120.253:4000/login",{Email,Password}).then((res)=>{
          console.log(res.data)
          if(res.data.message==="Login Succesful"){
            navigation.navigate("UhomePage",{Email})
          }
        })
       }}
        >Login</Text>
        <Text style={{ color: '#4f4e4f', fontWeight: '400', alignSelf: 'center', marginTop: 15, }} onPress={() => navigation.navigate('Verification')}>Forget <Text style={{ color: '#332864', fontWeight: '900', alignSelf: 'center', marginTop: 15 }}>Password.?</Text> </Text>
      </KeyboardAvoidingView>

    </>
  )
}
const styles = StyleSheet.create({
  Container: {
    // flex: 0.7,
    backgroundColor: '#404040',
    justifyContent: 'center',
    height: '50%'

  },
  subview: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  Input: {
    borderWidth: 2,
    width: '90%',
    marginLeft: 20,
    borderRadius: 10,
    borderColor: '#ffffff',
    borderBottomColor: '#404040',
    paddingLeft: 30,
    color: '#000000',
    fontSize: 20
  },
  Button: {
    color: '#ffffff',
    width: '40%',
    fontWeight: '500',
    fontSize: 17,
    alignSelf: 'center',
    backgroundColor: '#404040',
    textAlign: 'center',
    borderRadius: 50,
    marginTop: 20,
    padding: 10
  }
})