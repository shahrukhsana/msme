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

export function WalletScreen({ navigation, extraData=[] }){

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
            <PageHeader pageTitle="Wallet" navigation={navigation} />

            <View style={theme.themeBg}>

                <View style={[theme.card]}>
                    <View style={[theme.cardBody, styles.walletBoxRow]}>
                        
                        <View style={[theme.scol3]}>
                            <View style={[styles.walletBox]}>
                                <Icon name='inr' style={[styles.inrIcon]}/>
                                <Text style={[styles.walletPrice]}>500.00</Text>
                                <Text style={[styles.walletBoxText]}>Deposit</Text>
                            </View>
                        </View>
                        <View style={[theme.scol1]}>
                            <Text style={[styles.textDeviderPlus]}>+</Text>
                        </View>
                        <View style={[theme.scol3]}>
                            <View style={[styles.walletBox]}>
                                <Icon name='inr' style={[styles.inrIcon]}/>
                                <Text style={[styles.walletPrice]}>500.00</Text>
                                <Text style={[styles.walletBoxText]}>Earning</Text>
                            </View>
                        </View>
                        <View style={[theme.scol1]}>
                            <Text style={[styles.textDeviderPlus]}>=</Text>
                        </View>
                        <View style={[theme.scol3]}>
                            <View style={[styles.walletBox]}>
                                <Icon name='inr' style={[styles.inrIcon]}/>
                                <Text style={[styles.walletPrice]}>500.00</Text>
                                <Text style={[styles.walletBoxText]}>Total</Text>
                            </View>
                        </View>

                    </View>
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

