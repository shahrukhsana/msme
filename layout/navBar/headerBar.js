import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../StyleSheet/theme';

import { MMKV } from 'react-native-mmkv';
const storage = new MMKV();


const Header = ({extraData=[]}) => {
  const [userDetail, setuserDetail] = useState(JSON.parse(storage.getString('user')));
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={[styles.headerContent, theme.row]}>

          <View style={[theme.col2]}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => extraData.sidebar.setSideBar(true)}>
              <Icon name="bars" size={20} style={theme.barsIcon} />
            </TouchableOpacity>
          </View>

          <View style={[theme.col10]}>
              <View style={[theme.inputContainer, styles.search]}>
                <Icon name="search" size={20} style={[theme.inputIcon]} />
                <TextInput 
                  style={theme.input}
                  placeholder='Search Keyword...'
                  />
              </View>            
          </View>

          

          {/* Title */}
          {/* <View style={styles.titleContainer}>
            <Text style={styles.title}>Hi! {userDetail.name}</Text>
          </View> */}

        </View>
      </View>
      <View style={styles.navbarBorder} />
    </View>
  );
};

const styles = {
  header: {
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
  },
  backButton: {
    padding: 10,
  },
  titleContainer: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationButton: {
    padding: 10,
  },
  navbarBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  search:{
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal:12,
    width: '100%',
    borderColor: '#1695cc',
    backgroundColor:'white',
    marginVertical:0,
    paddingVertical:0
  },
};

export default Header;
