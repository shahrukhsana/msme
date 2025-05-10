import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Loader = ({ extraData }) => {

  const showLoader = extraData.loader.showLoader;
  const setShowLoader = extraData.loader.setShowLoader;

  if (!showLoader) return null;

  return (
    <View style={[styles.loader]}>
        <View style={[styles.loaderContainer,]} >
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text style={styles.loaderText}>Loading...</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    loader:{
        position: "absolute",
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
        elevation: 1,
        zIndex: 1000,
    },
  loaderContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 15,
    borderRadius: 10,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  loaderText: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10,
  },
});

export default Loader;
