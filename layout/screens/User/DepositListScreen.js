import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../StyleSheet/theme';

import PageHeader from '../../navBar/pageHeader';

import LinearGradient from 'react-native-linear-gradient';
import GradientStyles from '../../StyleSheet/GradientStyles';

export function DepositListScreen({ navigation, extraData=[] }){

    const [refreshing, setRefreshing] = useState(false);


    const onRefresh = useCallback(() => {
      // setPage(0);
      setRefreshing(true);
      setRefreshing(false);
      // fetchPosts(page);
    }, []);



  return (
    <View flex={1}>
    
        <FlatList
            ListHeaderComponent={
            <>
                <PageHeader pageTitle="Deposit (Min Amount 200)" navigation={navigation} />
                <View style={[theme.themeBg]}>
                    <View style={[theme.card]}>
                        <View style={[theme.cardBody]}>
                            <View style={[theme.col12]}>
                                <View style={theme.inputContainer}>
                                    <Icon name="inr" size={20} style={theme.inputIcon} />
                                    <TextInput
                                    style={theme.input}
                                    placeholder="Amount"
                                    placeholderTextColor="#999"
                                    />
                                </View>
                            </View>
                            
                            <LinearGradient
                                colors={GradientStyles.auth.colors}
                                style={theme.authbutton}
                            >
                                <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('DepositPay')}>
                                <Text style={theme.authbuttonText}>Submit</Text>
                                </TouchableOpacity>
                            </LinearGradient>

                        </View>
                    </View>
                    


                    <View style={[theme.cardRow, theme.row]}>
                        <View style={[theme.col2]}><Icon name="inr" style={[styles.roundCircule]} /></View>
                        <View style={[theme.col7]}>
                            <Text style={[theme.cardRowTitle]}>165465465</Text>
                            <Text style={[styles.paymentMode]}>Mode</Text>
                            <Text style={[styles.txrDate]}>09 Jun, 2025</Text>
                            <Text style={[theme.statusSuccess]}>Accepted</Text>
                        </View>
                        <View style={[theme.col3]}><Text style={[styles.amount]}>100.00</Text></View>
                    </View>

                </View>
            </>
            }
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
      
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

