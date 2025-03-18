import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../../StyleSheet/theme';




export function DirectTeamScreen({ navigation, extraData=[] }){

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
                <View style={theme.themeBg}>

                  <View style={[theme.cardRow, theme.row]}>
                      <View style={[theme.col10]}>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Member ID.:</Text>
                            <Text style={[theme.cardRowText]}>100</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Name:</Text>
                            <Text style={[theme.cardRowText]}>Shahrukh</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Position:</Text>
                            <Text style={[theme.cardRowText]}>Left</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Joining Date:</Text>
                            <Text style={[theme.cardRowText]}>09 Jun, 2025</Text>
                          </View>
                      </View>
                      <View style={[theme.col2]}><Text style={[theme.statusSuccess]}>Paid</Text></View>
                  </View>
                  <View style={[theme.cardRow, theme.row]}>
                      <View style={[theme.col10]}>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Member ID.:</Text>
                            <Text style={[theme.cardRowText]}>100</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Name:</Text>
                            <Text style={[theme.cardRowText]}>Shahrukh</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Position:</Text>
                            <Text style={[theme.cardRowText]}>Left</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Joining Date:</Text>
                            <Text style={[theme.cardRowText]}>09 Jun, 2025</Text>
                          </View>
                      </View>
                      <View style={[theme.col2]}><Text style={[theme.statusSuccess]}>Paid</Text></View>
                  </View>
                  <View style={[theme.cardRow, theme.row]}>
                      <View style={[theme.col10]}>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Member ID.:</Text>
                            <Text style={[theme.cardRowText]}>100</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Name:</Text>
                            <Text style={[theme.cardRowText]}>Shahrukh</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Position:</Text>
                            <Text style={[theme.cardRowText]}>Left</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Joining Date:</Text>
                            <Text style={[theme.cardRowText]}>09 Jun, 2025</Text>
                          </View>
                      </View>
                      <View style={[theme.col2]}><Text style={[theme.statusSuccess]}>Paid</Text></View>
                  </View>
                  <View style={[theme.cardRow, theme.row]}>
                      <View style={[theme.col10]}>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Member ID.:</Text>
                            <Text style={[theme.cardRowText]}>100</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Name:</Text>
                            <Text style={[theme.cardRowText]}>Shahrukh</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Position:</Text>
                            <Text style={[theme.cardRowText]}>Left</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Joining Date:</Text>
                            <Text style={[theme.cardRowText]}>09 Jun, 2025</Text>
                          </View>
                      </View>
                      <View style={[theme.col2]}><Text style={[theme.statusSuccess]}>Paid</Text></View>
                  </View>
                  <View style={[theme.cardRow, theme.row]}>
                      <View style={[theme.col10]}>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Member ID.:</Text>
                            <Text style={[theme.cardRowText]}>100</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Name:</Text>
                            <Text style={[theme.cardRowText]}>Shahrukh</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Position:</Text>
                            <Text style={[theme.cardRowText]}>Left</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Joining Date:</Text>
                            <Text style={[theme.cardRowText]}>09 Jun, 2025</Text>
                          </View>
                      </View>
                      <View style={[theme.col2]}><Text style={[theme.statusSuccess]}>Paid</Text></View>
                  </View>
                  <View style={[theme.cardRow, theme.row]}>
                      <View style={[theme.col10]}>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Member ID.:</Text>
                            <Text style={[theme.cardRowText]}>100</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Name:</Text>
                            <Text style={[theme.cardRowText]}>Shahrukh</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Position:</Text>
                            <Text style={[theme.cardRowText]}>Left</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Joining Date:</Text>
                            <Text style={[theme.cardRowText]}>09 Jun, 2025</Text>
                          </View>
                      </View>
                      <View style={[theme.col2]}><Text style={[theme.statusSuccess]}>Paid</Text></View>
                  </View>
                  <View style={[theme.cardRow, theme.row]}>
                      <View style={[theme.col10]}>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Member ID.:</Text>
                            <Text style={[theme.cardRowText]}>100</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Name:</Text>
                            <Text style={[theme.cardRowText]}>Shahrukh</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Position:</Text>
                            <Text style={[theme.cardRowText]}>Left</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Joining Date:</Text>
                            <Text style={[theme.cardRowText]}>09 Jun, 2025</Text>
                          </View>
                      </View>
                      <View style={[theme.col2]}><Text style={[theme.statusSuccess]}>Paid</Text></View>
                  </View>
                  <View style={[theme.cardRow, theme.row]}>
                      <View style={[theme.col10]}>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Member ID.:</Text>
                            <Text style={[theme.cardRowText]}>100</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Name:</Text>
                            <Text style={[theme.cardRowText]}>Shahrukh</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Position:</Text>
                            <Text style={[theme.cardRowText]}>Left</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Joining Date:</Text>
                            <Text style={[theme.cardRowText]}>09 Jun, 2025</Text>
                          </View>
                      </View>
                      <View style={[theme.col2]}><Text style={[theme.statusSuccess]}>Paid</Text></View>
                  </View>
                  <View style={[theme.cardRow, theme.row]}>
                      <View style={[theme.col10]}>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Member ID.:</Text>
                            <Text style={[theme.cardRowText]}>100</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Name:</Text>
                            <Text style={[theme.cardRowText]}>Shahrukh</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Position:</Text>
                            <Text style={[theme.cardRowText]}>Left</Text>
                          </View>
                          <View style={[theme.row]}>
                            <Text style={[theme.cardRowBold]}>Joining Date:</Text>
                            <Text style={[theme.cardRowText]}>09 Jun, 2025</Text>
                          </View>
                      </View>
                      <View style={[theme.col2]}><Text style={[theme.statusSuccess]}>Paid</Text></View>
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

