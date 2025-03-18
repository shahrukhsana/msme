import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import { registerApi } from './api';

const Register = () => {
    const [name, setName] = useState('');
    const [device_name, setDeviceName] = useState('');
    const [firebaseToken, setfirebaseToken] = useState('');


    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyDuisEoVWjxAFBAb5tdjdjbspQdjVZj1bs",
        authDomain: "appsetup-42548.firebaseapp.com",
        databaseURL: "https://appsetup-42548-default-rtdb.firebaseio.com",
        projectId: "appsetup-42548",
        storageBucket: "appsetup-42548.firebasestorage.app",
        messagingSenderId: "951696354456",
        appId: "1:951696354456:web:c268fd6ba25c40543a74ed",
        measurementId: "G-1TY76QQ2S4"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }


    // Get the device token
    async function getDeviceToken() {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
            setfirebaseToken(fcmToken)
            // console.log('FCM Token:', fcmToken);
            // Send this token to your server or use it to send notifications
        } else {
            console.log('No FCM token available');
        }
    }

    
    const handleSubmit = () => {
        getDeviceToken();
        if (!name && !firebaseToken) {
            Alert.alert("Error", "All fields are required!");
            return;
        }
        
        
        
        registerApi({device_owner_name:name,device_name:device_name,device_token:firebaseToken});

        Alert.alert("Success", `Greate!`);
        // Add logic to handle form data, e.g., send it to an API
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
            />

            <Text style={styles.label}>Device Name</Text>
            <TextInput
                style={styles.input}
                value={device_name}
                onChangeText={setDeviceName}
                placeholder="Enter your device name"
            />

            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

export default Register;
