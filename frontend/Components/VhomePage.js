import { View, Text, ScrollView,Image ,Linking} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo'
 

export default function VhomePage({route}) {
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
        <View>
            <View style={{alignSelf:"center",width:'50%',height:40,justifyContent:"center", backgroundColor:"#D9D9D9",marginTop:50,borderRadius:10}}>
                <Text style={{color:"black",fontSize:20, alignSelf:"center",fontWeight:'bold'}} onPress={()=>navigation.navigate('Scanner')}>Scanner</Text>
            </View>
            <View style={{alignSelf:"center",width:'50%',height:40,justifyContent:"center", backgroundColor:"#D9D9D9",marginTop:50,borderRadius:10}}>
                <Text style={{color:"black",fontSize:20, alignSelf:"center",fontWeight:'bold'}} onPress={()=>navigation.navigate('EventList')}>Event Photos</Text>
            </View>
            <View style={{alignSelf:"center",width:'50%',height:40,justifyContent:"center", backgroundColor:"#D9D9D9",marginTop:50,borderRadius:10}}>
                <Text style={{color:"black",fontSize:20, alignSelf:"center",fontWeight:'bold'}} onPress={()=>navigation.navigate('DocumentList')}>Event Documents</Text>
            </View>
            <View style={{alignSelf:"center",width:'50%',height:40,justifyContent:"center", backgroundColor:"#D9D9D9",marginTop:50,borderRadius:10}}>
                <Text style={{color:"black",fontSize:20, alignSelf:"center",fontWeight:'bold'}} onPress={()=>navigation.navigate('Verification')}>Change Password</Text>
            </View>
            
        </View>
    </>
  )
}