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
import StatePicker from '../../component/StatePicker';
import CategoryPicker from '../../component/CategoryPicker';

import { postData, apiUrl } from '../../component/api';
const urls=apiUrl();


export function SignUpScreen({ navigation, extraData=[] }) {


  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const [selectedCategory, setSelectedcategory] = useState();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [address, setaddress] = useState();
  const [city, setcity] = useState();
  const [companyname, setcompanyname] = useState();
  const [password, setpassword] = useState();
  const [cpassword, setcpassword] = useState();
  
  
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);


  const handleSubmit = async () => {
    const filedata = {
        "name":name,
        "email":email,
        "phone":phone,

        "companyname":companyname,
        "country":selectedCountry,
        "state":selectedState,
        "city":city,
        "address":address,
        "category":selectedCategory,

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
                  value={name}
                  onChangeText={setname}
                  />
              </View>
            </View>

            <View style={[theme.col12]}>
              <Text style={[theme.inputLabel]}>Email<Text style={{color:'red'}}> *</Text></Text>
              <View style={theme.authinputContainer}>
                <Icon name="envelope" size={20} style={theme.authinputIcon} />
                <TextInput
                  style={theme.authinput}
                  keyboardType='email-address'
                  value={email}
                  onChangeText={setemail}
                  />
              </View>
            </View>

            <View style={[theme.col12]}>
              <Text style={[theme.inputLabel]}>Phone<Text style={{color:'red'}}> *</Text></Text>
              <View style={theme.authinputContainer}>
                <Icon name="phone" size={20} style={theme.authinputIcon} />
                <TextInput 
                  style={theme.authinput}
                  keyboardType='phone-pad'
                  value={phone}
                  onChangeText={setphone}                  
                  />
              </View>
            </View>


            <View style={[theme.col12]}>
              <Text style={[theme.inputLabel]}>Select Category<Text style={{color:'red'}}> *</Text></Text>
              <CategoryPicker selectedCategory={selectedCategory} setSelectedcategory={setSelectedcategory} extraData={extraData} />
            </View> 


            <View style={[theme.col12]}>
              <Text style={[theme.inputLabel]}>Company Name<Text style={{color:'red'}}> *</Text></Text>
              <View style={theme.authinputContainer}>
                <Icon name="building" size={20} style={theme.authinputIcon} />
                <TextInput 
                  style={theme.authinput} 
                  value={companyname}
                  onChangeText={setcompanyname}                  
                  />
              </View>
            </View>

            <View style={[theme.col12]}>
              <Text style={[theme.inputLabel]}>Select Country<Text style={{color:'red'}}> *</Text></Text>
              <CountryPicker selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} extraData={extraData} />
            </View>

            <View style={[theme.col12]}>
              <Text style={[theme.inputLabel]}>Select State<Text style={{color:'red'}}> *</Text></Text>
              <StatePicker selectedState={selectedState} setSelectedState={setSelectedState} extraData={extraData} />
            </View>

            <View style={[theme.col12]}>
              <Text style={[theme.inputLabel]}>City<Text style={{color:'red'}}> *</Text></Text>
              <View style={theme.authinputContainer}>
                <Icon name="map" size={20} style={theme.authinputIcon} />
                <TextInput 
                  style={theme.authinput}
                  value={city}
                  onChangeText={setcity}                  
                  />
              </View>
            </View>


            <View style={[theme.col12]}>
              <Text style={[theme.inputLabel]}>Address<Text style={{color:'red'}}> *</Text></Text>
              <View style={theme.authinputContainer}>
                <Icon name="map" size={20} style={theme.authinputIcon} />
                <TextInput 
                  style={theme.authinput}
                  value={address}
                  onChangeText={setaddress}                  
                  />
              </View>
            </View>


             {/* Password Field */}
            <View style={[theme.col12]}>
              <Text style={[theme.inputLabel]}>
                Password<Text style={{ color: 'red' }}> *</Text>
              </Text>
              <View style={theme.authinputContainer}>
                <Icon name="lock" size={20} style={theme.authinputIcon} />
                <TextInput
                  style={theme.authinput}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setpassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Icon
                    name={showPassword ? 'eye-slash' : 'eye'}
                    size={20}
                    style={theme.authinputIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Confirm Password Field */}
            <View style={[theme.col12]}>
              <Text style={[theme.inputLabel]}>
                Confirm Password<Text style={{ color: 'red' }}> *</Text>
              </Text>
              <View style={theme.authinputContainer}>
                <Icon name="lock" size={20} style={theme.authinputIcon} />
                <TextInput
                  style={theme.authinput}
                  secureTextEntry={!showCPassword}
                  value={cpassword}
                  onChangeText={setcpassword}
                />
                <TouchableOpacity onPress={() => setShowCPassword(!showCPassword)}>
                  <Icon
                    name={showCPassword ? 'eye-slash' : 'eye'}
                    size={20}
                    style={theme.authinputIcon}
                  />
                </TouchableOpacity>
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