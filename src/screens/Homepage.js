import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";

import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import styles from "../styles/Homepage_Style";
import CustomBottomBar from "../components/customBottomBar";


function Homepage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image13Stack}>
        <ImageBackground
          source={require("../assets/images/logo5.png")}
          resizeMode="contain"
          style={styles.image13}
          imageStyle={styles.image13_imageStyle}>
        </ImageBackground>
      </View>
      <View style={styles.rect1}>
        <View style={styles.button14Row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Homepagemenu")}
            style={styles.button14}
          >
        
            <IoniconsIcon name="md-menu"  style={styles.icon4}/>
            {/* <Icon name='menu'  /> */}
            
          </TouchableOpacity>
          <Text style={styles.home}>Home</Text>
          <View style={styles.group}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Homepagenotification")}
              style={styles.button13}>
              <MaterialIconsIcon
                name="notifications-active"
                style={styles.icon2}
              ></MaterialIconsIcon>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.profileAndActivityBlock}>
        <View>
          <Text style={styles.profile}>Profile</Text>
          <TouchableOpacity style={styles.button12}>
            <Image
              source={require("../assets/images/profile.png")}
              resizeMode="contain"
              style={styles.image7}
            ></Image>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.activity}>Activity</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Activityinfomation")}
            style={styles.button2}>
            <Image
              source={require("../assets/images/activity1.png")}
              resizeMode="contain"
              style={styles.image8}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.treatmentAndDietBlock}>
        <View>
          <Text style={styles.treatment}>Treatment</Text>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("TreatmentInfo")}
            style={styles.button3}
          >
            <Image
              source={require("../assets/images/treatment1.png")}
              resizeMode="contain"
              style={styles.image9}
            ></Image>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.dietMenu}>Diet Menu</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Dietmenu")}
            style={styles.button4}>
            <Image
              source={require("../assets/images/dietmenu1.png")}
              resizeMode="contain"
              style={styles.image10}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.healthAndDoctorBlock}>
        <View>
          <View style={styles.health2Stack}>
            <Text style={styles.health2}>Health</Text>
            <Text style={styles.tracking}>Tracking</Text>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("SadhakasHealthTracking")}
            style={styles.button5}>
            <Image
              source={require("../assets/images/healthtracking1.png")}
              resizeMode="contain"
              style={styles.image11}
            ></Image>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.interactionStack}>
            <Text style={styles.doctors}>Doctor&#39;s</Text>
            <Text style={styles.interaction}>Interaction</Text>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Doctorssuggestion")}
            style={styles.button6} >
            <Image
              source={require("../assets/images/29264200fe74a640313b09043a6d0020.png")}
              resizeMode="contain"
              style={styles.image12}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style = {styles.feedbackBlock}>
        <Text style={styles.feedback}>Feedback</Text>
        <View style={styles.button122Stack}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Feedback")}
            style={styles.button122}
          >
            <MaterialIconsIcon
              name="feedback"
              style={styles.icon3}
            ></MaterialIconsIcon>
          </TouchableOpacity>
        </View>
      </View>



    </View >
  );
}



export default Homepage;
