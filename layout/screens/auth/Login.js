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

export function LoginScreen({ navigation }) {
  return (
    <View style={theme.authBackground} >
      <View style={theme.authcontainer}>

        <Image source={require('../../assets/logo.png')}  />        

        <Text style={theme.authtitle}>Sign In To Your Account!</Text>
        <Text style={theme.authsubtitle}>Welcome Back!</Text>

        <View style={[theme.row]}>

          <View style={[theme.col12]}>
            <Text style={[theme.inputLabel]}>Username<Text style={{color:'red'}}> *</Text></Text>
            <View style={theme.authinputContainer}>
              <Icon name="user" size={20} style={theme.authinputIcon} />
              <TextInput
                style={theme.authinput}
                />
            </View>
          </View>

          <View style={[theme.col12]}>
            <Text style={[theme.inputLabel]}>Password<Text style={{color:'red'}}> *</Text></Text>
            <View style={theme.authinputContainer}>
              <Icon name="lock" size={20} style={theme.authinputIcon} />
              <TextInput
                style={theme.authinput}
                secureTextEntry
                />
            </View>
          </View>


        </View>

        <View style={theme.authrow}>
          <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
            <Text style={theme.authforgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <LinearGradient
          colors={GradientStyles.auth.colors}
          style={theme.authbutton}
        >
          <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('Home')}>
            <Text style={theme.authbuttonText}>Sign in Account</Text>
          </TouchableOpacity>
        </LinearGradient>




        <Text style={theme.authsignupText}>
          If you have no account{' '}
          <Text style={theme.authsignupLink} onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}