
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export function SplashScreen ({ navigation }) {
  useEffect(() => {
    // Navigate to HomeScreen after 2 seconds
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Background color for splash
  },
  logo: {
    width: 150,
    height: 150, // Set the size of the logo
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});
