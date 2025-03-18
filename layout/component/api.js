const apiUrl = 'https://developershahrukh.in/demo/rajkumar/face2face/api/user/';
import {
  Alert
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
// import RNFS from 'react-native-fs';

import { MMKV } from 'react-native-mmkv';
const storage = new MMKV();

export const postData = async (filedata, furl, method, navigation, extraData) => {

  let url = apiUrl+furl;
  const deviceId = await DeviceInfo.getUniqueId();
  let data = '';
  if(method=='POST')  data = JSON.stringify(Object.assign(filedata, { device_id: deviceId}));
  if(method=='GET') data = '';


  if (method === 'GET' && filedata) {
    const params = new URLSearchParams({ ...filedata, device_id: deviceId }).toString();
    url += `?${params}`; // Append query parameters
  }

  extraData.loader.setShowLoader(true);
  
  
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Authorization":"Bearer "+storage.getString('token'),
      },
      body: data, // Convert data to JSON string
    });    
    return await responseCheck(response, navigation, extraData);   
  } catch (error) {
    console.error("Failed to make POST request:", error);
    return error;
  }
};

const responseCheck = async (response, navigation, extraData) => {
  try {

    let result = [];
    if(response.status==200 || response.status==400) 
    {
      result = await response.json();      
    } 
    else{
      result = response; 
    }
    console.log("Response:", result); 

    extraData.loader.setShowLoader(false);




    if (result.status === 200) {
      switch (result.action) {
        case "add":
          showSuccessMessage(result.message, extraData, 1);
          return;
  
        case "login":
          showSuccessMessage(result.message, extraData, 1);
          storeLoginToken(result?.token);
          extraData.user.setUsername('');
          extraData.user.setPassword('');
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }], 
          });
          return;
          
          case "logout":
          showSuccessMessage(result.message, extraData, 1);
          storage.delete('token');
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }], 
          });
          return;

  
        case "return": 
          return result;
 
        case "detail":
          return result;
 
        case "list":
          return result;
  
        default:
          showSuccessMessage(result.message, extraData, 1);
          return result;
      }
    } 
    else {
      if (result.responseJSON) result = result.responseJSON;
  
      if (result.status === 400) {
        if (result.action === "login") {
          showSuccessMessage(result.message, extraData, 0);
          // storeLoginToken('');
        } else if (result.action === "edit" || result.action === "add") {
          showSuccessMessage(result.message, extraData, 0);
        } else if (result.action === "check_login") {
          return result;
        } else {
          showSuccessMessage(result.message, extraData, 0);
        }
      } 
      else if (result.status === 401) {
        // showSuccessMessage(result.message, extraData, 0);
        storage.delete('token');
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      } 
      else if (result.status === 419) {
        refreshScreen();
      } 
      else {
        showSuccessMessage(response.message, extraData, 0);
      } 
    }

    return result; // Return parsed JSON data
  } catch (error) {
    console.error("Invalid JSON response:", error);
    return error; // Return null if JSON parsing fails
  }
};

const showSuccessMessage = (message, extraData, type) => {
  extraData.alert.setAlertMessage(message);
  extraData.alert.setShowAlert(true);
  extraData.alert.setAlertType(type);
};

const showErrorMessage = (message) => {
  Alert.alert("Error", message);
};

const storeLoginToken = (token) => {
  try {
    storage.set('token',token);
  } catch (error) {
    console.error("Failed to save token:", error);
  }
};


export const convertToBase64 = async (uri) => {
  try {
    const base64String = await RNFS.readFile(uri, 'base64');
    const base64Image = `data:image/jpeg;base64,${base64String}`; // Use correct MIME type if needed
    // console.log('Base64 Image:', base64Image);
    return base64Image;
    // You can now upload this Base64 string
    // uploadImage(base64Image);
  } catch (error) {
    console.log('Error converting to Base64:', error);
  }
};