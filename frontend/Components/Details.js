import { View, Text, StyleSheet,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Details({route}) {
  const Email =route.params.Email;
  const [Data,setData] =useState([{}])
  useEffect(()=>{
    axios.get("http://192.168.120.253:4000/data").then((res)=>{
      setData(res.data)
    })
  },[])
  return (
    <>
      <View style={{ backgroundColor: '#ffffff', flex: 1, }}>
        <View style={styles.Container}>
          <Text style={{ color: '#ffffff', fontSize: 25, alignSelf: 'center', textAlign: 'center', fontWeight: 'bold',  }}>NSS</Text>
          <Text style={{ color: '#ffffff', fontSize: 25, alignSelf: 'center', textAlign: 'center', fontWeight: 'bold', }}>National Service Scheme</Text>
          <Image style={{width:135,height:135,alignSelf:'center',marginTop:19,}} source={require('./icon1.png')} />
        </View>
        {
          Data.map((e,id)=>{
            if(e.Email===Email){
              return(
                <View style={styles.subview}>
          <Text style={styles.Contents}>Name         : {e.Name}</Text>
          <Text style={styles.Contents}>Email         : {e.Email}</Text>
          <Text style={styles.Contents}>Branch      : {e.Branch}</Text>
          <Text style={styles.Contents}>Section     : 0{e.Section}</Text>
          <Text style={styles.Contents}>Year           : {e.Year}</Text>
          <Text style={styles.Contents}>Unit            : 0{e.Unit}</Text>
        </View>

              )
            }
          })
        }
       

       
        <Text style={styles.Button}>Logout</Text>
      </View>


    </>

  )
}
const styles = StyleSheet.create({
  Container: {
    // flex: 0.7,
    backgroundColor: '#404040',
    justifyContent: 'center',
    height:'30%'

  },
  subview: {
    // flex: 1,
    // backgroundColor: '#ffffff',

  },
  Contents: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 10,
    padding: 15
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
}
)