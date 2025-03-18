import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import NormalScreen from './layout/screens/Theme/NormalScreen';
import FooterScreen from './layout/screens/Theme/FooterScreen';
import FooterSidebarScreen from './layout/screens/Theme/FooterSidebarScreen';

// import { SplashScreen } from './layout/screens/SplashScreen';
import { LoginScreen } from './layout/screens/auth/Login';
import { SignUpScreen } from './layout/screens/auth/SignUp';
import { OtpScreen } from './layout/screens/auth/Otp';
import { ForgotScreen } from './layout/screens/auth/Forgot';
import { ChangePassword } from './layout/screens/auth/ChangePassword';
import { CreatePasswordScreen } from './layout/screens/auth/CreatePassword';

import { ProfileScreen } from './layout/screens/User/Profile';
import { SettingScreen } from './layout/screens/Setting';



import { HomeScreen } from './layout/screens/User/Home';


const Stack = createStackNavigator(); 


import { MMKV } from 'react-native-mmkv';
const storage = new MMKV();
let initialRoute2 = null;
function App() {

  const token = storage.getString('token');
  if(token) initialRoute2 = 'Home';
  else initialRoute2 = 'Login';


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
           headerShown: false,
           animation: 'slide_from_right',
           }}
        initialRouteName={initialRoute2}>
       
        {/* Auth Screens */}
        <Stack.Screen name="Login">
          {props => (
            <NormalScreen {...props}>
              <LoginScreen {...props} />
            </NormalScreen>
          )}
        </Stack.Screen>
        <Stack.Screen name="Forgot">
          {props => (
            <NormalScreen {...props}>
              <ForgotScreen {...props} />
            </NormalScreen>
          )}
        </Stack.Screen>
        <Stack.Screen name="SignUp">
          {props => (
            <NormalScreen {...props}>
              <SignUpScreen {...props} />
            </NormalScreen>
          )}
        </Stack.Screen>
        <Stack.Screen name="Otp">
          {props => (
            <NormalScreen {...props}>
              <OtpScreen {...props} />
            </NormalScreen>
          )}
        </Stack.Screen>
        <Stack.Screen name="CreatePassword">
          {props => (
            <NormalScreen {...props}>
              <CreatePasswordScreen {...props} />
            </NormalScreen>
          )}
        </Stack.Screen>

        <Stack.Screen name="Profile">
          {props => (
            <NormalScreen {...props}>
              <ProfileScreen {...props} />
            </NormalScreen>
          )}
        </Stack.Screen>
        <Stack.Screen name="ChangePassword">
          {props => (
            <NormalScreen {...props}>
              <ChangePassword {...props} />
            </NormalScreen>
          )}
        </Stack.Screen>
        <Stack.Screen name="Setting">
          {props => (
            <NormalScreen {...props}>
              <SettingScreen {...props} />
            </NormalScreen>
          )}
        </Stack.Screen>

       
        <Stack.Screen name="Home">
          {props => (
            <FooterSidebarScreen {...props}> 
              <HomeScreen {...props} />
            </FooterSidebarScreen>
          )}
        </Stack.Screen>
        
        
            



      </Stack.Navigator>     
    </NavigationContainer>
  );
}

export default App;
