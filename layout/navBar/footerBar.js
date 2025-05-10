import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

import theme from '../StyleSheet/theme'; 

const Footer = ({navigation}) => {

  return (
    <View style={theme.footerContainer}>
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} style={styles.footerIcon} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} activeOpacity={0.7} onPress={() => navigation.navigate('Favorite')}>
          <Icon name="heart" size={24} style={styles.footerIcon} />
          <Text style={styles.navText}>Favourite</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} activeOpacity={0.7} onPress={() => navigation.navigate('Kyc')}>
          <Icon name="id-card" size={24} style={styles.footerIcon} />
          <Text style={styles.navText}>KYC</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} activeOpacity={0.7} onPress={() => navigation.navigate('Package')}>
          <Icon name="document-text-outline" size={24} style={styles.footerIcon} />
          <Text style={styles.navText}>Package</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} activeOpacity={0.7} onPress={() => navigation.navigate('Profile')}>
          <Icon name="person" size={24} style={styles.footerIcon} />
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  navContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#1695cc',
    fontWeight:'bold'
  },
  footerIcon:{
      color:'#1695cc'
  },
});

export default Footer;
