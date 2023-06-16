import React, {useState, useEffect} from 'react';
import QRCode from 'react-native-qrcode-svg';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from 'react-native';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
    
        <QRCode
          value={qrvalue ? qrvalue : 'NA'}
          size={250}
          color="black"
          backgroundColor="white"
        
        />
        <Text style={styles.textStyle}>
          Please enter event name to generate QR code
        </Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={
            (inputText) => setInputText(inputText)
          }
          placeholder=" Enter Event Name"
          value={inputText}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => setQrvalue(inputText)}>
          <Text style={styles.buttonTextStyle}>
            Generate QR Code
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  textInputStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    borderWidth:1,
    borderRadius:10,
    paddingLeft:10 ,
    color:'#000000',
    fontSize:20
  },
  buttonStyle: {
    backgroundColor: '#444444',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#444444',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    padding: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});
