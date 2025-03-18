import Geolocation from 'react-native-geolocation-service';
import database from '@react-native-firebase/database';
import DeviceInfo from 'react-native-device-info';
 const CurrentLocation = async () => {
    const deviceId = await DeviceInfo.getUniqueId();
    try {   
  
      // Get Current Position
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;


          const locationsRef = database().ref(`/locations/${deviceId}`);
           locationsRef.push({
            lat: latitude,
            lng:longitude,
            dateTime: Date.now(),
            status:'1'
          });

          const currentlocationRef = database().ref(`/currentLocation/${deviceId}`);
           currentlocationRef.update({
            lat: latitude,
            lng:longitude,
            dateTime: Date.now(),
            status:'1'
          });

          
          // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          // See error codes below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } catch (error) {
      console.error(error);
    }
  };




  export const getCurrentLocation = async () => {
    const deviceId = await DeviceInfo.getUniqueId();
    CurrentLocation();
  };

