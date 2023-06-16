import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000); // adjust the delay time here (in milliseconds)
  }, []);

  return (
    <View style={styles.container}>
    <View style={{marginTop:-30}}>
    <Image style={{ width: 150, height: 150, alignSelf: 'center', marginTop:10 }} source={require('./gayatri.jpg')} />
    </View>
    <View style={{marginTop:20}}>
    <Image style={{ width: 150,height:150, alignSelf: 'center',  }} source={require('./CFSR.jpg')} />
    </View>
    <View style={{marginTop:30}}>
    <Image style={{ width: 150, height: 150, alignSelf: 'center', marginTop: 19, marginBottom: 20 }} source={require('./icon1.png')} />
    </View>

     
    
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    
   
  },

});

export default (SplashScreen);
