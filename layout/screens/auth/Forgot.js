import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import theme from '../../StyleSheet/theme';
import GradientStyles from '../../StyleSheet/GradientStyles';

export function ForgotScreen({ navigation }) {
  return (
    <View style={theme.authBackground} >
      <View style={theme.authcontainer}>

        <Image source={require('../../assets/logo.png')}  />        

        <Text style={theme.authtitle}>Welcome Back!</Text>

        <View style={theme.authinputContainer}>
          <Icon name="phone" size={20} style={theme.authinputIcon} />
          <TextInput
            style={theme.authinput}
            placeholder="Mobile or Email"
            placeholderTextColor="#999"
          />
        </View>

       
        

        <LinearGradient
          colors={GradientStyles.auth.colors}
          style={theme.authbutton}
        >
          <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('Otp')}>
            <Text style={theme.authbuttonText}>Send Otp</Text>
          </TouchableOpacity>
        </LinearGradient>




        <Text style={theme.authsignupText}>
          If you have account{' '}
          <Text style={theme.authsignupLink} onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}