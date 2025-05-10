import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PageHeader from '../../navBar/pageHeader';


export function PackageScreen({ navigation, extraData=[] }){

  const [selectedTab, setSelectedTab] = useState('Basic');

  const packages = {
    Basic: {
      price: '$9.99/month',
      features: [
        '✔ Access to 50 job postings',
        '✔ Basic support',
        '✔ Limited analytics',
      ],
    },
    Premium: {
      price: '$19.99/month',
      features: [
        '✔ Access to 200 job postings',
        '✔ Priority support',
        '✔ Detailed analytics',
        '✔ Featured listing',
      ],
    },
    Enterprise: {
      price: '$49.99/month',
      features: [
        '✔ Unlimited job postings',
        '✔ 24/7 dedicated support',
        '✔ Advanced analytics',
        '✔ Custom branding',
      ],
    },
  };

  return (
    <View flex={1}>
      <PageHeader pageTitle="Choose a Package" navigation={navigation} />
      <ScrollView style={styles.container}>
        {/* Tabs */}
        <View style={styles.tabs}>
          {Object.keys(packages).map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
              <Text style={[styles.tab, selectedTab === tab && styles.activeTab]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Package Details */}
        <View style={styles.packageCard}>
          <Text style={styles.packagePrice}>{packages[selectedTab].price}</Text>
          {packages[selectedTab].features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Icon name="checkmark-circle-outline" size={20} color="#28A745" />
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 8,
  },
  tab: { fontSize: 16, color: '#888' },
  activeTab: { color: '#007BFF', fontWeight: 'bold', borderBottomWidth: 2, borderBottomColor: '#007BFF' },
  packageCard: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  packagePrice: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  featureItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  featureText: { marginLeft: 10, fontSize: 16, color: '#333' },
  buyButton: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buyButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
