import { PermissionsAndroid, Platform } from 'react-native';
import { check, request, PERMISSIONS } from 'react-native-permissions';
import messaging from '@react-native-firebase/messaging';

export const requestPermissions = async () => {
  if (Platform.OS === 'android') {
    // Request Camera Permission
    const cameraGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Camera Permission",
        message: "This app needs access to your camera to take photos and videos.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );

    // Request Audio Recording Permission
    const audioGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: "Audio Recording Permission",
        message: "This app needs access to your microphone to record audio.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );

    // Request Call Recording Permissions (requires Android 8+)
    const phoneStateGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      {
        title: "Phone State Permission",
        message: "This app needs access to your phone state to manage call recordings.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );

    const processOutgoingCallsGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.PROCESS_OUTGOING_CALLS,
      {
        title: "Process Outgoing Calls Permission",
        message: "This app needs access to detect outgoing calls for recording.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );

    // Request Storage Permission
    const storageGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: "Storage Permission",
        message: "This app needs access to your storage to save media files.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );

    // Request Location Permission
    const locationGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Location Permission",
        message: "This app needs access to your location to get latitude and longitude.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );

    // Request Location Permission
    const locationBackgoundGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
      {
        title: "Location Permission",
        message: "This app needs access to your location to get latitude and longitude.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );

    // Request Call Log Permission
    const callLogGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
      {
        title: "Call Log Permission",
        message: "This app needs access to your call logs to display call history.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );

    // Request Contacts Permission
    const contactsGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: "Contacts Permission",
        message: "This app needs access to your contacts.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );

    // Request Notification Permission
    const notificationGranted = await requestNotificationPermission();

    return (
      cameraGranted === PermissionsAndroid.RESULTS.GRANTED &&
      audioGranted === PermissionsAndroid.RESULTS.GRANTED &&
      phoneStateGranted === PermissionsAndroid.RESULTS.GRANTED &&
      processOutgoingCallsGranted === PermissionsAndroid.RESULTS.GRANTED &&
      storageGranted === PermissionsAndroid.RESULTS.GRANTED &&
      locationGranted === PermissionsAndroid.RESULTS.GRANTED &&
      locationBackgoundGranted === PermissionsAndroid.RESULTS.GRANTED &&
      callLogGranted === PermissionsAndroid.RESULTS.GRANTED &&
      contactsGranted === PermissionsAndroid.RESULTS.GRANTED &&
      notificationGranted
    );
  } else {
    // For iOS permissions use `react-native-permissions`
    const cameraPermission = await request(PERMISSIONS.IOS.CAMERA);
    const audioPermission = await request(PERMISSIONS.IOS.MICROPHONE);
    const photoPermission = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    const locationPermission = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    const contactsPermission = await request(PERMISSIONS.IOS.CONTACTS);

    // Request Notification Permission
    const notificationGranted = await requestNotificationPermission();

    return (
      cameraPermission === 'granted' &&
      audioPermission === 'granted' &&
      photoPermission === 'granted' &&
      locationPermission === 'granted' &&
      contactsPermission === 'granted' &&
      notificationGranted
    );
  }
};

// Function to request notification permission
async function requestNotificationPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    console.log('Notification permission granted');
  } else {
    console.log('Notification permission denied');
  }
  return enabled;
}
