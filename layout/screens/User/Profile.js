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

export function ProfileScreen({ navigation }){


  const [selectedCountry, setSelectedCountry] = useState("Select Country");

  const handleValueChange = (itemValue) => {
    setSelectedCountry(itemValue);
  };




  return (
    <View flex={1}>
      <PageHeader pageTitle="Profile" navigation={navigation} />
      <ScrollView style={theme.themeBg}>

        <View style={styles.header}>


          <View style={styles.headerInfo}>

              <View style={[theme.row, theme.m0]}>
                  <Icon name='cog' size={20} style={styles.settingIcon} onPress={() => navigation.navigate('Setting')} />
                  <View style={[theme.col2, styles.actions, theme.mt10]}>
                    
                  </View>
                  <View style={[theme.col8, styles.profileImageSection]}>
                      <Image
                      source={require('../../assets/user.jpg')}
                      style={styles.profileImage}
                      />
                      <Text style={styles.name}>Shahrukh</Text>
                      <Text style={styles.title}>My ID.:- SV1000</Text>
                  </View>
                  <View style={[theme.col2, styles.actions]}>
                      
                  </View>
              </View>

              <View style={theme.alertBox}>
                <Icon name="exclamation-circle" size={24} color="#FFA500" />
                <View style={theme.alerttextContainer}>
                  <Text style={theme.alertText}>Complete your KYC to unlock all features.</Text>
                  <Text style={theme.alertsubText}>Your profile is incomplete.</Text>
                </View>
                <TouchableOpacity  style={theme.alertbutton}>
                  <Text style={theme.alertbuttonText}>Complete KYC</Text>
                </TouchableOpacity>
              </View>

              {/* <View style={styles.stats}>
                  <View style={styles.statItem}>
                  <Text style={styles.statNumber}>72</Text>
                  <Text style={styles.statLabel}>Followers</Text>
                  </View>
                  <View style={styles.statItem}>
                  <Text style={styles.statNumber}>65</Text>
                  <Text style={styles.statLabel}>Following</Text>
                  </View>
                  <View style={styles.statItem}>
                  <Text style={styles.statNumber}>386</Text>
                  <Text style={styles.statLabel}>Posts</Text>
                  </View>
              </View> */}
          </View>
        </View>
        {/* Action Buttons */}
        


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

            


        </View>


        <LinearGradient
            colors={GradientStyles.auth.colors}
            style={theme.authbutton}
          >
            <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('Home')}>
              <Text style={theme.authbuttonText}>Update Profile</Text>
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

