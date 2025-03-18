import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import theme from '../../StyleSheet/theme';
import GradientStyles from '../../StyleSheet/GradientStyles';
import PageHeader from '../../navBar/pageHeader';

export function ChangePassword({ navigation }) {
  return (
      <View flex={1}>
        
        <PageHeader pageTitle="Change Password" navigation={navigation} />

        <ScrollView>
          <View style={theme.container}>

            <View style={theme.inputContainer}>
              <Icon name="lock" size={20} style={theme.inputIcon} />
              <TextInput
                style={theme.input}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry
              />
            </View>

            <View style={theme.inputContainer}>
              <Icon name="lock" size={20} style={theme.inputIcon} />
              <TextInput
                style={theme.input}
                placeholder="Confirm Password"
                placeholderTextColor="#999"
                secureTextEntry
              />
            </View>



            <LinearGradient
              colors={GradientStyles.auth.colors}
              style={theme.authbutton}
            >
              <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('Home')}>
                <Text style={theme.authbuttonText}>Update Password</Text>
              </TouchableOpacity>
            </LinearGradient>

          </View>
          
        </ScrollView>
      </View>
    
  );
}
