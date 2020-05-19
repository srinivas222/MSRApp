import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialIconTextButtonsFooter from "./MaterialIconTextButtonsFooter";

function Boototmfooter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialIconTextButtonsFooter
        text1="Home"
        button1="Homepage"
        style={styles.materialIconTextButtonsFooter}
      ></MaterialIconTextButtonsFooter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  materialIconTextButtonsFooter: {
    borderRadius: 40,
    flex: 1
  }
});

export default Boototmfooter;
