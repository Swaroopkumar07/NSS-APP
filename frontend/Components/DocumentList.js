import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Linking } from 'react-native/Libraries/Linking/Linking'
export default function DocumentList() {
    const [data,setdata] = useState([])
    useEffect(()=>{
        axios.get("http://192.168.120.253:4000/documentData").then((res)=>{
            setdata(res.data)
        })
    },[])
  return (
    <>
        <View style={{backgroundColor:"#404040",height:"15%"}}>
            <View style={{marginTop:"17%"}}>
             <Text style={{color:"white",alignSelf:"center",fontSize:30,fontWeight:'bold'}}>Documents List</Text>
            </View>
        </View>
        <ScrollView>
        {
            data.map((e,id)=>{
                return(
                    <View key={id} style={{alignSelf:"center",width:250,height:40,justifyContent:"center", backgroundColor:"#D9D9D9",marginTop:35,borderRadius:10}}>
                <Text style={{color:"black",fontSize:20, alignSelf:"center",fontWeight:'bold'}} onPress={()=>{
                    Linking.openURL(e.DocumentLink)
                }}>{e.DocumentName}</Text>
            </View>

                )
            })
        }
        
          
           
        </ScrollView>
            
        
    </>
  )
}