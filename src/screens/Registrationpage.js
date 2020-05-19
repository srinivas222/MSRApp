import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import styles from "../styles/Registration_Styles";

function Registrationpage(props) {
  return (
    <View style={styles.container}>
      <View >
        <ImageBackground
          source={require("../assets/images/logo5.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
        </ImageBackground>
            <View style={styles.rect}>
              <Text style={styles.regHeading}>Sadhaka&#39;s Registration</Text>
            </View>
            <View style = {styles.idBlock}>
              <Text style={styles.id}>ID :</Text>
              <TextInput placeholder="ID" style={styles.idTextInput}></TextInput>
            </View>
            <View style = {styles.nameBlock}>
              <Text style={styles.name}>Name :</Text>
              <TextInput placeholder="Name" style={styles.nameTextInput}></TextInput>
            </View>
            <View style = {styles.addressBlock}>
              <Text style={styles.address}>Address :</Text>
              <TextInput placeholder="Address" style={styles.addressTextInput}></TextInput>
            </View>
            <View style = {styles.emargencyBlock}>
              <Text style={styles.emergencyContact}>Emergency Contact :</Text>
              <TextInput
                placeholder="Emergency Contact"
                style={styles.textInput69}
              ></TextInput>
            </View>
            <View  style = {styles.contactBlock}>
              <Text style={styles.contactNumber}>Contact Number :</Text>
              <TextInput placeholder="Contact Number" style={styles.textInput10}></TextInput>
            </View>
            <View style = {styles.roomBlock}>
              <Text style={styles.roomNumber}>Room Number / Block :</Text>
              <TextInput placeholder="Room Number" style={styles.textInput11}></TextInput>
              <IoniconsIcon
            name="md-arrow-dropdown"
            style={styles.icon4}
          ></IoniconsIcon>
            </View>
            <View style = {styles.passwordBlock}>
              <Text style={styles.password}>Password :</Text>
              <TextInput
                placeholder="Password"
                style={styles.textInput}
              ></TextInput>
            </View>
            <View style = {styles.confirmPSWBlock}>
              <Text style={styles.confirmPassword}>Confirm Password :</Text>
              <TextInput placeholder="Confirm Password" style={styles.textInput12}></TextInput>
            </View>
            <View style={styles.attachProfilePhotoColumnRow}>
              <Text style={styles.attachProfilePhoto}>Attach Profile Photo :</Text>
                <View style={styles.group}>
                  <FontAwesomeIcon
                    name="cloud-upload"
                    style={styles.icon2}
                  ></FontAwesomeIcon>
                </View>
            </View>
            <View style={styles.agreeBlock}>
                <MaterialIconsIcon
                  name="radio-button-checked"
                  style={styles.icon3}
                ></MaterialIconsIcon>
                <Text style={styles.iAgreeTc}>I Agree T &amp; C</Text>
            </View>
            <View style={styles.backandconfirmBlock}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Welcome")}
                  style={styles.button2}
                >
                  <View style={styles.rect2}>
                    <Text style={styles.back}>Back</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Login")}
                  style={styles.button3}
                >
                  <View style={styles.rect3}>
                    <Text style={styles.confirm15}>Confirm</Text>
                  </View>
                </TouchableOpacity>
              </View>
        </View>
      </View>
    
  );
}



export default Registrationpage;
