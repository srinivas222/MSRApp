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
import MaterialSlider from "../components/MaterialSlider";

function Healthtrackinginfo1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image7StackStackStackStack}>
        <View style={styles.image7StackStackStack}>
          <View style={styles.image7StackStack}>
            <View style={styles.image7Stack}>
              <ImageBackground
                source={require("../assets/images/logo5.png")}
                resizeMode="contain"
                style={styles.image7}
                imageStyle={styles.image7_imageStyle}
              >
                <Text style={styles.name5}>Name :</Text>
              </ImageBackground>
              <Text style={styles.height1}>Height :</Text>
              <TextInput placeholder="" style={styles.textInput3}></TextInput>
              <TextInput placeholder="" style={styles.textInput5}></TextInput>
              <TextInput placeholder="" style={styles.textInput6}></TextInput>
              <Text style={styles.bp1}>BP :</Text>
              <Text style={styles.bloodTestName1}>Blood Test Name :</Text>
              <TextInput placeholder="" style={styles.textInput7}></TextInput>
              <IoniconsIcon
                name="md-arrow-dropdown"
                style={styles.icon7}
              ></IoniconsIcon>
              <Text style={styles.bloodReport1}>Blood Report :</Text>
              <TextInput placeholder="" style={styles.textInput12}></TextInput>
              <MaterialSlider style={styles.materialSlider1}></MaterialSlider>
              <Text style={styles.name}>Name :</Text>
              <TextInput placeholder="" style={styles.textInput16}></TextInput>
              <TextInput placeholder="" style={styles.textInput17}></TextInput>
              <Text style={styles.name4}>Name :</Text>
              <MaterialSlider style={styles.materialSlider2}></MaterialSlider>
            </View>
            <Text style={styles.bmi1}>BMI :</Text>
          </View>
          <Text style={styles.weight1}>Weight :</Text>
          <TextInput placeholder="" style={styles.textInput2}></TextInput>
          <View style={styles.textInput4Stack}>
            <TextInput placeholder="" style={styles.textInput4}></TextInput>
            <IoniconsIcon name="ios-images" style={styles.icon6}></IoniconsIcon>
          </View>
        </View>
        <Text style={styles.date1}>Date :</Text>
        <TextInput placeholder="" style={styles.textInput1}></TextInput>
      </View>
      <View style={styles.group}>
        <View style={styles.rect1}>
          <Text style={styles.sadhakas1}>Sadhaka&#39;s Health Tracking</Text>
          <Text style={styles.information}>Information</Text>
        </View>
      </View>
      <View style={styles.name6Row}>
        <Text style={styles.name6}>Name :</Text>
        <TextInput placeholder="" style={styles.textInput18}></TextInput>
      </View>
      <View style={styles.rect2}>
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
    top: 8,
    left: 0,
    width: 365,
    height: 374,
    position: "absolute"
  },
  image7_imageStyle: {
    opacity: 0.2
  },
  name5: {
    width: 83,
    height: 27,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 342,
    marginLeft: 35
  },
  height1: {
    top: 21,
    left: 28,
    width: 91,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  textInput3: {
    top: 1,
    left: 125,
    width: 73,
    height: 43,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  textInput5: {
    top: 0,
    left: 262,
    width: 52,
    height: 43,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  textInput6: {
    top: 0,
    left: 320,
    width: 31,
    height: 43,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  bp1: {
    top: 22,
    left: 210,
    width: 47,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  bloodTestName1: {
    top: 62,
    left: 27,
    width: 214,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  textInput7: {
    top: 89,
    left: 30,
    width: 313,
    height: 43,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  icon7: {
    top: 91,
    left: 317,
    position: "absolute",
    color: "rgba(248,244,244,1)",
    fontSize: 40,
    width: 21,
    height: 43
  },
  bloodReport1: {
    top: 147,
    left: 27,
    width: 167,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  textInput12: {
    top: 202,
    left: 125,
    width: 188,
    height: 43,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  materialSlider1: {
    top: 302,
    left: 204,
    width: 260,
    height: 32,
    position: "absolute",
    transform: [
      {
        rotate: "90.00deg"
      }
    ]
  },
  name: {
    top: 222,
    left: 35,
    width: 83,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  textInput16: {
    top: 265,
    left: 125,
    width: 188,
    height: 43,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  textInput17: {
    top: 335,
    left: 125,
    width: 188,
    height: 43,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  name4: {
    top: 281,
    left: 35,
    width: 83,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  materialSlider2: {
    top: 158,
    left: 71,
    width: 573,
    height: 32,
    position: "absolute",
    transform: [
      {
        rotate: "90.00deg"
      }
    ]
  },
  image7Stack: {
    top: 26,
    left: 0,
    width: 644,
    height: 382,
    position: "absolute"
  },
  bmi1: {
    top: 0,
    left: 210,
    width: 61,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  image7StackStack: {
    top: 74,
    left: 0,
    width: 644,
    height: 408,
    position: "absolute"
  },
  weight1: {
    top: 72,
    left: 27,
    width: 95,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  textInput2: {
    top: 53,
    left: 130,
    width: 73,
    height: 43,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  textInput4: {
    top: 53,
    left: 0,
    width: 73,
    height: 43,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  icon6: {
    top: 0,
    left: 9,
    position: "absolute",
    color: "rgba(70,31,0,1)",
    fontSize: 60,
    width: 55,
    height: 64
  },
  textInput4Stack: {
    top: 0,
    left: 276,
    width: 73,
    height: 96,
    position: "absolute"
  },
  image7StackStackStack: {
    top: 0,
    left: 0,
    width: 644,
    height: 482,
    position: "absolute"
  },
  date1: {
    top: 23,
    left: 29,
    width: 68,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  textInput1: {
    top: 8,
    left: 101,
    width: 135,
    height: 43,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  image7StackStackStackStack: {
    width: 644,
    height: 482,
    marginTop: 116,
    marginLeft: 1
  },
  group: {
    width: 321,
    height: 77,
    marginTop: -564,
    marginLeft: 27
  },
  rect1: {
    width: 308,
    height: 72,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0
  },
  sadhakas1: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 17,
    marginLeft: 3
  },
  information: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 1,
    marginLeft: 83
  },
  name6: {
    width: 83,
    height: 27,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 15
  },
  textInput18: {
    width: 188,
    height: 43,
    color: "#121212",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular",
    marginLeft: 7
  },
  name6Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 506,
    marginLeft: 36,
    marginRight: 61
  },
  rect2: {
    width: 321,
    height: 79,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row",
    marginTop: 43,
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

export default Healthtrackinginfo1;
