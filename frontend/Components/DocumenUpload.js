import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput,Image } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

export default function DocumenUpload() {
    const [DocumentName,setDocumentName] = useState('')
    const [DocumentLink,setDocumentLink] = useState('')

    function DocUpload(){
        axios.post("http://192.168.120.253:4000/document",{DocumentName,DocumentLink}).then((res)=>{
            console.log(res.data.message)
        })
    }
    return (
        <>
             <View style={styles.Container}>
                <Text style={{ color: '#ffffff', fontSize: 25, alignSelf: 'center', textAlign: 'center', fontWeight: 'bold', }}>NSS</Text>
                <Text style={{ color: '#ffffff', fontSize: 25, alignSelf: 'center', textAlign: 'center', fontWeight: 'bold',  }}>National Service Scheme</Text>
                <Image style={{ width: 105, height: 105, alignSelf: 'center', }} source={require('./icon1.png')} />
            </View>
            <KeyboardAvoidingView style={styles.subview} >
                <View style={{ marginTop: 60, padding: 20 }}>
                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold', width: '90%', justifyContent: 'space-between', alignSelf: 'center', }}>Document Name</Text>
                    <TextInput style={styles.Input} onChangeText={(e)=>setDocumentName(e)}/>
                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold', width: '90%', justifyContent: 'space-between', alignSelf: 'center', marginTop: 10 }}>Documnet Link</Text>
                    <TextInput style={styles.Input} onChangeText={(e)=>setDocumentLink(e)}/>
                </View>
                <Text style={styles.Button} onPress={DocUpload}>Upload</Text>
            </KeyboardAvoidingView>


        </>
    )
}
const styles = StyleSheet.create({
    Container: {
        flex: 0.5,
        backgroundColor: '#404040',
        justifyContent: 'center',

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
        paddingTop: 10,
        color:'black',
        fontSize: 15,
        fontWeight:'500'
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
}
)