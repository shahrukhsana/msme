import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import theme from '../../StyleSheet/theme';
import GradientStyles from '../../StyleSheet/GradientStyles';
import PageHeader from '../../navBar/pageHeader';

import { postData, apiUrl } from '../../component/api';
const urls=apiUrl();


export function ChangePassword({ navigation, extraData=[] }) {

  const [password, setPassword] = useState(''); 
  const [cpassword, setCpassword] = useState(''); 
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const handleSubmit = async () => {
    const filedata = {
      "password":password,
      "cpassword":cpassword
    };
    const response = await postData(filedata, urls.updatePassword,"POST", navigation,extraData);
    if(response.status==200)    
    {
      setPassword('');
      setCpassword('');
      navigation.navigate('Home');
    }

  };

  return (
      <View style={{backgroundColor:'white'}} flex={1}>
        
        <PageHeader pageTitle="Change Password" navigation={navigation} />

        <ScrollView style={{backgroundColor:'white'}}>
          <View style={[theme.themeBg, theme.mt20]}>

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
                  onChangeText={setPassword}
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
                  onChangeText={setCpassword}
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


            <LinearGradient
              colors={GradientStyles.auth.colors}
              style={theme.authbutton}
            >
              <TouchableOpacity style={theme.button} onPress={handleSubmit}>
                <Text style={theme.authbuttonText}>Update Password</Text>
              </TouchableOpacity>
            </LinearGradient>

          </View>
          
        </ScrollView>
      </View>
    
  );
}
