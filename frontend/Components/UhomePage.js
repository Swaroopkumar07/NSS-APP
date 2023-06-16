import { View, Text, ScrollView,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo'

export default function UhomePage({route}) {
    
    const navigation = useNavigation()
    const Email = route.params.Email;
  return (
    <>
        <View style={{backgroundColor:"#404040",height:"40%",justifyContent:'flex-start'}}>
        <Entypo name='menu' size={50} style={{color:'#ffffff'}}  onPress={()=>navigation.navigate('Details',{Email:Email})}/>
        <View style={{ justifyContent: 'space-around', flexDirection: 'row' ,marginTop:10}}>
          <Image style={{ width: 40, height: 40, alignSelf: 'center',  }} source={require('./gayatri.jpg')} />
          <Text style={{ color: '#ffffff', fontSize: 25, alignSelf: 'center', textAlign: 'center', fontWeight: 'bold' }}>GVPCOE(A)</Text>
          <Image style={{ width: 40,height:40, alignSelf: 'center',  }} source={require('./CFSR.jpg')} />
        </View>
        <Text style={{ color: '#ffffff', fontSize: 25, alignSelf: 'center', textAlign: 'center', fontWeight: 'bold',}} onPress={() => {Linking.openURL('http://www.gvpcenss.org')}}>NSS</Text>
        <Text style={{ color: '#ffffff', fontSize: 25, alignSelf: 'center', textAlign: 'center', fontWeight: 'bold',  }} onPress={() => {Linking.openURL('http://www.gvpcenss.org')}}   >National Service Scheme</Text>
        <Image style={{width:135,height:135,alignSelf:'center',marginTop:10,}} source={require('./icon1.png')}  />
        </View>
        <ScrollView>
            <View style={{alignSelf:"center",width:'50%',height:40,justifyContent:"center", backgroundColor:"#D9D9D9",marginTop:50,borderRadius:10}}>
                <Text style={{color:"black",fontSize:18, alignSelf:"center",fontWeight:'bold'}} onPress={()=>navigation.navigate('Scanner')}>Share QR Code</Text>
            </View>
            <View style={{alignSelf:"center",width:'50%',height:40,justifyContent:"center", backgroundColor:"#D9D9D9",marginTop:50,borderRadius:10}}>
                <Text style={{color:"black",fontSize:18, alignSelf:"center",fontWeight:'bold'}} onPress={()=>navigation.navigate('EvenUpload')}>Upload Photos</Text>
            </View>
            <View style={{alignSelf:"center",width:'50%',height:40,justifyContent:"center", backgroundColor:"#D9D9D9",marginTop:50,borderRadius:10}}>
                <Text style={{color:"black",fontSize:18, alignSelf:"center",fontWeight:'bold'}} onPress={()=>navigation.navigate('DocumenUpload')}>Upload Documents</Text>
            </View>
            <View style={{alignSelf:"center",width:'50%',height:40,justifyContent:"center", backgroundColor:"#D9D9D9",marginTop:50,borderRadius:10}}>
                <Text style={{color:"black",fontSize:18, alignSelf:"center",fontWeight:'bold'}}  onPress={()=>navigation.navigate('Volunterslist')}>Volunteers List</Text>
            </View>
            <View style={{alignSelf:"center",width:'50%',height:40,justifyContent:"center", backgroundColor:"#D9D9D9",marginTop:50,borderRadius:10}}>
                <Text style={{color:"black",fontSize:18, alignSelf:"center",fontWeight:'bold'}}>Attendence</Text>
            </View>
            <View style={{alignSelf:"center",width:'50%',height:40,justifyContent:"center", backgroundColor:"#D9D9D9",marginTop:50,borderRadius:10}}>
                <Text style={{color:"black",fontSize:18, alignSelf:"center",fontWeight:'bold'}}onPress={()=>navigation.navigate('AccoCreation')}>Account Creation</Text>
            </View>
        </ScrollView>
    </>
  )
}