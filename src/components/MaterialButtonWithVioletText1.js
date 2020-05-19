import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText1(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.signUp}>Sign Up</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    paddingLeft: 16,
    borderColor: "#000000",
    borderWidth: 0
  },
  signUp: {
    color: "rgba(128,0,0,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
  }
});

export default MaterialButtonWithVioletText1;
