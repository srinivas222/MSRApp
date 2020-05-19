import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function Untitled2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStackStack}>
        <View style={styles.imageStack}>
          <ImageBackground
            source={require("../assets/images/logo4.png")}
            resizeMode="contain"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <Text style={styles.treatment1}>Treatment</Text>
          </ImageBackground>
          <TouchableOpacity style={styles.button6}>
            <Image
              source={require("../assets/images/profile.png")}
              resizeMode="contain"
              style={styles.image7}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Activityinfomation")}
            style={styles.button7}
          >
            <Image
              source={require("../assets/images/activity1.png")}
              resizeMode="contain"
              style={styles.image8}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("TreatmentInfo")}
            style={styles.button8}
          >
            <Image
              source={require("../assets/images/treatment1.png")}
              resizeMode="contain"
              style={styles.image9}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Dietmenu")}
            style={styles.button9}
          >
            <Image
              source={require("../assets/images/dietmenu1.png")}
              resizeMode="contain"
              style={styles.image10}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("HealthTracking")}
            style={styles.button10}
          >
            <Image
              source={require("../assets/images/healthtracking1.png")}
              resizeMode="contain"
              style={styles.image11}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Doctorsinteraction")}
            style={styles.button11}
          >
            <Image
              source={require("../assets/images/29264200fe74a640313b09043a6d0020.png")}
              resizeMode="contain"
              style={styles.image12}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.profile1}>Profile</Text>
          <Text style={styles.activity1}>Activity</Text>
          <Text style={styles.dietMenu1}>Diet Menu</Text>
          <Text style={styles.health1}>Health</Text>
          <Text style={styles.tracking1}>Tracking</Text>
          <Text style={styles.doctors1}>Doctor&#39;s</Text>
        </View>
        <Text style={styles.interaction1}>Interaction</Text>
      </View>
      <View style={styles.rect1}>
        <View style={styles.home1Row}>
          <Text style={styles.home1}>Home</Text>
          <View style={styles.group1}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Homepagenotification")}
              style={styles.button13}
            >
              <MaterialIconsIcon
                name="notifications-active"
                style={styles.icon2}
              ></MaterialIconsIcon>
            </TouchableOpacity>
          </View>
        </View>
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
      <View style={styles.button14Row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Feedback")}
          style={styles.button14}
        >
          <MaterialIconsIcon
            name="feedback"
            style={styles.icon3}
          ></MaterialIconsIcon>
        </TouchableOpacity>
        <Text style={styles.feedback1}>Feedback</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(175,106,37,1)"
  },
  image: {
    top: 72,
    left: 0,
    width: 350,
    height: 350,
    position: "absolute"
  },
  image_imageStyle: {
    opacity: 0.36
  },
  treatment1: {
    width: 117,
    height: 24,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 166,
    marginLeft: 19
  },
  button6: {
    top: 0,
    left: 33,
    width: 80,
    height: 78,
    position: "absolute"
  },
  image7: {
    width: 80,
    height: 80
  },
  button7: {
    top: 0,
    left: 234,
    width: 80,
    height: 78,
    position: "absolute"
  },
  image8: {
    width: 80,
    height: 80
  },
  button8: {
    top: 154,
    left: 32,
    width: 80,
    height: 78,
    position: "absolute"
  },
  image9: {
    width: 80,
    height: 80
  },
  button9: {
    top: 154,
    left: 234,
    width: 80,
    height: 78,
    position: "absolute"
  },
  image10: {
    width: 80,
    height: 80
  },
  button10: {
    top: 306,
    left: 32,
    width: 80,
    height: 78,
    position: "absolute"
  },
  image11: {
    width: 80,
    height: 80
  },
  button11: {
    top: 306,
    left: 234,
    width: 80,
    height: 78,
    position: "absolute"
  },
  image12: {
    width: 80,
    height: 80
  },
  profile1: {
    top: 87,
    left: 36,
    width: 74,
    height: 24,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  activity1: {
    top: 87,
    left: 234,
    width: 85,
    height: 24,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  dietMenu1: {
    top: 238,
    left: 219,
    width: 114,
    height: 24,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  health1: {
    top: 399,
    left: 37,
    width: 74,
    height: 24,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  tracking1: {
    top: 422,
    left: 26,
    width: 98,
    height: 24,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  doctors1: {
    top: 399,
    left: 229,
    width: 91,
    height: 24,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  imageStack: {
    top: 0,
    left: 0,
    width: 350,
    height: 446,
    position: "absolute"
  },
  interaction1: {
    top: 422,
    left: 217,
    width: 122,
    height: 24,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  imageStackStack: {
    width: 350,
    height: 446,
    marginTop: 138,
    marginLeft: 5
  },
  rect1: {
    width: 308,
    height: 70,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row",
    marginTop: -553,
    marginLeft: 26
  },
  home1: {
    width: 67,
    height: 39,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 7
  },
  group1: {
    width: 40,
    height: 39,
    marginLeft: 67
  },
  button13: {
    width: 40,
    height: 40
  },
  icon2: {
    color: "rgba(70,31,0,1)",
    fontSize: 40
  },
  home1Row: {
    height: 46,
    flexDirection: "row",
    flex: 1,
    marginRight: 13,
    marginLeft: 121,
    marginTop: 18
  },
  rect2: {
    width: 308,
    height: 70,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row",
    marginTop: 547,
    marginLeft: 26
  },
  button1: {
    width: 40,
    height: 39,
    marginTop: 1
  },
  image2: {
    width: 40,
    height: 40
  },
  button2: {
    width: 40,
    height: 39,
    marginLeft: 21
  },
  image3: {
    width: 40,
    height: 40
  },
  button3: {
    width: 40,
    height: 39,
    marginLeft: 21,
    marginTop: 1
  },
  image4: {
    width: 40,
    height: 40
  },
  button4: {
    width: 40,
    height: 39,
    marginLeft: 23
  },
  image5: {
    width: 40,
    height: 40
  },
  button5: {
    width: 40,
    height: 39,
    marginLeft: 17
  },
  image6: {
    width: 40,
    height: 40
  },
  button1Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 11,
    marginTop: 13
  },
  button14: {
    width: 60,
    height: 58
  },
  icon3: {
    color: "rgba(19,19,19,1)",
    fontSize: 60
  },
  feedback1: {
    width: 108,
    height: 24,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginLeft: 5,
    marginTop: 13
  },
  button14Row: {
    height: 58,
    flexDirection: "row",
    marginTop: -132,
    marginLeft: 100,
    marginRight: 87
  }
});

export default Untitled2;
