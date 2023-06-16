import { View, Text } from 'react-native'
import React from 'react'
import Login from './Components/Login'
import Details from './Components/Details'
import EvenUpload from './Components/EvenUpload'
import DocumenUpload from './Components/DocumenUpload'
import AccoCreation from './Components/AccoCreation'
import Test from './Components/Test'
import UhomePage from './Components/UhomePage'
import Verification from './Components/Verification'
import VhomePage from './Components/VhomePage'
import EventList from './Components/EventList'
import DocumentList from './Components/DocumentList'
import Password from './Components/Password'
import Scanner from './Components/Scanner'
import Volunterslist from './Components/Volunterslist'
import Attendence from './Components/Attendence'
import SplashScreen from './Components/SplashScreen'

import ScanScreen from './Components/ScanScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { ScrollViewBase } from 'react-native/Libraries/Components/ScrollView/ScrollView'

export default function App() {
  const stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
    
     
      <stack.Screen name='SplashScreen' component={SplashScreen} />
      {/* <stack.Screen name='Attendence' component={Attendence} /> */}
      <stack.Screen name='Login' component={Login} />
            <stack.Screen name='UhomePage' component={UhomePage} />
      <stack.Screen name='Volunterslist' component={Volunterslist} />
      <stack.Screen name='AccoCreation' component={AccoCreation} />
      <stack.Screen name='ScanScreen' component={ScanScreen} /> 
      
      <stack.Screen name='Scanner' component={Scanner} />
        <stack.Screen name='Verification' component={Verification} />
        <stack.Screen name='VhomePage' component={VhomePage} />
        <stack.Screen name='Details' component={Details} />
        <stack.Screen name='EvenUpload' component={EvenUpload} />
        <stack.Screen name='DocumenUpload' component={DocumenUpload} />
        <stack.Screen name='EventList' component={EventList} />
        <stack.Screen name='DocumentList' component={DocumentList} />
        <stack.Screen name='Password' component={Password} />
      </stack.Navigator>
    </NavigationContainer>
  )
}