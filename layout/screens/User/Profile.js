import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  RefreshControl
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import theme from '../../StyleSheet/theme';

import PageHeader from '../../navBar/pageHeader';

import LinearGradient from 'react-native-linear-gradient';
import GradientStyles from '../../StyleSheet/GradientStyles';

import CountryPicker from '../../component/CountryPicker';
import StatePicker from '../../component/StatePicker';



import { postData, apiUrl } from '../../component/api';
import CategoryPicker from '../../component/CategoryPicker';
const urls=apiUrl();

export function ProfileScreen({ navigation, extraData=[] }){


  
  
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const [selectedCategory, setSelectedcategory] = useState();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [address, setaddress] = useState();
  const [city, setcity] = useState();
  const [companyname, setcompanyname] = useState();
  const [user_id, setuser_id] = useState();
  



  const filedata = {
    "name":name,
    "email":email,
    "phone":phone,

    "companyname":companyname,
    "country":selectedCountry,
    "state":selectedState,
    "category":selectedCategory,
    "city":city,
    "address":address,
};


  const handleSubmit = async () => {  
    try {
        const response = await postData(filedata, urls.updateProfile, "POST", navigation, extraData);
        if(response.status==200)
            {
                const data = response.data;
                setData(data);
            }
        } catch (error) {
            console.error("API call failed:", error);
        }
  };
    
    
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const fetchData = async () => {
      try {
        const response = await postData({}, urls.getProfile, "GET", navigation, extraData);
        if(response.status==200)
        {
          const data = response.data; 
          setData(data);
          setname(data.name)
          setemail(data.email)
          setphone(data.phone)
          setaddress(data.address)
          setSelectedState(data.state)
          setSelectedcategory(data.category)
          setcity(data.city)
          setcompanyname(data.companyname)
          setuser_id(data.user_id)
        } 
      } catch (error) {
        console.error("API call failed:", error);
      }
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setRefreshing(false);
    fetchData()
  }, []);
  useEffect(() => {
      fetchData();
  }, []);
  const handleLoadMore = () => {
      fetchData();
  };





  


  return (
    <View flex={1}>
      <PageHeader pageTitle="Profile" navigation={navigation} />
      <ScrollView style={theme.themeBg}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      showsVerticalScrollIndicator={false}
      >

        <View style={styles.header}>


          <View style={styles.headerInfo}>

              <View style={[theme.row, theme.m0]}>
                  {/*  */}
                  
                  <View style={[theme.col4, styles.profileImageSection]}>
                      <Image
                      source={require('../../assets/user.jpg')}
                      style={styles.profileImage}
                      />
                  </View>
                  <View style={[theme.col6, styles.actions]}>
                      <Text style={styles.name}>{name}</Text>
                      <Text style={styles.category}>Category</Text>
                      <Text style={styles.title}>Company ID.:- {user_id}</Text>                      
                  </View>
                  <View style={[theme.col2, styles.actions]}>
                    <Icon name='cog' style={styles.settingIcon} onPress={() => navigation.navigate('Setting')} />
                  </View>
              </View>

              {/* {data.kyc_step!=1?              
                <View style={theme.alertBox}>
                  <Icon name="exclamation-circle" size={24} color="#FFA500" />
                  <View style={theme.alerttextContainer}>
                    <Text style={theme.alertText}>Complete your KYC to unlock all features.</Text>
                    <Text style={theme.alertsubText}>Your profile is incomplete.</Text>
                  </View>
                  <TouchableOpacity  style={theme.alertbutton} onPress={() => navigation.navigate('Kyc')}>
                    <Text style={theme.alertbuttonText}>Complete KYC</Text>
                  </TouchableOpacity>
                </View>
                :null
              } */}

              
          </View>
        </View>
        {/* Action Buttons */}
        


        <View style={[theme.row, theme.mt15]}>
            
           

          

            
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
                editable={false}
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
                editable={false}               
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

            


        </View>


        <LinearGradient
            colors={GradientStyles.auth.colors}
            style={theme.authbutton}
          >
            <TouchableOpacity style={theme.button} onPress={handleSubmit}>
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
    // backgroundColor: '#fff',
    // paddingHorizontal: 16,
  },
  settingIcon:{
    // position:'absolute',
    // right:0,
    // top:0
    fontSize:30,
    color:'#2D9CDB',
    backgroundColor:'transparent'
  },
  header: {
    flexDirection: 'row',
    // marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth:4,
    borderColor:'#2D9CDB'
  },
  profileImageSection:{
    textAlign:'left',
    alignItems:'center',
    
  },
  headerInfo: {
    marginLeft: 0,
    flex: 1,
    backgroundColor:'#E6E6E6',
    marginLeft:-16,
    marginRight:-16,
    paddingHorizontal:0,
    paddingVertical:20,
    alignItems:'center',
    textAlign:'left'
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'left',
    // marginTop:15
  },
  category: {
    color: '#009BDF',
    marginVertical: 4,
    textAlign:'left',
    fontSize:17
  },
  
  actions: {
    display:'flex',
    justifyContent: 'space-evenly',
    textAlign:'center',
    marginTop: 0,
    alignItems:'center'
  },

});

