import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import styles from "../styles/Registration_Styles";

function Registrationpage(props) {
  return (
    <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/logo5.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
        </ImageBackground>
        
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}>
          <View style={styles.scrollArea}>
            <View style={styles.idBlock}>
              <Text style={styles.id}>ID :</Text>
              <TextInput placeholder="ID" style={styles.idTextInput}></TextInput>
            </View>
            <View style={styles.nameBlock}>
              <Text style={styles.name}>Name :</Text>
              <TextInput placeholder="Name" style={styles.nameTextInput}></TextInput>
            </View>
            <View style={styles.addressBlock}>
              <Text style={styles.address}>Address :</Text>
              <View style = {styles.addressBlock1}>
              <View>
                <Text style={styles.doorNumber}>Door Number :</Text>
                <TextInput placeholder="Flat No:123" style={styles.doorTextInput}></TextInput>
              </View>
              <View>
                <Text style={styles.street}>Street/Location :</Text>
                <TextInput placeholder="A1 Residency,Main Road" style={styles.streetTextInput}></TextInput>
              </View>
              <View>
                <Text style={styles.city}>City/Town :</Text>
                <TextInput placeholder="Guntur" style={styles.cityTextInput}></TextInput>
              </View>
              <View>
                <Text style={styles.district}>District :</Text>
                <TextInput placeholder="Guntur" style={styles.districtTextInput}></TextInput>
              </View>
              <View>
                <Text style={styles.state}>State :</Text>
                <TextInput placeholder="Andhrapradesh" style={styles.stateTextInput}></TextInput>
              </View>
              <View>
                <Text style={styles.pin}>Pin Code :</Text>
                <TextInput placeholder="522616" style={styles.pinTextInput}></TextInput>
              </View>
              </View>

            </View>
            <View style={styles.emargencyBlock}>
              <Text style={styles.emergencyContact}>Emergency Contact :</Text>
              <TextInput
                placeholder="Emergency Contact"
                style={styles.textInput69}
              ></TextInput>
            </View>
            <View style={styles.contactBlock}>
              <Text style={styles.contactNumber}>Contact Number :</Text>
              <TextInput placeholder="Contact Number" style={styles.textInput10}></TextInput>
            </View>
            <View style={styles.roomBlock}>
              <Text style={styles.roomNumber}>Room Number / Block :</Text>
              <TextInput placeholder="Room Number" style={styles.textInput11}></TextInput>
              {/* <IoniconsIcon
                name="md-arrow-dropdown"
                style={styles.icon4}
              ></IoniconsIcon> */}
            </View>
            <View style={styles.passwordBlock}>
              <Text style={styles.password}>Password :</Text>
              <TextInput
                placeholder="Password"
                style={styles.textInput}
              ></TextInput>
            </View>
            <View style={styles.confirmPSWBlock}>
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
        </ScrollView>
        <View style = {styles.react1}>
            <Text style = {styles.regHeading1}>Sadhaka&#39;s Registration</Text>
        </View>
    </View>

  );
}



export default Registrationpage;
