import React, { useRef, useEffect } from "react";
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
import {postData} from '../component/api'; 
import theme from "../StyleSheet/theme";





const SideBar = ({navigation, extraData }) => {


  const setSideBar = extraData.sidebar.setSideBar;
  const showSideBar = extraData.sidebar.showSideBar;

    const handleLogout = async () => {
      navigation.navigate("Login")
        // filedata = {};
        // const response = await postData(filedata, "logout","GET", navigation,extraData);
        // console.log(response)
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
          <TouchableOpacity onPress={closeSidebar} style={styles.closeButton}>
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>

          {/* User Profile */}
          <View style={styles.profileSection}>
            <Image source={require("../assets/user.jpg")} style={styles.profileImage} />
            <View style={styles.profileDetails}>
              <Text style={styles.profileName}>John Doe</Text>
              <Text style={styles.profileID}>6</Text>
            </View>
          </View>

          {/* Menu List */}
          <ScrollView style={styles.body}>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Home")}>
              <View style={styles.menuIcon}>
                <Icon name="home" style={[theme.sideBarIconColor]} />
              </View>
              <Text style={styles.menuTextLabel}>Home</Text>
            </TouchableOpacity>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("NewRegister")}>
              <View style={styles.menuIcon}>
                <Icon name="person-add" style={[theme.sideBarIconColor]} />
              </View>
              <Text style={styles.menuTextLabel}>New Register</Text>
            </TouchableOpacity>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("AccountActivation")}>
              <View style={styles.menuIcon}>
                <Icon name="checkmark-circle" style={[theme.sideBarIconColor]} />
              </View>
              <Text style={styles.menuTextLabel}>Account Activation</Text>
            </TouchableOpacity>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("DepositList")}>
              <View style={styles.menuIcon}>
                <Icon name="wallet" style={[theme.sideBarIconColor]} />
              </View>
              <Text style={styles.menuTextLabel}>Deposit</Text>
            </TouchableOpacity>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Products")}>
              <View style={styles.menuIcon}>
                <Icon name="cube" style={[theme.sideBarIconColor]} />
              </View>
              <Text style={styles.menuTextLabel}>Product</Text>
            </TouchableOpacity>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Order")}>
              <View style={styles.menuIcon}>
                <Icon name="cart" style={[theme.sideBarIconColor]} />
              </View>
              <Text style={styles.menuTextLabel}>My Orders</Text>
            </TouchableOpacity>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Team")}>
              <View style={styles.menuIcon}>
                <Icon name="people" style={[theme.sideBarIconColor]} />
              </View>
              <Text style={styles.menuTextLabel}>Team</Text>
            </TouchableOpacity>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Wallet")}>
              <View style={styles.menuIcon}>
                <Icon name="wallet-outline" style={[theme.sideBarIconColor]} />
              </View>
              <Text style={styles.menuTextLabel}>Wallet</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Withdrawal")}>
              <View style={styles.menuIcon}>
                <Icon name="cash-outline" style={[theme.sideBarIconColor]} />
              </View>
              <Text style={styles.menuTextLabel}>Withdrawal</Text>
            </TouchableOpacity>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Earning")}>
              <View style={styles.menuIcon}>
                <Icon name="bar-chart" style={[theme.sideBarIconColor]} />
              </View>
              <Text style={styles.menuTextLabel}>Earnings</Text>
            </TouchableOpacity>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("ReminderList")}>
              <View style={styles.menuIcon}>
                <Icon name="gift" style={[theme.sideBarIconColor]} />
              </View>
              <Text style={styles.menuTextLabel}>Reward & Gift</Text>
            </TouchableOpacity>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Support")}>
              <View style={styles.menuIcon}>
                <Icon name="call" style={[theme.sideBarIconColor]} />
              </View>
              <Text style={styles.menuTextLabel}>Hekp & Support</Text>
            </TouchableOpacity>
            <View style={styles.divider} />










            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Profile")}>
              <View style={styles.menuIcon}>
                <Icon name="person" style={[theme.sideBarIconColor]} />
              </View>
              <Text style={styles.menuTextLabel}>Update Profile</Text>
            </TouchableOpacity>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("ChangePassword")}>
              <View style={styles.menuIcon}>
                <Icon name="key" style={[theme.sideBarIconColor]} />
              </View>
              <Text style={styles.menuTextLabel}>Change Password</Text>
            </TouchableOpacity>
            <View style={styles.divider} />

            <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
              <View style={styles.menuIcon}>
                <Icon name="log-out-outline" style={[theme.sideBarIconColor]} />
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 250,
    height: "100%",
    backgroundColor: "white",
    paddingVertical: 20,
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
    paddingHorizontal: 20,
    alignItems: "center",
    paddingVertical: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    borderWidth: 2,
    borderColor: "#0000000",
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
    paddingHorizontal: 20,
  },
  menuIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000000",
    marginRight: 10,
  },
  menuTextLabel: {
    fontSize: 16,
    color: "#000000",
  },
  divider: {
    height: 1,
    backgroundColor: "#000000",
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export default SideBar;
