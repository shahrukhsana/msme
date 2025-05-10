import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
  Clipboard,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../../navBar/headerBar';
import theme from '../../StyleSheet/theme';

import LinearGradient from 'react-native-linear-gradient';
import GradientStyles from '../../StyleSheet/GradientStyles';

import { postData, apiUrl } from '../../component/api';
import { ScrollView } from 'react-native-gesture-handler';
const urls=apiUrl();

export function HomeScreen({ navigation, extraData = [] }) {


  const [refreshing, setRefreshing] = useState(false);


  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [rankList, setRankList] = useState([]);


  useEffect(() => {
    fetchData(); 
  }, []);

  const fetchData = async () => {
    
    // try {
    //   const response = await postData({}, urls.homeDetail, "GET", navigation, extraData);
    //   if(response.status==200)
    //   {
    //     const data = response.data;
    //     setData(data)
    //     setUser(data.user)
    //     setIncomes(data.incomes)
    //     setRankList(data.rankList)
    //   } 
    // } catch (error) {
    //   console.error("API call failed:", error);
    // }


  };


  const handleSubmit = async () => {
    const filedata = {
      "name":name,
      "email":email,
      "mobile":mobile,      
    };
    const response = await postData(filedata, "update-profile","POST", navigation,extraData);
  };
  const copyLeftJoinLink = () => {
    Clipboard.setString(data.leftJoinLink);
    Alert.alert("Copied!", "Copied");
  };
  const copyRightJoinLink = () => {
    Clipboard.setString(data.rightJoinLink);
    Alert.alert("Copied!", "Copied.");
  };




  const onRefresh = useCallback(() => {
    // setPage(0);
    setRefreshing(true);
    setRefreshing(false);
    fetchData();
  }, []);


  return (
    <View style={styles.container}>
      

      <FlatList
      showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>

            <Header extraData={extraData} />

            <View style={[theme.container]}> 
              
              

                  <TouchableOpacity 
                  onPress={()=> navigation.navigate('CompanyDetail')}
                  style={styles.card}>
                    <View style={styles.header}>
                      <Image 
                        source={require('../../assets/logo.png')} 
                        style={styles.logo} 
                      />
                      <View style={styles.titleContainer}>
                        <Text style={styles.jobTitle}>Quality Assurance (QA) Engineer</Text>
                        <Text style={styles.company}>Bakeron</Text>
                        <View style={styles.ratingContainer}>
                          <Icon name="star" size={14} color="#FFA500" />
                          <Text style={styles.rating}> 4.5 Review</Text>
                        </View>
                      </View>
                      <Icon name="map" size={24} color="gray" />
                    </View>

                    <View style={styles.tagsContainer}>
                      <Text style={styles.tag}>Remote</Text>
                      <Text style={styles.tag}>Full-Time</Text>
                      <Text style={styles.tag}>Executive</Text>
                    </View>

                    <View style={styles.footer}>
                      <View style={styles.locationContainer}>
                        <Icon name="map-marker" size={16} color="#3182CE" />
                        <Text style={styles.location}>Noida, India</Text>
                      </View>
                      <Text style={styles.date}>5 Days ago</Text>
                    </View>
                  </TouchableOpacity>












                  <View style={styles.card}>
                    <View style={styles.header}>
                      <Image 
                        source={require('../../assets/logo.png')} 
                        style={styles.logo} 
                      />
                      <View style={styles.titleContainer}>
                        <Text style={styles.jobTitle}>Quality Assurance (QA) Engineer</Text>
                        <Text style={styles.company}>Bakeron</Text>
                        <View style={styles.ratingContainer}>
                          <Icon name="star" size={14} color="#FFA500" />
                          <Text style={styles.rating}> 4.5 Review</Text>
                        </View>
                      </View>
                      <Icon name="map" size={24} color="gray" />
                    </View>

                    <View style={styles.tagsContainer}>
                      <Text style={styles.tag}>Remote</Text>
                      <Text style={styles.tag}>Full-Time</Text>
                      <Text style={styles.tag}>Executive</Text>
                    </View>

                    <View style={styles.footer}>
                      <View style={styles.locationContainer}>
                        <Icon name="map-marker" size={16} color="#3182CE" />
                        <Text style={styles.location}>Noida, India</Text>
                      </View>
                      <Text style={styles.date}>5 Days ago</Text>
                    </View>
                  </View>



                  <View style={styles.card}>
                    <View style={styles.header}>
                      <Image 
                        source={require('../../assets/logo.png')} 
                        style={styles.logo} 
                      />
                      <View style={styles.titleContainer}>
                        <Text style={styles.jobTitle}>Quality Assurance (QA) Engineer</Text>
                        <Text style={styles.company}>Bakeron</Text>
                        <View style={styles.ratingContainer}>
                          <Icon name="star" size={14} color="#FFA500" />
                          <Text style={styles.rating}> 4.5 Review</Text>
                        </View>
                      </View>
                      <Icon name="map" size={24} color="gray" />
                    </View>

                    <View style={styles.tagsContainer}>
                      <Text style={styles.tag}>Remote</Text>
                      <Text style={styles.tag}>Full-Time</Text>
                      <Text style={styles.tag}>Executive</Text>
                    </View>

                    <View style={styles.footer}>
                      <View style={styles.locationContainer}>
                        <Icon name="map-marker" size={16} color="#3182CE" />
                        <Text style={styles.location}>Noida, India</Text>
                      </View>
                      <Text style={styles.date}>5 Days ago</Text>
                    </View>
                  </View>



                  <View style={styles.card}>
                    <View style={styles.header}>
                      <Image 
                        source={require('../../assets/logo.png')} 
                        style={styles.logo} 
                      />
                      <View style={styles.titleContainer}>
                        <Text style={styles.jobTitle}>Quality Assurance (QA) Engineer</Text>
                        <Text style={styles.company}>Bakeron</Text>
                        <View style={styles.ratingContainer}>
                          <Icon name="star" size={14} color="#FFA500" />
                          <Text style={styles.rating}> 4.5 Review</Text>
                        </View>
                      </View>
                      <Icon name="map" size={24} color="gray" />
                    </View>

                    <View style={styles.tagsContainer}>
                      <Text style={styles.tag}>Remote</Text>
                      <Text style={styles.tag}>Full-Time</Text>
                      <Text style={styles.tag}>Executive</Text>
                    </View>

                    <View style={styles.footer}>
                      <View style={styles.locationContainer}>
                        <Icon name="map-marker" size={16} color="#3182CE" />
                        <Text style={styles.location}>Noida, India</Text>
                      </View>
                      <Text style={styles.date}>5 Days ago</Text>
                    </View>
                  </View>



                  <View style={styles.card}>
                    <View style={styles.header}>
                      <Image 
                        source={require('../../assets/logo.png')} 
                        style={styles.logo} 
                      />
                      <View style={styles.titleContainer}>
                        <Text style={styles.jobTitle}>Quality Assurance (QA) Engineer</Text>
                        <Text style={styles.company}>Bakeron</Text>
                        <View style={styles.ratingContainer}>
                          <Icon name="star" size={14} color="#FFA500" />
                          <Text style={styles.rating}> 4.5 Review</Text>
                        </View>
                      </View>
                      <Icon name="map" size={24} color="gray" />
                    </View>

                    <View style={styles.tagsContainer}>
                      <Text style={styles.tag}>Remote</Text>
                      <Text style={styles.tag}>Full-Time</Text>
                      <Text style={styles.tag}>Executive</Text>
                    </View>

                    <View style={styles.footer}>
                      <View style={styles.locationContainer}>
                        <Icon name="map-marker" size={16} color="#3182CE" />
                        <Text style={styles.location}>Noida, India</Text>
                      </View>
                      <Text style={styles.date}>5 Days ago</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },


  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
  },
  titleContainer: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  company: {
    color: '#3182CE',
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#666',
  },
  tagsContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  tag: {
    backgroundColor: '#E2E8F0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 8,
    fontSize: 12,
    color: '#333',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    color: '#3182CE',
    fontSize: 14,
    marginLeft: 4,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },



});


