import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraPhoto = () => {
  const cameraRef = useRef(null);

  const takePhoto = async () => {
    if (cameraRef.current) {
      try {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        Alert.alert('Photo Taken', 'Photo has been captured successfully!');
        console.log('Photo URI:', data.uri);
      } catch (error) {
        console.error('Error taking photo:', error);
        Alert.alert('Error', 'Failed to take photo.');
      }
    } else {
      Alert.alert('Error', 'Camera is not ready.');
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.auto}
        captureAudio={false}
      />
      <View style={styles.captureContainer}>
        <TouchableOpacity onPress={takePhoto} style={styles.captureButton}>
          <Text style={styles.captureText}>Take Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    flex: 1,
    width: '100%',
  },
  captureContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  captureButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
  },
  captureText: {
    fontSize: 14,
  },
});

export default CameraPhoto;
