import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';
import theme from '../../StyleSheet/theme';
import Footer from '../../navBar/footerBar';
import PageHeader from '../../navBar/pageHeader';

import LinearGradient from 'react-native-linear-gradient';
import GradientStyles from '../../StyleSheet/GradientStyles';

export function KycScreen({ navigation }){

    

  const [selectedCountry, setSelectedCountry] = useState("Select Country");
  const [bankPassbookImage, setBankPassbookImage] = useState(null);

  const handleValueChange = (itemValue) => {
    setSelectedCountry(itemValue);
  };



  const chooseImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // Handle the response
        setBankPassbookImage(response.assets[0].uri);
      }
    });
  };




  return (

    <View flex={1}>
        <PageHeader pageTitle="Kyc" navigation={navigation} />

        <ScrollView style={[theme.themeBg]}>

            <View style={[theme.row]}>
                
                            
                <View style={[theme.col12]}>
                    <View style={theme.inputContainer}>
                    <Icon name="user" size={20} style={theme.inputIcon} />
                    <TextInput
                        style={theme.input}
                        placeholder="Your Name as per Bank Account"
                        placeholderTextColor="#999"
                    />
                    </View>
                </View>

                <View style={[theme.col6]}>
                    <View style={theme.inputContainer}>
                    <Icon name="university" size={20} style={theme.inputIcon} />
                    <TextInput
                        style={theme.input}
                        placeholder="Bank Name"
                        placeholderTextColor="#999"
                    />
                    </View>
                </View>

                <View style={[theme.col6]}>
                    <View style={theme.inputContainer}>
                    <Icon name="key" size={20} style={theme.inputIcon} />
                    <TextInput
                        style={theme.input}
                        placeholder="IFSC"
                        placeholderTextColor="#999"
                    />
                    </View>
                </View>

                <View style={[theme.col12]}>
                    <View style={theme.inputContainer}>
                    <Icon name="user" size={20} style={theme.inputIcon} />
                    <TextInput
                        style={theme.input}
                        placeholder="Account Number"
                        placeholderTextColor="#999"
                    />
                    </View>
                </View>

                <View style={[theme.col12]}>
                    <View style={theme.inputContainer}>
                    <Icon name="user" size={20} style={theme.inputIcon} />
                    <TextInput
                        style={theme.input}
                        placeholder="Confirm Account Number"
                        placeholderTextColor="#999"
                    />
                    </View>
                </View>

                

                <View style={[theme.col6]}>
                    <View style={theme.inputContainer}>
                    <Icon name="id-card" size={20} style={theme.inputIcon} />
                    <TextInput
                        style={theme.input}
                        placeholder="PAN Card"
                        placeholderTextColor="#999"
                    />
                    </View>
                </View>

                <View style={[theme.col6]}>
                    <View style={theme.inputContainer}>
                    <Icon name="credit-card" size={20} style={theme.inputIcon} />
                        <Picker
                        selectedValue={selectedCountry}
                        onValueChange={handleValueChange}
                        style={theme.picker}
                        >
                        <Picker.Item label="Saving" value="Saving" />
                        <Picker.Item label="Current" value="Current" />
                        </Picker>                
                    </View>
                </View>

                <View style={[theme.col12]}>
                    <View style={theme.inputContainer}>
                    <Icon name="phone" size={20} style={theme.inputIcon} />
                    <TextInput
                        style={theme.input}
                        placeholder="Bank Registered Mobile"
                        placeholderTextColor="#999"
                    />
                    </View>
                </View>

                <View style={[theme.col12]}>
                    <View style={theme.inputContainer}>
                    <Icon name="envelope" size={20} style={theme.inputIcon} />
                    <TextInput
                        style={theme.input}
                        placeholder="Bank Registered Email"
                        placeholderTextColor="#999"
                    />
                    </View>
                </View>
                
                <View style={[theme.col12]}>
                    <Text style={theme.label}>Bank Passbook Image</Text>
                    <TouchableOpacity onPress={chooseImage} style={theme.fileType}>
                        {bankPassbookImage ? (
                        <Image source={{ uri: bankPassbookImage }} style={theme.fileTypeimage} />
                        ) : (
                        <Text style={theme.placeholderText}>Select Bank Passbook Image</Text>
                        )}
                    </TouchableOpacity>
                </View>

                

                

            

            </View>

            <LinearGradient
                colors={GradientStyles.auth.colors}
                style={theme.authbutton}
                >
                <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={theme.authbuttonText}>Submit</Text>
                </TouchableOpacity>
            </LinearGradient>

        </ScrollView>
        <Footer navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
 

});

