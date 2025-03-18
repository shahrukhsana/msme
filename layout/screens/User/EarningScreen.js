import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import theme from '../../StyleSheet/theme';

import PageHeader from '../../navBar/pageHeader';


export function EarningScreen({ navigation, extraData=[] }){


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
                <PageHeader pageTitle="Earnings" navigation={navigation} />
                <View style={theme.themeBg}>

                    <View style={[theme.card]}>
                        <View style={[theme.cardBody, styles.walletBoxRow]}>
                            
                            <View style={[theme.scol3]}>
                                <View style={[styles.walletBox]}>
                                    <Icon name='inr' style={[styles.inrIcon]}/>
                                    <Text style={[styles.walletPrice]}>500.00</Text>
                                    <Text style={[styles.walletBoxText]}>Total Paid Payout</Text>
                                </View>
                            </View>
                            
                            
                        
                            <View style={[theme.scol3]}>
                                <View style={[styles.walletBox]}>
                                    <Icon name='inr' style={[styles.inrIcon]}/>
                                    <Text style={[styles.walletPrice]}>500.00</Text>
                                    <Text style={[styles.walletBoxText]}>Total Unpaid Payout</Text>
                                </View>
                            </View>

                        </View>

                        <ScrollView 
                        showsHorizontalScrollIndicator={false} 
                        contentContainerStyle={{ flexDirection: "row" }}
                        horizontal={true}>
                            <TouchableOpacity style={theme.tabButton} >
                                <Text style={theme.tabButtonText}>All</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={theme.tabButton} >
                                <Text style={theme.tabButtonText}>Direct Income</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={theme.tabButton} >
                                <Text style={theme.tabButtonText}>Pair Income</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={theme.tabButton} >
                                <Text style={theme.tabButtonText}>Downline Income</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={theme.tabButton} >
                                <Text style={theme.tabButtonText}>Upline Income</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={theme.tabButton} >
                                <Text style={theme.tabButtonText}>Rank Bonus Income</Text>
                            </TouchableOpacity>
                        </ScrollView>

                    </View>


                    <View style={[theme.cardRow, theme.row]}>
                        <View style={[theme.col8]}>
                            <Text style={[styles.txrDate]}>09 Jun, 2025</Text>
                            <Text style={[styles.paymentMessage]}>Test Message</Text>
                        </View>
                        <View style={[theme.col4]}><Text style={[styles.amount]}>+100.00</Text></View>
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
        justifyContent:'space-between',
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

