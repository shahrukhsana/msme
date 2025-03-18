import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import theme from '../../StyleSheet/theme';
import GradientStyles from '../../StyleSheet/GradientStyles';

export function OtpScreen({ navigation }) {

  const otpLength = 4; // Number of OTP digits
  const [otp, setOtp] = useState(Array(otpLength).fill(''));
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically move to the next input
    if (text && index < otpLength - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (text, index) => {
    if (text === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };


  return (
    <View style={theme.authBackground} >
      <View style={theme.authcontainer}>

        <Image source={require('../../assets/logo.png')}  />        

        <Text style={theme.authtitle}>Enter Otp!</Text>



        <View style={styles.inputContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') {
                handleBackspace(text, index);
              }
            }}
          />
        ))}
      </View>
      


        <LinearGradient
          colors={GradientStyles.auth.colors}
          style={theme.authbutton}
        >
          <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('Home')}>
            <Text style={theme.authbuttonText}>Submit Otp</Text>
          </TouchableOpacity>
        </LinearGradient>




       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginHorizontal: 5,
  },
  otpText: {
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
});