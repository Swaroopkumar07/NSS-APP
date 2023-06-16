import { View, Text ,KeyboardAvoidingView,TextInput,StyleSheet,Image} from 'react-native'
import React from 'react'

export default function Password() {
  return (
   <>
        <View style={{backgroundColor:"#404040",height:"42%",}}>
            <View style={{ justifyContent: 'space-around', flexDirection: 'row' ,marginTop:15}}>
          <Image style={{ width: 40, height: 40, alignSelf: 'center',  }} source={require('./gayatri.jpg')} />
          <Text style={{ color: '#ffffff', fontSize: 25, alignSelf: 'center', textAlign: 'center', fontWeight: 'bold' }}>GVPCOE(A)</Text>
          <Image style={{ width: 40,height:40, alignSelf: 'center',  }} source={require('./CFSR.jpg')} />
        </View>
        <Text style={{ color: '#ffffff', fontSize: 25, alignSelf: 'center', textAlign: 'center', fontWeight: 'bold',}} onPress={() => {Linking.openURL('http://www.gvpcenss.org')}}>NSS</Text>
        <Text style={{ color: '#ffffff', fontSize: 25, alignSelf: 'center', textAlign: 'center', fontWeight: 'bold',  }} onPress={() => {Linking.openURL('http://www.gvpcenss.org')}}   >National Service Scheme</Text>
        <Image style={{width:100,height:100,alignSelf:'center',marginTop:10,}} source={require('./icon1.png')}  />
        </View>
            
            <View style={{flex:1,backgroundColor:'#ffffff'}}>
            <KeyboardAvoidingView>
            <View style={{ marginTop: 60 }}>
          <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold', width: '90%', justifyContent: 'space-between', alignSelf: 'center' }}>New Password</Text>
          <TextInput style={styles.Input} />
          </View>
          </KeyboardAvoidingView>
          
          <Text style={styles.Button} onPress={()=>navigation.navigate('Password')}>Change Password</Text>
          </View>
   </>
  )
}
const styles = StyleSheet.create({
  Container: {
    // flex: 0.7,
    backgroundColor: '#404040',
    justifyContent: 'center',
    height:'47%'

  },
    Input: {
      borderWidth: 2,
      width: '90%',
      marginLeft: 20,
      borderRadius: 10,
      borderColor: '#ffffff',
      borderBottomColor: '#404040',
      paddingLeft: 30,
      color:'#000000',
      fontSize:20
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
        marginTop: 30,
        padding: 10
      }

})