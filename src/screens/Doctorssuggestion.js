import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCheckbox from "../components/MaterialCheckbox";

function Doctorssuggestion(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image7Stack}>
        <Image
          source={require("../assets/images/logo5.png")}
          resizeMode="contain"
          style={styles.image7}
        ></Image>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.icon1Stack}>
              <Icon name="ios-images" style={styles.icon1}></Icon>
              <Text style={styles.doctorsName1}>Doctor&#39;s Name :</Text>
            </View>
            <View style={styles.image8Stack}>
              <ImageBackground
                source={require("../assets/images/logo7.png")}
                resizeMode="contain"
                style={styles.image8}
                imageStyle={styles.image8_imageStyle}
              >
                <TextInput placeholder="" style={styles.textInput3}></TextInput>
              </ImageBackground>
              <ImageBackground
                source={require("../assets/images/logo7.png")}
                resizeMode="contain"
                style={styles.image9}
                imageStyle={styles.image9_imageStyle}
              >
                <Text style={styles.feedback1}>Feedback :</Text>
              </ImageBackground>
              <ImageBackground
                source={require("../assets/images/logo7.png")}
                resizeMode="contain"
                style={styles.image10}
                imageStyle={styles.image10_imageStyle}
              >
                <Text style={styles.iAgreeTc1}>I Agree T &amp; C</Text>
              </ImageBackground>
              <TextInput
                placeholder="          --------- Suggestion ---------"
                placeholderTextColor="rgba(70,31,0,1)"
                style={styles.textInput1}
              ></TextInput>
              <Text style={styles.suggestion6}>Suggestion :</Text>
              <TextInput
                placeholder="              --------- Problem ---------"
                placeholderTextColor="rgba(70,31,0,1)"
                style={styles.textInput2}
              ></TextInput>
              <Text style={styles.problem1}>Problem :</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Doctorssuggestion1")}
                style={styles.button6}
              >
                <View style={styles.rect32}>
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
              <MaterialCheckbox
                button1="DoctorsSuggestion2"
                style={styles.materialCheckbox1}
              ></MaterialCheckbox>
              <TextInput
                placeholder="        ----Enter Your Feedback----"
                placeholderTextColor="rgba(70,31,0,1)"
                style={styles.textInput4}
              ></TextInput>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.rect2}>
        <Text style={styles.sadhakasDoctors1}>Sadhaka&#39;s Doctor&#39;s</Text>
        <Text style={styles.suggestion5}>Suggestion</Text>
      </View>
      <View style={styles.rect3}>
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
    top: 112,
    left: 0,
    width: 365,
    height: 384,
    position: "absolute",
    opacity: 0.2
  },
  scrollArea: {
    top: 0,
    left: 0,
    width: 374,
    height: 573,
    backgroundColor: "rgba(175,106,37,1)",
    position: "absolute"
  },
  scrollArea_contentContainerStyle: {
    width: 374,
    height: 2864
  },
  icon1: {
    top: 0,
    left: 216,
    position: "absolute",
    color: "rgba(70,31,0,1)",
    fontSize: 100,
    width: 91,
    height: 21
  },
  doctorsName1: {
    top: 3,
    left: 0,
    width: 234,
    height: 9,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  icon1Stack: {
    width: 307,
    height: 21,
    marginTop: 22,
    marginLeft: 38
  },
  image8: {
    top: 0,
    left: 0,
    width: 374,
    height: 334,
    position: "absolute"
  },
  image8_imageStyle: {
    opacity: 0.2
  },
  textInput3: {
    width: 156,
    height: 31,
    color: "#121212",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular",
    marginTop: 13,
    marginLeft: 53
  },
  image9: {
    top: 161,
    left: 0,
    width: 374,
    height: 334,
    position: "absolute"
  },
  image9_imageStyle: {
    opacity: 0.4
  },
  feedback1: {
    width: 180,
    height: 5,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 173,
    marginLeft: 20
  },
  image10: {
    top: 365,
    left: 0,
    width: 374,
    height: 334,
    position: "absolute"
  },
  image10_imageStyle: {
    opacity: 0.4
  },
  iAgreeTc1: {
    width: 185,
    height: 5,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 88,
    marginLeft: 113
  },
  textInput1: {
    top: 232,
    left: 0,
    height: 80,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "rgba(70,31,0,1)",
    position: "absolute",
    opacity: 0.8,
    borderRadius: 60,
    fontSize: 25,
    fontFamily: "roboto-regular",
    right: 0
  },
  suggestion6: {
    top: 203,
    left: 35,
    width: 262,
    height: 9,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  textInput2: {
    top: 104,
    left: 0,
    height: 71,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "rgba(70,31,0,1)",
    position: "absolute",
    opacity: 0.8,
    borderRadius: 60,
    fontSize: 25,
    fontFamily: "roboto-regular",
    right: 0
  },
  problem1: {
    top: 73,
    left: 35,
    width: 237,
    height: 8,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  button6: {
    top: 480,
    left: 29,
    width: 152,
    height: 8,
    position: "absolute"
  },
  rect32: {
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
    top: 480,
    left: 197,
    width: 152,
    height: 8,
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
  materialCheckbox1: {
    top: 444,
    left: 33,
    width: 81,
    height: 25,
    position: "absolute"
  },
  textInput4: {
    top: 358,
    left: 4,
    width: 370,
    height: 75,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "rgba(70,31,0,1)",
    position: "absolute",
    opacity: 0.8,
    borderRadius: 60,
    fontSize: 25,
    fontFamily: "roboto-regular"
  },
  image8Stack: {
    height: 699,
    marginTop: 22
  },
  image7Stack: {
    width: 374,
    height: 573,
    marginTop: 118,
    marginLeft: 1
  },
  rect2: {
    width: 279,
    height: 65,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0,
    marginTop: -656,
    marginLeft: 52
  },
  sadhakasDoctors1: {
    width: 234,
    height: 23,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 11,
    marginLeft: 39
  },
  suggestion5: {
    width: 178,
    height: 23,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 2,
    marginLeft: 76
  },
  rect3: {
    width: 321,
    height: 79,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row",
    marginTop: 603,
    marginLeft: 27
  },
  button1: {
    width: 42,
    height: 44,
    marginTop: 1
  },
  image2: {
    height: 44
  },
  button2: {
    width: 42,
    height: 44,
    marginLeft: 21
  },
  image3: {
    width: 42,
    flex: 1
  },
  button3: {
    width: 42,
    height: 44,
    marginLeft: 22,
    marginTop: 1
  },
  image4: {
    width: 40,
    height: 40
  },
  button4: {
    width: 42,
    height: 44,
    marginLeft: 23
  },
  image5: {
    flex: 1
  },
  button5: {
    width: 42,
    height: 44,
    marginLeft: 18
  },
  image6: {
    flex: 1
  },
  button1Row: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 12,
    marginTop: 15
  }
});

export default Doctorssuggestion;
