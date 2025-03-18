import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../../StyleSheet/theme';
import GradientStyles from '../../../StyleSheet/GradientStyles';


export function AddSupportScreen({ navigation }) {
  const [selectedCountry, setSelectedCountry] = useState("Select Country");

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={theme.themeBg}>
        <View style={[theme.card]}>
          <View style={[theme.cardBody]}>
              

          <View style={[theme.col12]}>
              <View style={theme.inputContainer}>
                  <Icon name="star" size={20} style={theme.inputIcon} />
                  <TextInput
                  style={theme.input}
                  placeholder="Subject"
                  placeholderTextColor="#999"
                  />
              </View>

              <View style={theme.inputContainer}>
                  <Icon name="star" size={20} style={theme.inputIcon} />
                  <TextInput
                  style={theme.input}
                  placeholder="Detail"
                  placeholderTextColor="#999"
                  />
              </View>

              <LinearGradient
                  colors={GradientStyles.auth.colors}
                  style={theme.authbutton}
              >
                  <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('Home')}>
                  <Text style={theme.authbuttonText}>Submit</Text>
                  </TouchableOpacity>
              </LinearGradient>


          </View>


          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  amount: { fontSize: 15, fontWeight: 'bold' },
});


