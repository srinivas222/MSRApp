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
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Homepagenotification(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image19StackStack}>
        <View style={styles.image19Stack}>
          <ImageBackground
            source={require("../assets/images/logo5.png")}
            resizeMode="contain"
            style={styles.image19}
            imageStyle={styles.image19_imageStyle}
          >
            <Text style={styles.treatment1}>Treatment</Text>
          </ImageBackground>
          <Image
            source={require("../assets/images/profile.png")}
            resizeMode="contain"
            style={styles.image7}
          ></Image>
          <Image
            source={require("../assets/images/activity1.png")}
            resizeMode="contain"
            style={styles.image8}
          ></Image>
          <Image
            source={require("../assets/images/treatment1.png")}
            resizeMode="contain"
            style={styles.image9}
          ></Image>
          <Image
            source={require("../assets/images/dietmenu1.png")}
            resizeMode="contain"
            style={styles.image10}
          ></Image>
          <Image
            source={require("../assets/images/healthtracking1.png")}
            resizeMode="contain"
            style={styles.image11}
          ></Image>
          <Image
            source={require("../assets/images/29264200fe74a640313b09043a6d0020.png")}
            resizeMode="contain"
            style={styles.image12}
          ></Image>
          <Text style={styles.profile1}>Profile</Text>
          <Text style={styles.activity1}>Activity</Text>
          <Text style={styles.dietMenu1}>Diet Menu</Text>
          <Text style={styles.health1}>Health</Text>
          <Text style={styles.tracking1}>Tracking</Text>
          <Text style={styles.doctors1}>Doctor&#39;s</Text>
          <MaterialIconsIcon
            name="feedback"
            style={styles.icon3}
          ></MaterialIconsIcon>
          <View style={styles.rect3}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Doctorssuggestion1")}
              style={styles.button6}
            >
              <Image
                source={require("../assets/images/29264200fe74a640313b09043a6d0020.png")}
                resizeMode="contain"
                style={styles.image17}
              ></Image>
            </TouchableOpacity>
            <View style={styles.button7Stack}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Healthtrackinginfo1")}
                style={styles.button7}
              >
                <Image
                  source={require("../assets/images/healthtracking1.png")}
                  resizeMode="contain"
                  style={styles.image16}
                ></Image>
              </TouchableOpacity>
              <MaterialCommunityIconsIcon
                name="numeric-2"
                style={styles.icon5}
              ></MaterialCommunityIconsIcon>
            </View>
            <View style={styles.icon8Stack}>
              <MaterialCommunityIconsIcon
                name="numeric-2"
                style={styles.icon8}
              ></MaterialCommunityIconsIcon>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Newsfeed")}
                style={styles.button8}
              >
                <Image
                  source={require("../assets/images/logo2.png")}
                  resizeMode="contain"
                  style={styles.image18}
                ></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.button9Stack}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Faq1")}
                style={styles.button9}
              >
                <Image
                  source={require("../assets/images/unnamed.png")}
                  resizeMode="contain"
                  style={styles.image14}
                ></Image>
              </TouchableOpacity>
              <MaterialCommunityIconsIcon
                name="numeric-2"
                style={styles.icon6}
              ></MaterialCommunityIconsIcon>
            </View>
            <View style={styles.button10Stack}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Cautiondeposite")}
                style={styles.button10}
              >
                <Image
                  source={require("../assets/images/4627-200.png")}
                  resizeMode="contain"
                  style={styles.image13}
                ></Image>
              </TouchableOpacity>
              <MaterialCommunityIconsIcon
                name="numeric-2"
                style={styles.icon7}
              ></MaterialCommunityIconsIcon>
            </View>
          </View>
          <MaterialCommunityIconsIcon
            name="numeric-1"
            style={styles.icon4}
          ></MaterialCommunityIconsIcon>
        </View>
        <Text style={styles.interaction1}>Interaction</Text>
        <Text style={styles.feedback1}>Feedback</Text>
      </View>
      <View style={styles.rect4}>
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
      <View style={styles.group1}>
        <View style={styles.rect1}>
          <View style={styles.button11Row}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Homepagemenu")}
              style={styles.button11}
            >
              <IoniconsIcon name="md-menu" style={styles.icon1}></IoniconsIcon>
            </TouchableOpacity>
            <Text style={styles.home1}>Home</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Homepagenotification")}
              style={styles.button12}
            >
              <MaterialIconsIcon
                name="notifications-active"
                style={styles.icon2}
              ></MaterialIconsIcon>
            </TouchableOpacity>
          </View>
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
  image19: {
    top: 88,
    left: 0,
    width: 365,
    height: 384,
    position: "absolute"
  },
  image19_imageStyle: {
    opacity: 0.2
  },
  treatment1: {
    width: 121,
    height: 27,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 214,
    marginLeft: 25
  },
  image7: {
    top: 34,
    left: 36,
    width: 83,
    height: 88,
    position: "absolute"
  },
  image8: {
    top: 32,
    left: 239,
    width: 83,
    height: 88,
    position: "absolute"
  },
  image9: {
    top: 207,
    left: 36,
    width: 83,
    height: 88,
    position: "absolute"
  },
  image10: {
    top: 207,
    left: 248,
    width: 83,
    height: 88,
    position: "absolute"
  },
  image11: {
    top: 351,
    left: 36,
    width: 83,
    height: 88,
    position: "absolute"
  },
  image12: {
    top: 351,
    left: 248,
    width: 83,
    height: 88,
    position: "absolute"
  },
  profile1: {
    top: 132,
    left: 43,
    width: 77,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  activity1: {
    top: 132,
    left: 248,
    width: 89,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  dietMenu1: {
    top: 302,
    left: 232,
    width: 119,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  health1: {
    top: 455,
    left: 45,
    width: 77,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  tracking1: {
    top: 481,
    left: 27,
    width: 102,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  doctors1: {
    top: 455,
    left: 243,
    width: 95,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  icon3: {
    top: 506,
    left: 103,
    position: "absolute",
    color: "rgba(19,19,19,1)",
    fontSize: 60,
    width: 63,
    height: 66
  },
  rect3: {
    top: 1,
    left: 220,
    width: 152,
    height: 520,
    backgroundColor: "rgba(230, 230, 230,0.7)",
    position: "absolute",
    transform: [
      {
        rotate: "180.00deg"
      }
    ],
    borderTopRightRadius: 80,
    borderBottomRightRadius: 80
  },
  button6: {
    width: 63,
    height: 66,
    marginTop: 14,
    marginLeft: 31
  },
  image17: {
    width: 63,
    flex: 1
  },
  button7: {
    top: 20,
    left: 0,
    width: 63,
    height: 66,
    position: "absolute"
  },
  image16: {
    flex: 1
  },
  icon5: {
    top: 0,
    left: 40,
    position: "absolute",
    color: "rgba(240,10,10,1)",
    fontSize: 40,
    width: 42,
    height: 44
  },
  button7Stack: {
    width: 82,
    height: 86,
    marginTop: 18,
    marginLeft: 32
  },
  icon8: {
    top: 0,
    left: 43,
    position: "absolute",
    color: "rgba(240,10,10,1)",
    fontSize: 40,
    width: 42,
    height: 44
  },
  button8: {
    top: 15,
    left: 0,
    width: 63,
    height: 66,
    position: "absolute"
  },
  image18: {
    width: 63,
    flex: 1
  },
  icon8Stack: {
    width: 85,
    height: 81,
    marginTop: 18,
    marginLeft: 34
  },
  button9: {
    top: 26,
    left: 0,
    width: 63,
    height: 66,
    position: "absolute"
  },
  image14: {
    flex: 1
  },
  icon6: {
    top: 0,
    left: 38,
    position: "absolute",
    color: "rgba(240,10,10,1)",
    fontSize: 40,
    width: 42,
    height: 44
  },
  button9Stack: {
    width: 80,
    height: 92,
    marginTop: 18,
    marginLeft: 39
  },
  button10: {
    top: 16,
    left: 0,
    width: 63,
    height: 66,
    position: "absolute"
  },
  image13: {
    height: 66
  },
  icon7: {
    top: 0,
    left: 40,
    position: "absolute",
    color: "rgba(240,10,10,1)",
    fontSize: 40,
    width: 42,
    height: 44
  },
  button10Stack: {
    width: 82,
    height: 82,
    marginTop: 12,
    marginLeft: 37
  },
  icon4: {
    top: 0,
    left: 291,
    position: "absolute",
    color: "rgba(240,10,10,1)",
    fontSize: 40,
    width: 48,
    height: 74,
    //overflow: "auto"
  },
  image19Stack: {
    top: 0,
    left: 0,
    width: 372,
    height: 572,
    position: "absolute"
  },
  interaction1: {
    top: 481,
    left: 230,
    width: 127,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  feedback1: {
    top: 521,
    left: 171,
    width: 113,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  image19StackStack: {
    width: 372,
    height: 572,
    marginTop: 122,
    marginLeft: 1
  },
  rect4: {
    width: 321,
    height: 79,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row",
    marginTop: 9,
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
  },
  group1: {
    width: 308,
    height: 72,
    marginTop: -748,
    marginLeft: 28
  },
  rect1: {
    width: 308,
    height: 72,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row"
  },
  button11: {
    width: 30,
    height: 40,
    marginTop: 3
  },
  icon1: {
    color: "rgba(70,31,0,1)",
    fontSize: 40
  },
  home1: {
    width: 67,
    height: 40,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginLeft: 72
  },
  button12: {
    width: 40,
    height: 40,
    marginLeft: 70,
    marginTop: 6
  },
  icon2: {
    color: "rgba(70,31,0,1)",
    fontSize: 40
  },
  button11Row: {
    height: 46,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 19,
    marginTop: 15
  }
});

export default Homepagenotification;
