import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import theme from '../../StyleSheet/theme';
import GradientStyles from '../../StyleSheet/GradientStyles';

export function CreatePasswordScreen({ navigation }) {
  return (
    <ImageBackground
    // source={{ uri: 'https://i.pinimg.com/736x/cc/47/8f/cc478fc4d03ef1b3394be8cecf5482de.jpg' }}
      style={theme.background}
    >
      <View style={theme.container}>
        <Text style={theme.welcomeText}>Create Password</Text>

        <View style={theme.inputContainer}>
          <TextInput
            style={theme.input}
            placeholder="New Password"
            placeholderTextColor="#999"
            keyboardType="email-address"
          />
        </View>
        <View style={theme.inputContainer}>
          <TextInput
            style={theme.input}
            placeholder="Confirm Password"
            placeholderTextColor="#999"
            keyboardType="email-address"
          />
        </View>


        <LinearGradient 
          style={theme.buttonGreen} 
          colors={GradientStyles.primary.colors}
          start={GradientStyles.primary.start}
          end={GradientStyles.primary.end}>          
          <TouchableOpacity style={theme.btnInner} onPress={() => navigation.navigate('Home')}>
            <Text style={theme.buttonText}>Submit</Text>
          </TouchableOpacity>
        </LinearGradient>

      </View>
    </ImageBackground>
  );
}
