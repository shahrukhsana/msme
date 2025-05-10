import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import NormalScreen from './layout/screens/Theme/NormalScreen';
import FooterScreen from './layout/screens/Theme/FooterScreen';
import FooterSidebarScreen from './layout/screens/Theme/FooterSidebarScreen';

import { SplashScreen } from './layout/screens/SplashScreen';
import { LoginScreen } from './layout/screens/auth/Login';
import { SignUpScreen } from './layout/screens/auth/SignUp';
import { OtpScreen } from './layout/screens/auth/Otp';
import { RegisterOtpScreen } from './layout/screens/auth/RegisterOtp';
import { ForgotScreen } from './layout/screens/auth/Forgot';
import { ChangePassword } from './layout/screens/auth/ChangePassword';
import { CreatePasswordScreen } from './layout/screens/auth/CreatePassword';

import { ProfileScreen } from './layout/screens/User/Profile';
import { SettingScreen } from './layout/screens/Setting';



import { HomeScreen } from './layout/screens/User/Home';
import { SupportScreen } from './layout/screens/User/Support/SupportScreen';
import { CompanyDetailsScreen } from './layout/screens/User/CompanyDetailsScreen';
import { PackageScreen } from './layout/screens/User/PackageScreen';
import { KycScreen } from './layout/screens/User/Kyc';
import { FavoriteCompanyScreen } from './layout/screens/User/FavoriteCompanyScreen';


const Stack = createStackNavigator(); 


import { MMKV } from 'react-native-mmkv';
const storage = new MMKV();
let initialRoute2 = null;
function App() {

  const token = storage.getString('token');
  if(token) initialRoute2 = 'Home';
  else initialRoute2 = 'Login';
  
  initialRoute2 = 'Splash';

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
           headerShown: false,
           animation: 'slide_from_right',
           }}
        initialRouteName={initialRoute2}>

        <Stack.Screen name="Splash">
          {props => (
            <NormalScreen {...props}>
              <SplashScreen {...props} />
            </NormalScreen>
          )}
        </Stack.Screen>
       
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
        <Stack.Screen name="RegisterOtp">
          {props => (
            <NormalScreen {...props}>
              <RegisterOtpScreen {...props} />
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
        <Stack.Screen name="Support">
          {props => (
            <FooterSidebarScreen {...props}> 
              <SupportScreen {...props} />
            </FooterSidebarScreen>
          )}
        </Stack.Screen>
        <Stack.Screen name="CompanyDetail">
          {props => (
            <FooterSidebarScreen {...props}> 
              <CompanyDetailsScreen {...props} />
            </FooterSidebarScreen>
          )}
        </Stack.Screen>
        
        <Stack.Screen name="Package">
          {props => (
            <FooterSidebarScreen {...props}> 
              <PackageScreen {...props} />
            </FooterSidebarScreen>
          )}
        </Stack.Screen>
        <Stack.Screen name="Kyc">
          {props => (
            <FooterSidebarScreen {...props}> 
              <KycScreen {...props} />
            </FooterSidebarScreen>
          )}
        </Stack.Screen>
        <Stack.Screen name="Favorite">
          {props => (
            <FooterSidebarScreen {...props}> 
              <FavoriteCompanyScreen {...props} />
            </FooterSidebarScreen>
          )}
        </Stack.Screen>
        
        
            



      </Stack.Navigator>     
    </NavigationContainer>
  );
}

export default App;
