import { View, Text, TextInput, ScrollView, TouchableHighlight, RootTagContext, Image } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Companies(props) {
    const image1='./Microsoft.png'
    const company=props.company
    const role=props.role
    const place=props.place
  return (
    <View style={{ borderWidth: 1, borderColor: '#CDCDCD', width: '95%', alignSelf: 'center', marginTop: 12 }}>
          <View style={{ flexDirection: "row", width: '90%', alignSelf: 'center', marginTop: 12 }}>
            <Image
              style={{ width: 50, height: 50, }}
              source={require(image1)} />
            <Text style={{ color: 'black', width: '50%', fontWeight: '600', fontSize: 16, marginLeft: 5 }}>{role}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '109%', top: -7 }}>
            <Text style={{ fontWeight: '100', color: 'black', fontSize: 10 }}>{company}</Text>
            <Text style={{ fontWeight: '100', color: 'black', fontSize: 10 }}>5.0/5.0  (30,000 reviews)</Text>
          </View>
          <View style={{ borderWidth: 0.3, borderColor: '#CDCDCD', width: '95%', alignSelf: 'center', marginTop: 17 }}></View>
          <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: '400', color: 'black', fontSize: 11, marginTop: 10 }}>{place}</Text>
            <View style={{ backgroundColor: '#51E90A', width: '50%', marginTop: 11 }}>

              <Text style={{ fontWeight: '400', color: 'black', fontSize: 10 }}> <FontAwesome name='money' size={10} style={{ color: '#0352B1' }} />  ₹10,00,000 - ₹18,00,000 a year</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 9 }}>
              <View style={{ borderWidth: 1, borderRadius: 2, width: '30%', textAlign: "center" }}>
                <Text style={{ fontWeight: '600', color: '#0352B1', fontSize: 10 }}> <MMaterialCommunityIcons name='av-timer' size={10} style={{ color: '#0352B1' }} /> Flexible Shift</Text>
              </View>
              <View style={{ borderWidth: 1, borderRadius: 2, width: '50%', marginLeft: 10 }}>

                <Text style={{ fontWeight: '600', color: '#0352B1', fontSize: 10 }}><MaterialIcons name='cases' size={10} style={{ color: '#0352B1' }} /> Regular / Permanent Role</Text>
              </View>
            </View>
            <Text style={{ fontWeight: '100', color: 'black', fontSize: 10, marginTop: 10, marginBottom: 10 }}>1 day ago</Text>
          </View>





        </View>



  )
}