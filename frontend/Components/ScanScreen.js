import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

class ScanScreen extends Component {
  state = {
    barcodeData: '',
  };

  render() {
    const { barcodeData } = this.state;

    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Allow',
            buttonNegative: 'Deny',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Allow',
            buttonNegative: 'Deny',
          }}
        >
          <View style={styles.topBar}>
            <Text style={styles.topBarText}>Scan QR Code</Text>
          </View>
          {barcodeData ? (
              <View style={styles.barcodeDataContainer}>
              <Text style={styles.barcodeDataText}>{barcodeData}</Text>
               
              </View>
            ) : null}
          
          <View style={styles.scanLine} />
          <View style={styles.bottomBar}>
           
            <TouchableOpacity
              onPress={() => this.setState({ barcodeData: '' })}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Scan Again</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert('Barcode data: ' + barcodeData)}
              style={styles.button}
              disabled={!barcodeData}
            >
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </RNCamera>
      </View>
    );
  }

  onBarCodeRead(e) {
    this.setState({ barcodeData: e.data });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topBar: {
    backgroundColor: '#000',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  scanLine: {
    height: 2,
    width: '100%',
    backgroundColor: '#FFF',
    position: 'absolute',
    top: '50%',
  },
  bottomBar: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
  },
  barcodeDataContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  barcodeDataText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ScanScreen;
