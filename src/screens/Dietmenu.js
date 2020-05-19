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
import styles from "../styles/DietMenu_style";
import CustomBottomBar from "../components/customBottomBar";
import DateTime from "../components/DateTime";

function Dietmenu(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image7StackStackStack}>
        <View style={styles.image7StackStack}>
          <View style={styles.image7Stack}>
            <ImageBackground
              source={require("../assets/images/logo5.png")}
              resizeMode="contain"
              style={styles.image7}
              imageStyle={styles.image7_imageStyle}>
            </ImageBackground>
            <View>
              <View>
                <Text style={styles.date}>Date :</Text>
                <View style={styles.textInput4Stack}>
                  {/* <TextInput placeholder="" style={styles.textInput4}></TextInput> */}
                  <View style={styles.icon3}>
                  <DateTime />
                  </View>
                </View>
              </View>
              <View style={styles.group2}>
                {/* <View style={styles.rect3}>
                  <Text style={styles.diet}>Diet</Text>
                </View> */}
              </View>
              <View style = {styles.breackFastBlock}>
                <Text style={styles.breakfast}>Breakfast :</Text>
                <TextInput placeholder="Breakfast" style={styles.textInput2}></TextInput>
              </View>
              <View style={styles.lunchBlock}>
                <Text style={styles.lunch}>Lunch :</Text>
                <TextInput placeholder="Lunch" style={styles.textInput3}></TextInput>
              </View>

              <View style={styles.dinnerBlock}>
                <Text style={styles.dinner}>Dinner:</Text>
                <TextInput placeholder="Dinner" style={styles.textInput5}></TextInput>
              </View>
            </View>
          </View>
        </View>

      </View>
      <View style={styles.group}>
        <View style={styles.rect2}>
          <Text style={styles.sadhakasDietMenu}>Sadhaka&#39;s Diet Menu</Text>
        </View>
      </View>

      <View style={styles.customBottomTab}>
        <CustomBottomBar />
      </View>
    </View>
  );
}



export default Dietmenu;
