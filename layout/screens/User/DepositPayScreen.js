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

export function DepositPayScreen({ navigation, extraData=[] }){


  const [selectedCountry, setSelectedCountry] = useState("Select Country");

  const handleValueChange = (itemValue) => {
    setSelectedCountry(itemValue);
  };




  return (
    <View flex={1}>
      <PageHeader pageTitle="Deposit Pay" navigation={navigation} />
      <ScrollView style={theme.themeBg}>

        <View style={[theme.card]}>
            <View style={[theme.cardBody]}>
                
                <Text style={[styles.amount]}>Pay 120.00</Text>
                <Text style={[styles.p]}>Pay to given address. Send Payment Proof for approval to company.</Text>

                <Image
                    source={require('../../assets/qr.png')}
                    style={styles.qr}
                />

                <Text style={[styles.upi]}>8285392948@ybl</Text>
                

                <View style={[theme.col12]}>
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
        

        


        

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    roundCircule:{
        flexDirection:'row',
        backgroundColor:'green',
        width:40,
        height:40,
        color:'white',
        borderRadius:50,
        alignItems:'center',
        textAlign:'center',
        fontWeight:'bold',
        elevation:1,
        fontSize:25
    },
    amount:{
        fontSize:15,
        fontWeight:'bold'
    },
});

