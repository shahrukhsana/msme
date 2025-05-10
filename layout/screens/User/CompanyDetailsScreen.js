import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import { ProgressBar } from 'react-native-paper';

import theme from '../../StyleSheet/theme';
import PageHeader from '../../navBar/pageHeader';


export function CompanyDetailsScreen({ navigation, extraData = [] }) {
  const [selectedTab, setSelectedTab] = useState('Review');

  const reviews = [
    { id: 1, name: 'Kim Shine', rating: 5, time: '2 hr ago', comment: 'Offers a close-knit, collaborative environment with great work-life balance.' },
    { id: 2, name: 'John Doe', rating: 4, time: '1 day ago', comment: 'Great company culture, but workload can be intense at times.' },
  ];


  const details = [
    { icon: 'globe-outline', label: 'Website', value: 'www.google.com' },
    { icon: 'location-outline', label: 'Headquarters', value: 'Noida, India' },
    { icon: 'calendar-outline', label: 'Founded', value: '14 July 2005' },
    { icon: 'people-outline', label: 'Size', value: '2500' },
    { icon: 'cash-outline', label: 'Revenue', value: '10,000 Millions' },
  ];


 

  return (
    <View flex={1}>
        <PageHeader pageTitle="Company Detail" navigation={navigation} />
        <ScrollView style={styles.container}>
        {/* Company Info */}
        <View style={styles.header}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
            <View style={styles.companyInfo}>
            <Text style={styles.companyName}>Full-Stack Developer</Text>
            <Text style={styles.companyTag}>Bakeron</Text>
            <View style={styles.tags}>
                <Text style={styles.tag}>Full-Time</Text>
                <Text style={styles.tag}>Remote</Text>
                <Text style={styles.tag}>Director</Text>
            </View>
            <Text style={styles.salary}>$14 - 18 Lacs P.A</Text>
            <Text style={styles.time}>5 Days ago</Text>
            </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
            {['About', 'Company', 'Review'].map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
                <Text style={[styles.tab, selectedTab === tab && styles.activeTab]}>{tab}</Text>
            </TouchableOpacity>
            ))}
        </View>
        
            {selectedTab === 'About' && (
                <View>
                    <View style={styles.section}>
                        <Text style={styles.title}>About the role</Text>
                        <Text style={styles.description}>
                        A Full-Stack Developer is a versatile professional skilled in both front-end and back-end development, 
                        responsible for building, maintaining, and optimizing web applications and software systems. They work 
                        across the entire stack of technologies, including client-side (front-end), server-side (back-end), and 
                        databases. Here's an overview of the role:
                        </Text>
                    </View>   

                    <View style={styles.section}>
                        <Text style={styles.title}>Key Responsibilities</Text>
                        <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.description}>
                            Build responsive, user-friendly interfaces using technologies like HTML, CSS, JavaScript, 
                            and frameworks such as React, Angular, or Vue.js.
                        </Text>
                        </View>
                        <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.description}>
                            Ensure web design is optimized for smartphones, tablets, and desktops.
                        </Text>
                        </View>
                    </View>
                    
                </View>

                
                
                

            )}

            {selectedTab === 'Company' && (
                <View>

                    <View style={styles.section}>
                        <Text style={styles.title}>About the role</Text>
                        <Text style={styles.description}>
                        A Full-Stack Developer is a versatile professional skilled in both front-end and back-end development, 
                        responsible for building, maintaining, and optimizing web applications and software systems. They work 
                        across the entire stack of technologies, including client-side (front-end), server-side (back-end), and 
                        databases. Here's an overview of the role:
                        </Text>
                    </View>  


                    {details.map((item, index) => (
                        <View key={index} style={styles.row}>
                        <Icon name={item.icon} size={20} color="#007BFF" style={styles.icon} />
                        <Text style={styles.label}>{item.label}</Text>
                        <Text style={styles.value}>{item.value}</Text>
                        </View>
                    ))}
                </View>
            )}



        {/* Review Section */}
        {selectedTab === 'Review' && (
            <View style={styles.reviewSection}>

                


            <View style={styles.ratingBox}>
                <Text style={styles.rating}>4.5</Text>
                <Text style={styles.outOf}>/5</Text>
                <Text style={styles.totalReviews}>2.7k Reviews</Text>
                <View style={styles.starRow}>
                {[...Array(4)].map((_, i) => (
                    <Icon key={i} name="star" size={20} color="#FFA500" />
                ))}
                <Icon name="star-outline" size={20} color="#FFA500" />
                </View>
            </View>


            {/* User Reviews */}
            {reviews.map((review) => (
                <View key={review.id} style={styles.reviewCard}>
                    <View style={[theme.row]}>
                        <View style={[theme.col10]}>
                            <View style={[theme.row]}>
                                <Text style={styles.reviewerName}>{review.name}</Text>
                            </View>
                        </View>
                        <View style={[theme.col2]}>
                            <Text style={styles.reviewTime}>{review.time}</Text>
                        </View>
                        <View style={[theme.col12]}>
                        <View style={styles.starRow}>
                            {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="star" size={18} color="#FFA500" />
                            ))}
                        </View>
                        </View>

                    </View>
                    <Text style={styles.reviewComment}>{review.comment}</Text>
                </View>
            ))}
            </View>
        )}



        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  logo: { width: 60, height: 60, borderRadius: 10 },
  companyInfo: { marginLeft: 10 },
  companyName: { fontSize: 18, fontWeight: 'bold' },
  companyTag: { color: '#666' },
  tags: { flexDirection: 'row', marginVertical: 5 },
  tag: { backgroundColor: '#e0e0e0', padding: 5, borderRadius: 5, marginRight: 5 },
  salary: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  time: { color: '#666', fontSize: 12 },
  tabs: { flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1, borderBottomColor: '#ddd', paddingBottom: 8 },
  tab: { fontSize: 16, color: '#888' },
  activeTab: { color: '#007BFF', fontWeight: 'bold', borderBottomWidth: 2, borderBottomColor: '#007BFF' },
  reviewSection: { marginTop: 16 },
  ratingBox: { alignItems: 'center' },
  rating: { fontSize: 40, fontWeight: 'bold' },
  outOf: { fontSize: 16, color: '#666' },
  totalReviews: { fontSize: 14, color: '#888' },
  starRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  progressBar: { flex: 1, height: 6, borderRadius: 5, marginLeft: 8 },
  starDistribution: { marginVertical: 15 },
  addReviewBtn: { alignSelf: 'center', backgroundColor: '#007BFF', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 5, marginBottom: 10 },
  addReviewText: { color: '#fff', fontWeight: 'bold' },
  reviewCard: { backgroundColor: '#f9f9f9', padding: 10, borderRadius: 8, marginVertical: 8 },
  reviewerName: { fontSize: 16, fontWeight: 'bold' },
  reviewTime: { color: '#666', fontSize: 12 },
  reviewComment: { marginTop: 5, color: '#333' },

  

  section: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 4,
  },
  bullet: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 6,
    color: '#333',
  },


  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    flex: 1,
  },
  value: {
    fontSize: 16,
    color: '#666',
  },




});


