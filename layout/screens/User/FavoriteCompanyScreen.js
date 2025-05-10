import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PageHeader from '../../navBar/pageHeader';

export function FavoriteCompanyScreen({ navigation, extraData=[] }) {
  
  const [favoriteCompanies, setFavoriteCompanies] = useState([
    {
      id: 1,
      name: 'Google',
      logo: require('../../assets/logo.png'),
      location: 'Mountain View, CA',
      industry: 'Technology',
    },
    {
      id: 2,
      name: 'Microsoft',
      logo: require('../../assets/logo.png'),
      location: 'Redmond, WA',
      industry: 'Software & Cloud',
    },
    {
      id: 3,
      name: 'Tesla',
      logo: require('../../assets/logo.png'),
      location: 'Palo Alto, CA',
      industry: 'Automobile & Energy',
    },
  ]);

  const removeFavorite = (id) => {
    setFavoriteCompanies(favoriteCompanies.filter(company => company.id !== id));
  };

  return (
    <View flex={1}>
      <PageHeader pageTitle="Favorite Companies" navigation={navigation} />
      <ScrollView style={styles.container}>
        
        {favoriteCompanies.length === 0 ? (
          <Text style={styles.noFavorites}>No favorite companies yet.</Text>
        ) : (
          favoriteCompanies.map((company) => (



            <TouchableOpacity key={company.id} 
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
                    <TouchableOpacity onPress={() => removeFavorite(company.id)}>
                        <Icon name="heart-dislike-outline" size={24} color="red" />
                    </TouchableOpacity>
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



            // <View key={company.id} style={styles.companyCard}>
            //   <Image source={company.logo} style={styles.logo} />
            //   <View style={styles.companyInfo}>
            //     <Text style={styles.companyName}>{company.name}</Text>
            //     <Text style={styles.companyLocation}>{company.location}</Text>
            //     <Text style={styles.companyIndustry}>{company.industry}</Text>
            //   </View>
            //   <TouchableOpacity onPress={() => removeFavorite(company.id)}>
            //     <Icon name="heart-dislike-outline" size={24} color="red" />
            //   </TouchableOpacity>
            // </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({



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



  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  noFavorites: { textAlign: 'center', fontSize: 16, color: '#888', marginTop: 20 },
  companyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  logo: { width: 50, height: 50, borderRadius: 5 },
  companyInfo: { flex: 1, marginLeft: 10 },
  companyName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  companyLocation: { fontSize: 14, color: '#666' },
  companyIndustry: { fontSize: 14, color: '#007BFF' },
});

