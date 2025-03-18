import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../../navBar/headerBar';
import theme from '../../StyleSheet/theme';

import LinearGradient from 'react-native-linear-gradient';
import GradientStyles from '../../StyleSheet/GradientStyles';

export function HomeScreen({ navigation, extraData = [] }) {


  const [refreshing, setRefreshing] = useState(false);


  const onRefresh = useCallback(() => {
    // setPage(0);
    setRefreshing(true);
    setRefreshing(false);
    // fetchPosts(page);
  }, []);

  return (

    <View style={styles.container}>

      <FlatList
        ListHeaderComponent={
          <>

            <Header extraData={extraData} />

            <View style={[theme.container]}>


              <View style={[theme.alertBox, theme.mt20]}>
                <Icon name="exclamation-circle" size={24} color="#FFA500" />
                <View style={theme.alerttextContainer}>
                  <Text style={theme.alertText}>Your id not active yet.</Text>
                  {/* <Text style={theme.alertsubText}>Your profile is incomplete.</Text> */}
                </View>
                <TouchableOpacity style={theme.alertbutton}>
                  <Text style={theme.alertbuttonText}>Make Payment</Text>
                </TouchableOpacity>
              </View>


              <View style={[theme.card, styles.cardBg]}>
                <View style={[theme.cardBody]}>
                  <View style={theme.cardImage}>
                    <Image
                      source={require('../../assets/user.jpg')}
                      style={theme.profileImage}
                    />
                  </View>
                  <Text style={[styles.name, theme.mt10]}>ID:- 6</Text>
                  <Text style={[styles.name]}>Shahrukh</Text>
                  <Text style={[styles.totalIncome]}>Total Income: <Text style={[styles.totalIncomeAmount]}>₹ 500.00</Text></Text>
                  <Text style={[styles.todayIncome]}>Today Income: <Text style={[styles.todayIncomeAmount]}>₹ 100.00</Text></Text>

                  <View style={[styles.cardtable]}>

                    <View style={[styles.cardtableRow]}>
                      <Text style={[styles.cardLeftText]}>My Package</Text>
                      <Text style={[styles.cardRightText]}>Gold</Text>
                    </View>

                    <View style={[styles.cardtableRow]}>
                      <Text style={[styles.cardLeftText]}>Rank</Text>
                      <Text style={[styles.cardRightText]}>Not Upgrade</Text>
                    </View>

                    <View style={[styles.cardtableRow]}>
                      <Text style={[styles.cardLeftText]}>My Team</Text>
                      <Text style={[styles.cardRightText]}>500 Members</Text>
                    </View>

                    <View style={[styles.cardtableRow]}>
                      <Text style={[styles.cardLeftText]}>My Direct Paid</Text>
                      <Text style={[styles.cardRightText]}>100 Members</Text>
                    </View>

                    <View style={[styles.cardtableRow]}>
                      <Text style={[styles.cardLeftText]}>My Direct Unpaid</Text>
                      <Text style={[styles.cardRightText]}>100 Members</Text>
                    </View>

                    <View style={[styles.cardtableRow]}>
                      <Text style={[styles.cardLeftText]}>My Matching</Text>
                      <Text style={[styles.cardRightText]}>9 Pair</Text>
                    </View>

                    <View style={[styles.cardtableRow]}>
                      <Text style={[styles.cardLeftText]}>Total BV</Text>
                      <Text style={[styles.cardRightText]}>9</Text>
                    </View>

                    <View style={[styles.cardtableRow]}>
                      <Text style={[styles.cardLeftText]}>Left Paid</Text>
                      <Text style={[styles.cardRightText]}>100 Members</Text>
                    </View>

                    <View style={[styles.cardtableRow]}>
                      <Text style={[styles.cardLeftText]}>Left Unpaid</Text>
                      <Text style={[styles.cardRightText]}>100 Members</Text>
                    </View>

                    <View style={[styles.cardtableRow]}>
                      <Text style={[styles.cardLeftText]}>Right Paid</Text>
                      <Text style={[styles.cardRightText]}>100 Members</Text>
                    </View>

                    <View style={[styles.cardtableRow]}>
                      <Text style={[styles.cardLeftText]}>Right Unpaid</Text>
                      <Text style={[styles.cardRightText]}>100 Members</Text>
                    </View>

                    <View style={[styles.cardtableRow]}>
                      <Text style={[styles.cardLeftText]}>Activation Date</Text>
                      <Text style={[styles.cardRightText]}>25 Aug 2025</Text>
                    </View>

                  </View>

                </View>
              </View>


              <View style={[theme.row]}>

                <View style={[theme.col6, theme.plr5]}>
                  <View style={[theme.card]} backgroundColor={'#4CAF50'}>
                    <View style={[theme.cardBody]}>
                      <Text style={[styles.incomeTitle]}>Direct Income</Text>
                      <Text style={[styles.incomeCardAmount]}>₹ 0.00</Text>
                    </View>
                  </View>
                </View>

                <View style={[theme.col6, theme.plr5]}>
                  <View style={[theme.card]} backgroundColor={'#2E7D32'}>
                    <View style={[theme.cardBody]}>
                      <Text style={[styles.incomeTitle]}>Pair Income</Text>
                      <Text style={[styles.incomeCardAmount]}>₹ 0.00</Text>
                    </View>
                  </View>
                </View>

                <View style={[theme.col6, theme.plr5]}>
                  <View style={[theme.card]} backgroundColor={'#FFC107'}>
                    <View style={[theme.cardBody]}>
                      <Text style={[styles.incomeTitle]}>Downline Income</Text>
                      <Text style={[styles.incomeCardAmount]}>₹ 0.00</Text>
                    </View>
                  </View>
                </View>

                <View style={[theme.col6, theme.plr5]}>
                  <View style={[theme.card]} backgroundColor={'#FFD700'}>
                    <View style={[theme.cardBody]}>
                      <Text style={[styles.incomeTitle]}>Upline Income</Text>
                      <Text style={[styles.incomeCardAmount]}>₹ 0.00</Text>
                    </View>
                  </View>
                </View>

                <View style={[theme.col6, theme.plr5]}>
                  <View style={[theme.card]} backgroundColor={'#4CAF50'}>
                    <View style={[theme.cardBody]}>
                      <Text style={[styles.incomeTitle]}>Rank Bonus Income</Text>
                      <Text style={[styles.incomeCardAmount]}>₹ 0.00</Text>
                    </View>
                  </View>
                </View>

              </View>






              <View style={[theme.card, styles.cardBg]}>
                <View style={[theme.cardHeader]} backgroundColor={'green'}>
                  <Text style={[theme.cardHeaderText]}>Left Joining Link</Text>
                </View>
                <View style={[theme.cardBody]}>
                  <View style={[theme.row]}>
                    <View style={[theme.col12]}>
                      <Text>https://developershahrukh.in/demo/irshad/shivveda/registration?sponser_id=6&side=left</Text>
                    </View>
                    <View style={[theme.col12]}>
                      <LinearGradient
                        colors={GradientStyles.auth.colors}
                        style={theme.authbutton}
                      >
                        <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('Home')}>
                          <Text style={theme.authbuttonText}>Copy</Text>
                        </TouchableOpacity>
                      </LinearGradient>
                    </View>
                  </View>
                </View>
              </View>



              <View style={[theme.card, styles.cardBg]}>
                <View style={[theme.cardHeader]} backgroundColor={'green'}>
                  <Text style={[theme.cardHeaderText]}>Right Joining Link</Text>
                </View>
                <View style={[theme.cardBody]}>
                  <View style={[theme.row]}>
                    <View style={[theme.col12]}>
                      <Text>https://developershahrukh.in/demo/irshad/shivveda/registration?sponser_id=6&side=right</Text>
                    </View>
                    <View style={[theme.col12]}>
                      <LinearGradient
                        colors={GradientStyles.auth.colors}
                        style={theme.authbutton}
                      >
                        <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('Home')}>
                          <Text style={theme.authbuttonText}>Copy</Text>
                        </TouchableOpacity>
                      </LinearGradient>
                    </View>
                  </View>
                </View>
              </View>



              <View style={[theme.card, styles.cardBg]}>
                <View style={[theme.cardHeader]} backgroundColor={'green'}>
                  <Text style={[theme.cardHeaderText]}>Rank List</Text>
                </View>
                <View style={[theme.cardBody]}>

                  <View style={[theme.row, styles.rankCard]}>
                    <View style={[theme.col12]}>
                      <Text style={[styles.rankTitle]}>Sr. Executive</Text>
                      <Text style={[styles.rankTarget]}>2 ID : 1 ID</Text>
                      <Text style={[styles.rankPrice]}>500/-</Text>
                      <Text style={[styles.rankStatusSuccess]}>Completeed</Text>
                      <Text style={[styles.rankStatusDanger]}>Pending...</Text>
                    </View>
                  </View>

                  <View style={[theme.row, styles.rankCard]}>
                    <View style={[theme.col12]}>
                      <Text style={[styles.rankTitle]}>Sr. Executive</Text>
                      <Text style={[styles.rankTarget]}>2 ID : 1 ID</Text>
                      <Text style={[styles.rankPrice]}>500/-</Text>
                      <Text style={[styles.rankStatusSuccess]}>Completeed</Text>
                      <Text style={[styles.rankStatusDanger]}>Pending...</Text>
                    </View>
                  </View>

                  <View style={[theme.row, styles.rankCard]}>
                    <View style={[theme.col12]}>
                      <Text style={[styles.rankTitle]}>Sr. Executive</Text>
                      <Text style={[styles.rankTarget]}>2 ID : 1 ID</Text>
                      <Text style={[styles.rankPrice]}>500/-</Text>
                      <Text style={[styles.rankStatusSuccess]}>Completeed</Text>
                      <Text style={[styles.rankStatusDanger]}>Pending...</Text>
                    </View>
                  </View>

                  <View style={[theme.row, styles.rankCard]}>
                    <View style={[theme.col12]}>
                      <Text style={[styles.rankTitle]}>Sr. Executive</Text>
                      <Text style={[styles.rankTarget]}>2 ID : 1 ID</Text>
                      <Text style={[styles.rankPrice]}>500/-</Text>
                      <Text style={[styles.rankStatusSuccess]}>Completeed</Text>
                      <Text style={[styles.rankStatusDanger]}>Pending...</Text>
                    </View>
                  </View>

                  <View style={[theme.row, styles.rankCard]}>
                    <View style={[theme.col12]}>
                      <Text style={[styles.rankTitle]}>Sr. Executive</Text>
                      <Text style={[styles.rankTarget]}>2 ID : 1 ID</Text>
                      <Text style={[styles.rankPrice]}>500/-</Text>
                      <Text style={[styles.rankStatusSuccess]}>Completeed</Text>
                      <Text style={[styles.rankStatusDanger]}>Pending...</Text>
                    </View>
                  </View>

                  <View style={[theme.row, styles.rankCard]}>
                    <View style={[theme.col12]}>
                      <Text style={[styles.rankTitle]}>Sr. Executive</Text>
                      <Text style={[styles.rankTarget]}>2 ID : 1 ID</Text>
                      <Text style={[styles.rankPrice]}>500/-</Text>
                      <Text style={[styles.rankStatusSuccess]}>Completeed</Text>
                      <Text style={[styles.rankStatusDanger]}>Pending...</Text>
                    </View>
                  </View>



                </View>
              </View>








            </View>





            {/* Stories */}
            {/* <FlatList
              data={stories}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={renderStory}
              style={styles.storyList}
            /> */}


          </>
        }
        // data={posts}
        // renderItem={renderPost}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}


      />

    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardBg: {
    backgroundColor: '#4CAF50'
  },
  name: {
    width: '100%',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 10,
    color: 'white',
  },
  totalIncome: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    color: 'white',
    borderRadius: 5,
    paddingVertical: 5,
    textAlign: 'center',
    fontSize: 25,
  },
  todayIncome: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    color: 'white',
    borderRadius: 5,
    paddingVertical: 5,
    fontSize: 25,
    marginTop: 10,
    marginBottom: 25,
    textAlign: 'center'
  },
  totalIncomeAmount: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  todayIncomeAmount: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  cardtableRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5
  },
  cardLeftText: {
    width: '50%',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#5D4037'
  },
  cardRightText: {
    width: '50%',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#FFFFFF'
  },
  incomeTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FFFFFF'
  },
  incomeCardAmount: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  rankCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginTop: 10
  },
  rankTitle: {
    textAlign: 'center',
    fontSize: 20
  },
  rankTarget: {
    textAlign: 'center',
    fontSize: 20
  },
  rankPrice: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '900'
  },
  rankStatusSuccess: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '900',
    backgroundColor: 'green',
    color: 'white',
    padding: 5,
    marginTop: 10
  },
  rankStatusDanger: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '900',
    backgroundColor: 'red',
    color: 'white',
    padding: 5,
    marginTop: 10
  },





});


