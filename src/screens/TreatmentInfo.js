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
import styles from "../styles/TreatmentInformation_Styles";
import CustomBottomBar from "../components/customBottomBar";

function Treatmentinfomation(props) {
  const [doctorName, setDoctorName] = useState("doctorname");
  const [tratmentName, setTreatmentName] = useState("treatmentname1");
  var dnames = [];
  var tnames = [];
  for (let i = 0; i < 15; i++) {
    dnames.push(
      <Picker.Item key={i} label={"Doctorname" + i.toString()} value={"doctorname" + i} />
    );
  }
  for (let i = 0; i < 15; i++) {
    tnames.push(
      <Picker.Item key={i} label={"Treatmentname" + i.toString()} value={"treatmentname1" + i} />
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
          <View style={styles.group}>
            <View style={styles.rect2Stack}>
              <View style={styles.rect2}>
                <Text style={styles.sadhakasTreatment}>
                  Sadhaka&#39;s Treatment 
                </Text>
              </View>
              <Text style={styles.information}>Information</Text>
            </View>
          </View>
        </View>
        <View style={styles.doctorNameBlock}>
          <Text style={styles.doctorName}>Doctor's Name :</Text>
          <TextInput placeholder="" style={styles.textInput1}></TextInput>
          {/* <IoniconsIcon
            name="md-arrow-dropdown"
            style={styles.icon2}
          ></IoniconsIcon> */}
          <View style={styles.icon3}>
            <Picker
              selectedValue={doctorName}
              style={{ color: "white" }}
              onValueChange={(itemValue, itemIndex) => setDoctorName(itemValue)}
            >
              {dnames}
            </Picker>
          </View>
        </View>
        <View style={styles.treatmentNameBlock}>
          <Text style={styles.treatmentName}>Treatment Name :</Text>
          <TextInput placeholder="" style={styles.textInput1}></TextInput>
          {/* <IoniconsIcon
            name="md-arrow-dropdown"
            style={styles.icon2}
          ></IoniconsIcon> */}
          <View style={styles.icon2}>
            <Picker
              selectedValue={tratmentName}
              style={{ color: "white" }}
              onValueChange={(itemValue, itemIndex) => setTreatmentName(itemValue)}
            >
              {tnames}
            </Picker>
          </View>
        </View>
        <View style = {styles.timingBlock}>
          <Text style={styles.timings}>Timings :</Text>
          <TextInput placeholder="9AM - 12PM And 2PM - 5PM" style={styles.textInput2}></TextInput>
        </View>
        <View style = {styles.treatmentPlaceBlock}>
        <Text style={styles.treatmentPlace}>Treatment Place :</Text>
          <TextInput placeholder="Treatment Place" style={styles.textInput3}></TextInput>
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



export default Treatmentinfomation;