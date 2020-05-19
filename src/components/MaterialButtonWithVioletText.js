import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";

function MaterialButtonWithVioletText(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <TextInput placeholder="Login" style={styles.textInput}></TextInput>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    paddingRight: 16,
    paddingLeft: 16,
    minWidth: 88
  },
  textInput: {
    width: 66,
    height: 28,
    backgroundColor: "rgba(255,255,255,1)",
    color: "rgba(128,0,0,1)",
    alignSelf: "center",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 13,
    marginLeft: 32
  }
});

export default MaterialButtonWithVioletText;
