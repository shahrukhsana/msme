import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import theme from '../../StyleSheet/theme';
import GradientStyles from '../../StyleSheet/GradientStyles';

export function SignUpScreen({ navigation }) {


  const [selectedCountry, setSelectedCountry] = useState("Select Country");

  const handleValueChange = (itemValue) => {
    setSelectedCountry(itemValue);
  };


  return (
    <View style={theme.authBackground} >
      <ScrollView>
      <View style={theme.authcontainer}>

        <Image source={require('../../assets/logo.png')}  />
        <Text style={theme.authtitle}>Create Account!</Text>


        <View style={[theme.row]}>
          
          
          <View style={[theme.col6]}>
            <View style={theme.inputContainer}>
              <Icon name="star" size={20} style={theme.inputIcon} />
              <TextInput
                style={theme.input}
                placeholder="Sponser ID."
                placeholderTextColor="#999"
              />
            </View>
          </View>


          <View style={[theme.col6]}>
            <View style={theme.inputContainer}>
              <Icon name="star" size={20} style={theme.inputIcon} />
              <TextInput
                style={theme.input}
                placeholder="Sponser Name"
                placeholderTextColor="#999"
              />
            </View>
          </View>


          
          <View style={[theme.col6]}>
            <View style={theme.inputContainer}>
              <Icon name="user" size={20} style={theme.inputIcon} />
              <TextInput
                style={theme.input}
                placeholder="Name"
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <View style={[theme.col6]}>
            <View style={theme.inputContainer}>
              <Icon name="envelope" size={20} style={theme.inputIcon} />
              <TextInput
                style={theme.input}
                placeholder="Email"
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <View style={[theme.col6]}>

            <View style={theme.inputContainer}>

            <Icon name="globe" size={20} style={theme.inputIcon} />
            <Picker
              selectedValue={selectedCountry}
              onValueChange={handleValueChange}
              style={theme.picker}
            >
              <Picker.Item label="Select Country" value="Select Country" />
              <Picker.Item label="India" value="India" />
              <Picker.Item label="Mexico" value="Mexico" />
              <Picker.Item label="Australia" value="Australia" />
            </Picker>
            {/* <Text style={theme.selectedText}>Selected Country: {selectedCountry}</Text> */}


              
            </View>
          </View>

          <View style={[theme.col6]}>
            <View style={theme.inputContainer}>
              <Icon name="phone" size={20} style={theme.inputIcon} />
              <TextInput
                style={theme.input}
                placeholder="Mobile"
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <View style={[theme.col6]}>
            <View style={theme.inputContainer}>
              <Icon name="map-marker" size={20} style={theme.inputIcon} />
              <TextInput
                style={theme.input}
                placeholder="State"
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <View style={[theme.col6]}>
            <View style={theme.inputContainer}>
              <Icon name="map" size={20} style={theme.inputIcon} />
              <TextInput
                style={theme.input}
                placeholder="City"
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <View style={[theme.col12]}>
            <View style={theme.inputContainer}>
              <Icon name="home" size={20} style={theme.inputIcon} />
              <TextInput
                style={theme.input}
                placeholder="Address"
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <View style={[theme.col6]}>
            <View style={theme.authinputContainer}>
              <Icon name="lock" size={20} style={theme.inputIcon} />
              <TextInput
                style={theme.authinput}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry
              />
            </View>
          </View>

          <View style={[theme.col6]}>
            <View style={theme.authinputContainer}>
              <Icon name="lock" size={20} style={theme.inputIcon} />
              <TextInput
                style={theme.authinput}
                placeholder="Confirm Password"
                placeholderTextColor="#999"
                secureTextEntry
              />
            </View>
          </View>


        </View>



        

        <LinearGradient
          colors={GradientStyles.auth.colors}
          style={theme.authbutton}
        >
          <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('Otp')}>
            <Text style={theme.authbuttonText}>Create Account</Text>
          </TouchableOpacity>
        </LinearGradient>




      </View>
      </ScrollView>

    </View>
  );
}