import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import PageHeader from '../../navBar/pageHeader';
import Footer from '../../navBar/footerBar';

export function ProductsScreen({ navigation }) {
 

    const products = [
        { id: '1', name: 'Product 1', price: '$10', image: 'https://www.shivveda.com/cdn/shop/files/10vitaminC-03.jpg?v=1719863952&width=360' },
        { id: '2', name: 'Product 2', price: '$15', image: 'https://www.shivveda.com/cdn/shop/files/10vitaminC-03.jpg?v=1719863952&width=360' },
        { id: '3', name: 'Product 3', price: '$20', image: 'https://www.shivveda.com/cdn/shop/files/10vitaminC-03.jpg?v=1719863952&width=360' },
        { id: '4', name: 'Product 4', price: '$25', image: 'https://www.shivveda.com/cdn/shop/files/10vitaminC-03.jpg?v=1719863952&width=360' },
      ];
    
      const renderProduct = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => alert(`Selected: ${item.name}`)}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </TouchableOpacity>
      );


  return (

    <View style={styles.container}>

        <PageHeader pageTitle="Products" navigation={navigation} />
    
        <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
        />


    

      <Footer navigation={navigation} />
    </View>
    

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
  }, 
  
 

});


