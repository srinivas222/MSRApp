import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity, 
  Picker
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialMapView1 from "../components/MaterialMapView1";
import styles from "../styles/ActivityInfo_Style";
import CustomBottomBar from "../components/customBottomBar";

function Activityinfomation(props) {
  const [activityName, setActivityName] = useState("name1");
  const [activityPlace, setActivityPlace] = useState("place1");
  var names = [];
  for (let i = 0; i < 15; i++) {
    names.push(
      <Picker.Item key={i} label={"Name" + i.toString()} value={"name" + i} />
    );
  }

  var places = [];
  for (let i = 0; i < 15; i++) {
    places.push(
      <Picker.Item key={i} label={"Place" + i.toString()} value={"place" + i} />
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.image7StackStack}> 
        <View style={styles.image7Stack}>
          <ImageBackground
            source={require("../assets/images/logo5.png")}
            resizeMode="contain"
            style={styles.image7}
            imageStyle={styles.image7_imageStyle}>
          </ImageBackground>
        </View>
        <View style={styles.icon1Stack}>
          <IoniconsIcon name="ios-images" style={styles.icon1}></IoniconsIcon>
          <View style={styles.group}>
            <View style={styles.rect2Stack}>
              <View style={styles.rect2}>
                <Text style={styles.sadhakasActivity}>
                  Sadhaka&#39;s Activity 
                </Text>
              </View>
              <Text style={styles.information}>Information</Text>
            </View>
          </View>
        </View>
        <View style={styles.activityNameBlock}>
          <Text style={styles.activityName}>Activity Name :</Text>
          <TextInput placeholder="" style={styles.textInput1}></TextInput>
          {/* <IoniconsIcon
            name="md-arrow-dropdown"
            style={styles.icon2}
          ></IoniconsIcon> */}
          <View style={styles.icon2}>
            <Picker
              selectedValue={activityName}
              style={{ color: "white" }}
              onValueChange={(itemValue, itemIndex) => setActivityName(itemValue)}
            >
              {names}
            </Picker>
          </View>
        </View> 
        <View style = {styles.timingBlock}>
          <Text style={styles.timings}>Timings :</Text>
          <TextInput placeholder="9AM - 12PM And 2PM - 5PM" style={styles.textInput2}></TextInput>
        </View>
        <View style = {styles.activiPlaceBlock}>
        <Text style={styles.activityPlace}>Activity Place :</Text>
          <TextInput placeholder="" style={styles.textInput3}></TextInput>
          <View style={styles.activityPlaceDropDown}>
            <Picker
              selectedValue={activityPlace}
              style={{ color: "white" }}
              onValueChange={(itemValue, itemIndex) => setActivityPlace(itemValue)}
            >
              {places}
            </Picker>
          </View>
        </View>
          <View style = {styles.navigationBlock}>
          <Text style={styles.navigation}>Navigation :</Text>
          <MaterialMapView1 style={styles.materialMapView1}></MaterialMapView1>
          </View>



        <View style={styles.bottomTab}>
          <CustomBottomBar />
        </View>
      </View>

    </View>

  );
}



export default Activityinfomation;
