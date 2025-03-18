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
import theme from '../../StyleSheet/theme';

import PageHeader from '../../navBar/pageHeader';

import LinearGradient from 'react-native-linear-gradient';
import GradientStyles from '../../StyleSheet/GradientStyles';

export function AccountActivationScreen({ navigation }){


  const [selectedCountry, setSelectedCountry] = useState("Select Country");

  const handleValueChange = (itemValue) => {
    setSelectedCountry(itemValue);
  };




  return (
    <View flex={1}>
      <PageHeader pageTitle="Account Activation" navigation={navigation} />
      <ScrollView style={theme.themeBg}>

        <View style={styles.header}>
            <View style={styles.headerInfo}>
                <View style={theme.alertBox}>
                    <Icon name="inr" size={24} color="#FFA500" />
                    <Text style={theme.alertText}>12,000.00</Text>
                </View>
            </View>
        </View>
        {/* Action Buttons */}
        


        <View style={[theme.row]}>
            
            
            <View style={[theme.col6]}>
              <View style={theme.inputContainer}>
                <Icon name="star" size={20} style={theme.inputIcon} />
                <TextInput
                  style={theme.input}
                  placeholder="Member ID."
                  placeholderTextColor="#999"
                />
              </View>
            </View>


            <View style={[theme.col6]}>
              <View style={theme.inputContainer}>
                <Icon name="user" size={20} style={theme.inputIcon} />
                <TextInput
                  style={theme.input}
                  placeholder="Member Name"
                  placeholderTextColor="#999"
                />
              </View>
            </View>


           

            <View style={[theme.col12]}>
              <View style={theme.inputContainer}>
              <Icon name="globe" size={20} style={theme.inputIcon} />
              <Picker
                selectedValue={selectedCountry}
                onValueChange={handleValueChange}
                style={theme.picker}
              >
                <Picker.Item label="Select Package" value="" />
                <Picker.Item label="India" value="India" />
                <Picker.Item label="Mexico" value="Mexico" />
                <Picker.Item label="Australia" value="Australia" />
              </Picker>
              </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 16,
  },
  settingIcon:{
    position:'absolute',
    right:0,
    top:0
  },
  header: {
    flexDirection: 'row',
    // marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileImageSection:{
    textAlign:'center',
    alignItems:'center'
  },
  headerInfo: {
    marginLeft: 0,
    flex: 1,
    backgroundColor:'#f0eff5',
    marginLeft:-16,
    marginRight:-16,
    paddingHorizontal:25,
    paddingVertical:50
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    marginTop:15
  },
  title: {
    color: '#666',
    marginVertical: 4,
    textAlign:'center'
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 8,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    alignItems:'center'
  },
  actionButton: {
    alignItems: 'center',
  },
  actionLabel: {
    marginTop: 4,
    fontSize: 12,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  aboutText: {
    color: '#666',
  },
  friendItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  friendImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  friendName: {
    marginTop: 4,
    fontSize: 12,
    textAlign: 'center',
  },
  photoItem: {
    width: 100,
    height: 100,
    margin: 4,
  },
});

