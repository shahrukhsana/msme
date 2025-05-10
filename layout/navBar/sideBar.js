import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Animated,
  PanResponder,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import theme from "../StyleSheet/theme";

import {postData, apiUrl} from '../component/api'; 
const urls=apiUrl();

import { MMKV } from 'react-native-mmkv';
const storage = new MMKV();

const SideBar = ({navigation, extraData=[] }) => {

  const [userDetail, setuserDetail] = useState(JSON.parse(storage.getString('user')));
  const setSideBar = extraData.sidebar.setSideBar;
  const showSideBar = extraData.sidebar.showSideBar;

    const handleLogout = async () => {
      var filedata = {};
      const response = await postData(filedata, urls.logout,"GET", navigation,extraData);
      };

  const translateX = useRef(new Animated.Value(-250)).current; // Sidebar position
  const panResponder = useRef(
    PanResponder.create({
    //   onStartShouldSetPanResponder: () => true,
    //   onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dx > 0) {
          translateX.setValue(-250 + gestureState.dx);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 100) {
          openSidebar();
        } else {
          closeSidebar();
        }
      },
    })
  ).current;

  useEffect(() => {
    if (showSideBar) {
      openSidebar();
    } else {
      closeSidebar();
    }
  }, [showSideBar]);

  const openSidebar = () => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeSidebar = () => {
    Animated.timing(translateX, {
      toValue: -250,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setSideBar(false));
  };

  if (!showSideBar) return null;

  return (
    <TouchableWithoutFeedback onPress={closeSidebar}>
      <View style={styles.overlay}>
        <Animated.View
          style={[styles.container, { transform: [{ translateX }] }]}
          {...panResponder.panHandlers}
        >
          {/* <TouchableOpacity onPress={closeSidebar} style={styles.closeButton}>
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity> */}

          {/* User Profile */}
          <View style={styles.profileSection}>
            <Image source={require("../assets/user.jpg")} style={styles.profileImage} />
            <View style={styles.profileDetails}>
              <Text style={styles.profileName}>{userDetail.name}</Text>
              <Text style={styles.profileID}>Developer</Text>
            </View>
          </View>

          {/* Menu List */}
          <ScrollView style={styles.body}>
            
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Home")}>
              <View style={styles.menuIcon}>
                <Icon name="home" style={[styles.sideBarIconColor]} />
              </View>
              <Text style={styles.menuTextLabel}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Icon name="call" style={[styles.sideBarIconColor]} />
              </View> 
              <Text style={styles.menuTextLabel}>Support</Text>
            </TouchableOpacity>
            

          


 







            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Profile")}>
              <View style={styles.menuIcon}>
                <Icon name="person" style={[styles.sideBarIconColor]} />
              </View>
              <Text style={styles.menuTextLabel}>Update Profile</Text>
            </TouchableOpacity>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("ChangePassword")}>
              <View style={styles.menuIcon}>
                <Icon name="key" style={[styles.sideBarIconColor]} />
              </View>
              <Text style={styles.menuTextLabel}>Change Password</Text>
            </TouchableOpacity>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
              <View style={styles.menuIcon}>
                <Icon name="log-out-outline" style={[styles.sideBarIconColor]} />
              </View>
              <Text style={styles.menuTextLabel}>Log Out</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
          </ScrollView>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  container: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 250,
    height: "100%",
    backgroundColor: "white",
    paddingVertical: 5,
    borderTopRightRadius:20,
    borderBottomRightRadius:20
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 10,
    // backgroundColor: "#a97c29",
    padding: 5,
    borderRadius: 5,
  },
  closeText: {
    color: "#0000000",
    fontSize: 22,
  },
  profileSection: {
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth:1,
    borderColor:'#A0A0A0'
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    borderWidth: 5,
    borderColor: "#009BDF",
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0000000",
  },
  profileID: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
  body: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop:5
  },
  sideBarIconColor:{
    color:'#009BDF',
    fontSize:18
  },
  menuIcon: {
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#009BDF",
    marginRight: 10,
  },
  menuTextLabel: {
    fontSize: 18,
    // color: "#000000",
    fontWeight:"700",
    // opacity:0.8
  },
  
});

export default SideBar;
