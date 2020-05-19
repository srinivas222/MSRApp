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

function Welcome(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}></StatusBar>
      <ImageBackground
        source={require("../assets/images/0.3_MSR_Introduction_Page5.png")}
        resizeMode="stretch"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <Text style={styles.signUp}></Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Registrationpage")}
            style={styles.button}
          >
            <MaterialButtonWithVioletText1
              style={styles.materialButtonWithVioletText1}
            ></MaterialButtonWithVioletText1>
          </TouchableOpacity>
          <MaterialButtonPrimary
            style={styles.materialButtonPrimary}
          ></MaterialButtonPrimary>
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
  materialButtonWithVioletText1: {
    width: 105,
    height: 36
  },
  materialButtonPrimary: {
    width: 104,
    height: 38,
    marginLeft: 99,
    marginTop: 3
  },
  buttonRow: {
    height: 41,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 30,
    marginRight: 33
  }
});

export default Welcome;
