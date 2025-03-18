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

export function WithdrawalScreen({ navigation, extraData=[] }){


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
                <PageHeader pageTitle="Withdrawal" navigation={navigation} />
                <View style={theme.themeBg}>

                    <View style={[theme.card]}>
                        <View style={[theme.cardBody, styles.walletBoxRow]}>
                            <View>
                                <View style={[styles.walletBox]}>
                                    <Icon name='inr' style={[styles.inrIcon]}/>
                                    <Text style={[styles.walletPrice]}>500.00</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[theme.row]}>
                            <View style={[theme.col12]}>
                                <View style={theme.inputContainer}>
                                    <Icon name="star" size={20} style={theme.inputIcon} />
                                    <TextInput
                                    style={theme.input}
                                    placeholder="UPI Address"
                                    placeholderTextColor="#999"
                                    />
                                </View>
                            </View>
                            <View style={[theme.col12]}>
                                <View style={theme.inputContainer}>
                                    <Icon name="star" size={20} style={theme.inputIcon} />
                                    <TextInput
                                    style={theme.input}
                                    placeholder="Enter Amount"
                                    placeholderTextColor="#999"
                                    />
                                </View>
                            </View>
                            <View style={[theme.col12]}>
                                <View style={theme.inputContainer}>
                                    <Icon name="star" size={20} style={theme.inputIcon} />
                                    <TextInput
                                    style={theme.input}
                                    placeholder="Withdrawal Amount"
                                    placeholderTextColor="#999"
                                    />
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
                    

                                
                    <View style={[theme.cardRow, theme.row]}>
                        <View style={[theme.col10]}>                
                            <View style={[theme.row]}>
                                <Text style={[theme.cardRowBold]}>Amount:</Text>
                                <Text style={[theme.cardRowText]}>100</Text>
                            </View>
                            <View style={[theme.row]}>
                                <Text style={[theme.cardRowBold]}>Charge:</Text>
                                <Text style={[theme.cardRowText]}>10</Text>
                            </View>
                            <View style={[theme.row]}>
                                <Text style={[theme.cardRowBold]}>Pay Amount:</Text>
                                <Text style={[theme.cardRowText]}>90</Text>
                            </View>
                            <View style={[theme.row]}>
                                <Text style={[theme.cardRowBold]}>Date:</Text>
                                <Text style={[theme.cardRowText]}>10 Jun, 2025</Text>
                            </View>
                            <View style={[theme.row]}>
                                <Text style={[theme.cardRowBold]}>Message</Text>
                                <Text style={[theme.cardRowText]}>Text Message</Text>
                            </View>
                        </View>
                        <View style={[theme.col2]}>
                            <Text style={[theme.statusSuccess]}>Paid</Text>
                        </View>
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
    walletBoxRow:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        textAlign:'center'
    },
    walletBox:{
        borderWidth:1,
        padding:10,
        borderRadius:5,
    },
    inrIcon:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
    },
    walletPrice:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
    },
    walletBoxText:{
        fontSize:17,
        fontWeight:'bold',
        textAlign:'center',
    },
    textDeviderPlus:{
        fontSize:50,
        fontWeight:'bold',
        textAlign:'center',
    },
    amount:{
        textAlign:'right'
    }
});

