import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  Button
} from "react-native";
import MaterialButtonWithVioletText1 from "../components/MaterialButtonWithVioletText1";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import { TextInput } from "react-native-gesture-handler";

function Login(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}></StatusBar>
      <ImageBackground
        source={require("../assets/images/0.3_MSR_Introduction_Page5.png")}
        resizeMode="stretch"
        style={styles.image}
        imageStyle={styles.image_imageStyle} >
        <Text style={styles.signUp}></Text>
        <View style={styles.buttonRow}>
          <TextInput placeholder="User ID" style={styles.userId}></TextInput>
          <TextInput placeholder="Password" style={styles.password}></TextInput>
        </View>
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate("Registrationpage")}
            style={styles.button}
          > */}

          {/* <Text style={styles.materialButtonWithVioletText1}>UserN</Text> */}
          {/* <MaterialButtonWithVioletText1
              style={styles.materialButtonWithVioletText1}
            ></MaterialButtonWithVioletText1> 
          </TouchableOpacity>*/}
          <View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Homepage")}
            style={styles.buttonLogin}>
            <Text style={styles.materialButtonPrimary}>Login</Text>
          </TouchableOpacity>
          {/* <MaterialButtonPrimary
            style={styles.materialButtonPrimary}
          ></MaterialButtonPrimary> */}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1
  },
  image_imageStyle: {},
  signUp: {
    width: 0,
    height: 0,
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: 314,
    marginLeft: 60
  },
  button: {
    width: 109,
    height: 38
  },
  userId : {
     marginTop: 30,
       marginLeft: 0,
      width: 100,
       height: 25,
       borderColor: "rgba(70,31,0,1)",
       fontSize: 25,
       color: "#461F00",
       borderWidth: 0,
       borderBottomWidth: 5,
       fontFamily: "roboto-700",
       
  },
  password : {
    marginTop: 30,
       marginLeft: 85,
      width: 120,
       height: 25,
       borderColor: "rgba(70,31,0,1)",
       fontSize: 25,
       color: "#461F00",
       borderWidth: 0,
       borderBottomWidth: 5,
       fontFamily: "roboto-700",
  },

  materialButtonWithVioletText1: {
    width: 105,
    height: 36,
    color: "rgba(128,0,0,1)",
    backgroundColor: "rgba(255,255,255,1)",
    borderColor: "#000000",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    borderRadius: 40
  },
  buttonLogin: {
    width: 100,
    height: 38,
    marginLeft: 125,
    top : 50
  },
  materialButtonPrimary: {
    width: 104,
    height: 38,
    //marginTop: 3,
    color: "rgba(128,0,0,1)",
    backgroundColor: "rgba(255,255,255,1)",
    borderColor: "#000000",
    textAlign: "center",
    fontSize: 25,
    fontFamily: "roboto-regular",
    borderRadius: 40
  },
  buttonRow: {
    height: 41,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 30,
    marginRight: 33
  }
});

export default Login;
