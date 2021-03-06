import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Picker
} from "react-native";
import { Center } from "@builderx/utils";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import styles from "../styles/DoctorsSuggestion_Style";
import CustomBottomBar from "../components/customBottomBar";
import DateTime from "../components/DateTime";
import OcticonsIcon from "react-native-vector-icons/Octicons";
import DocotorDropdownPicker from "../components/DocotorDropdownPicker";
import MaterialCheckbox from "../components/MaterialCheckbox";


function Doctorssuggestion(props) {
  const [doctorname, setDoctorName] = useState(1);
  var myloop = [];
  for (let i = 0; i < 1000; i++) {
    myloop.push(
      <Picker.Item key={i} label={i.toString()} value={i} />
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.image7Stack}>
        <ImageBackground
          source={require("../assets/images/logo5.png")}
          resizeMode="contain"
          style={styles.image7}
          imageStyle={styles.image7_imageStyle}
        >

        </ImageBackground>

      </View>
      <View style={styles.group}>
        <View style={styles.rect1}>
          <Text style={styles.sadhakas1}>Sadhaka&#39;s Doctor&#39;s Suggestion Information</Text>
        </View>
      </View>

      <View style={styles.dateBlock}>
        <Text style={styles.date1}>Docotor's Name :</Text>
      </View>
      <View style={styles.icon2}>
        <Picker
          selectedValue={doctorname}
          style={{ color: "white" }}
          onValueChange={(itemValue, itemIndex) => setDoctorName(itemValue)}
        >
          {myloop}
        </Picker>
      </View>
      <View style={styles.problemBlock}>
        <Text style={styles.problem}>Problem :</Text>
        <View >
          <TextInput
            placeholder="----Enter Your Problem----"
            placeholderTextColor="rgba(70,31,0,1)"
            style={styles.problemtextInput}
          ></TextInput>
        </View>
      </View>

      <View style={styles.agreeTandCBlock}>
        <MaterialCheckbox style={styles.materialCheckboxTandC}></MaterialCheckbox>
        <Text style={styles.suggestioniAgreeTc1}>I Agree T &amp; C</Text>
      </View>
      <View style={styles.backandconfirmBlock}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("SadhakasHealthTracking")}
          style={styles.backbutton6}
        >
          <View style={styles.backrect3}>
            <Text style={styles.back1Text}>Back</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Homepage")}
          style={styles.confirmbutton7}
        >
          <View style={styles.confirmrect4}>
            <Text style={styles.confirm1Text}>Confirm</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rect2}>
      <CustomBottomBar {...props}/>
      </View>
    </View >
    
  );
}
export default Doctorssuggestion;