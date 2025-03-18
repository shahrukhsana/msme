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
import CountryPicker from '../../component/CountryPicker';
import PlacementPicker from '../../component/PlacementPicker';
import StatePicker from '../../component/StatePicker';

import { postData, apiUrl } from '../../component/api';
const urls=apiUrl();


export function SignUpScreen({ navigation, extraData=[] }) {


  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const [sponser_id, setsponser_id] = useState();
  const [sponser_name, setsponser_name] = useState();
  const [selectedPlacement, setSelectedPlacement] = useState();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [address, setaddress] = useState();
  const [city, setcity] = useState();
  const [password, setpassword] = useState();
  const [cpassword, setcpassword] = useState();
  


  const handleSubmit = async () => {
    const filedata = {
        "sponser_id":sponser_id,
        "placement":selectedPlacement,
        "name":name,
        "email":email,
        "phone":phone,
        "password":password,
        "cpassword":cpassword
    };
    const response = await postData(filedata, urls.registerOtpSend,"POST", navigation,extraData);
    if(response.status==200)
    {
      navigation.navigate('RegisterOtp',{"id":response.data.id});
    }

  };
 

  return (
    <View style={theme.authBackground} >
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={theme.authcontainer}>

        <Image source={require('../../assets/logo.png')}  />
        <Text style={theme.authtitle}>Create Account!</Text>


        <View style={[theme.row]}>
          


            <View style={[theme.col12]}>
              <Text style={[theme.inputLabel]}>Name<Text style={{color:'red'}}> *</Text></Text>
              <View style={theme.authinputContainer}>
                <Icon name="user" size={20} style={theme.authinputIcon} />
                <TextInput
                  style={theme.authinput}
                  />
              </View>
            </View>

            <View style={[theme.col12]}>
              <Text style={[theme.inputLabel]}>Email<Text style={{color:'red'}}> *</Text></Text>
              <View style={theme.authinputContainer}>
                <Icon name="user" size={20} style={theme.authinputIcon} />
                <TextInput
                  style={theme.authinput}
                  />
              </View>
            </View>

            <View style={[theme.col12]}>
              <Text style={[theme.inputLabel]}>Phone<Text style={{color:'red'}}> *</Text></Text>
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

            <View style={[theme.col12]}>
              <Text style={[theme.inputLabel]}>Confirm Password<Text style={{color:'red'}}> *</Text></Text>
              <View style={theme.authinputContainer}>
                <Icon name="lock" size={20} style={theme.authinputIcon} />
                <TextInput
                  style={theme.authinput}
                  secureTextEntry
                  />
              </View>
            </View>


          


        </View>



        

        <LinearGradient
          colors={GradientStyles.auth.colors}
          style={theme.authbutton}
        >
          <TouchableOpacity style={theme.button} onPress={handleSubmit}>
            <Text style={theme.authbuttonText}>Create Account</Text>
          </TouchableOpacity>
        </LinearGradient>




      </View>
      </ScrollView>

    </View>
  );
}