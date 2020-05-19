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
import MaterialCheckbox from "../components/MaterialCheckbox";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Doctorsinteraction(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image7StackStack}>
        <View style={styles.image7Stack}>
          <ImageBackground
            source={require("../assets/images/logo5.png")}
            resizeMode="contain"
            style={styles.image7}
            imageStyle={styles.image7_imageStyle}
          >
            <Text style={styles.problem}>Problem :</Text>
          </ImageBackground>
          <Text style={styles.iAgreeTc1}>I Agree T &amp; C</Text>
          <MaterialCheckbox
            button1="Doctorsinteraction"
            style={styles.materialCheckbox1}
          ></MaterialCheckbox>
          <TextInput
            placeholder="----Enter Your Problem----"
            placeholderTextColor="rgba(70,31,0,1)"
            style={styles.textInput1}
          ></TextInput>
          <Text style={styles.priority}>Priority :</Text>
          <IoniconsIcon name="ios-images" style={styles.icon2}></IoniconsIcon>
          <TextInput placeholder="" style={styles.textInput3}></TextInput>
          <IoniconsIcon
            name="md-arrow-dropdown"
            style={styles.icon3}
          ></IoniconsIcon>
        </View>
        <Text style={styles.doctorsName1}>Doctor&#39;s Name :</Text>
        <View style={styles.icon1Stack}>
          <IoniconsIcon
            name="md-arrow-dropdown"
            style={styles.icon1}
          ></IoniconsIcon>
          <TextInput placeholder="" style={styles.textInput2}></TextInput>
        </View>
      </View>
      <View style={styles.group}>
        <View style={styles.rect1}>
          <Text style={styles.sadhakasDoctors}>Sadhaka&#39;s Doctor&#39;s</Text>
          <Text style={styles.interation}>Interation</Text>
        </View>
      </View>
      <View style={styles.button6Row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Homepage")}
          style={styles.button6}
        >
          <View style={styles.rect3}>
            <Text style={styles.back1}>Back</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Doctorssuggestion1")}
          style={styles.button7}
        >
          <View style={styles.rect4}>
            <Text style={styles.confirm1}>Confirm</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    top: 99,
    left: 0,
    width: 365,
    height: 384,
    position: "absolute"
  },
  image7_imageStyle: {
    opacity: 0.2
  },
  problem: {
    width: 113,
    height: 27,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 84,
    marginLeft: 38
  },
  iAgreeTc1: {
    top: 453,
    left: 127,
    width: 152,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  materialCheckbox1: {
    top: 433,
    left: 70,
    width: 67,
    height: 72,
    position: "absolute"
  },
  textInput1: {
    top: 222,
    left: 38,
    width: 305,
    height: 214,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "rgba(70,31,0,1)",
    position: "absolute",
    opacity: 0.8,
    borderRadius: 60,
    fontSize: 25,
    fontFamily: "roboto-regular"
  },
  priority: {
    top: 94,
    left: 38,
    width: 100,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  icon2: {
    top: 0,
    left: 254,
    position: "absolute",
    color: "rgba(70,31,0,1)",
    fontSize: 100,
    width: 91,
    height: 110
  },
  textInput3: {
    top: 124,
    left: 46,
    width: 313,
    height: 44,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  icon3: {
    top: 129,
    left: 335,
    position: "absolute",
    color: "rgba(248,244,244,1)",
    fontSize: 40
  },
  image7Stack: {
    top: 0,
    left: 0,
    width: 365,
    height: 505,
    position: "absolute"
  },
  doctorsName1: {
    top: 5,
    left: 38,
    width: 186,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  icon1: {
    top: 1,
    left: 132,
    position: "absolute",
    color: "rgba(248,244,244,1)",
    fontSize: 40,
    width: 21,
    height: 44
  },
  textInput2: {
    top: 0,
    left: 0,
    width: 156,
    height: 44,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  icon1Stack: {
    top: 39,
    left: 50,
    width: 156,
    height: 45,
    position: "absolute"
  },
  image7StackStack: {
    width: 365,
    height: 505,
    marginTop: 125,
    marginLeft: 1
  },
  group: {
    width: 321,
    height: 79,
    marginTop: -598,
    marginLeft: 32
  },
  rect1: {
    width: 308,
    height: 72,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0
  },
  sadhakasDoctors: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 12,
    marginLeft: 52
  },
  interation: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 5,
    marginLeft: 100
  },
  button6: {
    width: 138,
    height: 51,
    marginTop: 1
  },
  rect3: {
    width: 132,
    height: 46,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40
  },
  back1: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 10,
    marginLeft: 35
  },
  button7: {
    width: 138,
    height: 51,
    marginLeft: 14
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
    marginLeft: 19
  },
  button6Row: {
    height: 52,
    flexDirection: "row",
    marginTop: 526,
    marginLeft: 38,
    marginRight: 47
  },
  rect5: {
    width: 321,
    height: 79,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row",
    marginTop: 14,
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

export default Doctorsinteraction;
