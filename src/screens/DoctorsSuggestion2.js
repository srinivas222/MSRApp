import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import MaterialCheckbox from "../components/MaterialCheckbox";

function DoctorsSuggestion2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image7Stack}>
        <ImageBackground
          source={require("../assets/images/logo5.png")}
          resizeMode="contain"
          style={styles.image7}
          imageStyle={styles.image7_imageStyle}
        >
          <MaterialCheckbox
            button1="DoctorsSuggestion2"
            style={styles.materialCheckbox1}
          ></MaterialCheckbox>
        </ImageBackground>
        <TextInput
          placeholder="----Enter Your Feedback----"
          placeholderTextColor="rgba(70,31,0,1)"
          style={styles.textInput1}
        ></TextInput>
        <Text style={styles.iAgreeTc1}>I Agree T &amp; C</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Doctorssuggestion1")}
          style={styles.button6}
        >
          <View style={styles.rect3}>
            <Text style={styles.back2}>Back</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Homepage")}
          style={styles.button7}
        >
          <View style={styles.rect4}>
            <Text style={styles.confirm1}>Confirm</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.group}>
        <View style={styles.rect1}>
          <Text style={styles.sadhakasDoctors1}>
            Sadhaka&#39;s Doctor&#39;s
          </Text>
          <Text style={styles.suggestion1}>Suggestion</Text>
        </View>
      </View>
      <Text style={styles.feedback1}>Feedback :</Text>
      <View style={styles.rect5}>
        <View style={styles.button1Row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Homepage")}
            style={styles.button1}
          >
            <Image
              source={require("../assets/images/home.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Activityinfomation")}
            style={styles.button2}
          >
            <Image
              source={require("../assets/images/activity.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("TreatmentInfo")}
            style={styles.button3}
          >
            <Image
              source={require("../assets/images/treatment.png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Dietmenu")}
            style={styles.button4}
          >
            <Image
              source={require("../assets/images/dietmenu.png")}
              resizeMode="contain"
              style={styles.image5}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("HealthTracking")}
            style={styles.button5}
          >
            <Image
              source={require("../assets/images/healthtracking.png")}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(175,106,37,1)"
  },
  image7: {
    top: 0,
    left: 0,
    width: 365,
    height: 350,
    position: "absolute"
  },
  image7_imageStyle: {
    opacity: 0.2
  },
  materialCheckbox1: {
    width: 67,
    height: 66,
    marginTop: 217,
    marginLeft: 32
  },
  textInput1: {
    top: 0,
    left: 0,
    width: 305,
    height: 195,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "rgba(70,31,0,1)",
    position: "absolute",
    opacity: 0.8,
    borderRadius: 60,
    fontSize: 25,
    fontFamily: "roboto-regular"
  },
  iAgreeTc1: {
    top: 237,
    left: 89,
    width: 152,
    height: 25,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  button6: {
    top: 324,
    left: 4,
    width: 138,
    height: 46,
    position: "absolute"
  },
  rect3: {
    width: 132,
    height: 46,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40
  },
  back2: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 10,
    marginLeft: 35
  },
  button7: {
    top: 323,
    left: 156,
    width: 138,
    height: 46,
    position: "absolute"
  },
  rect4: {
    width: 132,
    height: 46,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40
  },
  confirm1: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 10,
    marginLeft: 24
  },
  image7Stack: {
    width: 365,
    height: 370,
    marginTop: 193,
    marginLeft: 39
  },
  group: {
    width: 321,
    height: 72,
    marginTop: -528,
    marginLeft: 33
  },
  rect1: {
    width: 308,
    height: 72,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0
  },
  sadhakasDoctors1: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 12,
    marginLeft: 52
  },
  suggestion1: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 3,
    marginLeft: 91
  },
  feedback1: {
    width: 127,
    height: 25,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 26,
    marginLeft: 35
  },
  rect5: {
    width: 321,
    height: 74,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row",
    marginTop: 545,
    marginLeft: 27
  },
  button1: {
    width: 42,
    height: 41,
    marginTop: 1
  },
  image2: {
    height: 41
  },
  button2: {
    width: 42,
    height: 41,
    marginLeft: 21
  },
  image3: {
    width: 42,
    flex: 1
  },
  button3: {
    width: 42,
    height: 41,
    marginLeft: 22,
    marginTop: 1
  },
  image4: {
    width: 40,
    height: 40
  },
  button4: {
    width: 42,
    height: 41,
    marginLeft: 23
  },
  image5: {
    flex: 1
  },
  button5: {
    width: 42,
    height: 41,
    marginLeft: 18
  },
  image6: {
    flex: 1
  },
  button1Row: {
    height: 42,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 12,
    marginTop: 15
  }
});

export default DoctorsSuggestion2;
