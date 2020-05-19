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
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Homepagemenu(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image19StackStackStack}>
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
            <Text style={styles.interaction1}>Interaction</Text>
            <Text style={styles.doctors1}>Doctor&#39;s</Text>
            <View style={styles.rect3}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Doctorssuggestion1")}
                style={styles.button10}
              >
                <View style={styles.image13Row}>
                  <Image
                    source={require("../assets/images/29264200fe74a640313b09043a6d0020.png")}
                    resizeMode="contain"
                    style={styles.image13}
                  ></Image>
                  <View style={styles.doctors2Column}>
                    <Text style={styles.doctors2}>Doctor&#39;s</Text>
                    <Text style={styles.suggestion}>Suggestion</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Healthtrackinginfo1")}
                style={styles.button9}
              >
                <View style={styles.image14Row}>
                  <Image
                    source={require("../assets/images/healthtracking1.png")}
                    resizeMode="contain"
                    style={styles.image14}
                  ></Image>
                  <View style={styles.health2Stack}>
                    <Text style={styles.health2}>Health</Text>
                    <Text style={styles.tracking2}>Tracking</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Newsfeed")}
                style={styles.button8}
              >
                <View style={styles.image18Row}>
                  <Image
                    source={require("../assets/images/logo2.png")}
                    resizeMode="contain"
                    style={styles.image18}
                  ></Image>
                  <Text style={styles.newsFeed}>News Feed</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Faq1")}
                style={styles.button7}
              >
                <View style={styles.image16Row}>
                  <Image
                    source={require("../assets/images/unnamed.png")}
                    resizeMode="contain"
                    style={styles.image16}
                  ></Image>
                  <Text style={styles.faQs}>FAQ&#39;s</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Cautiondeposite")}
                style={styles.button6}
              >
                <View style={styles.image17Row}>
                  <Image
                    source={require("../assets/images/4627-200.png")}
                    resizeMode="contain"
                    style={styles.image17}
                  ></Image>
                  <View style={styles.cautionStack}>
                    <Text style={styles.caution}>Caution</Text>
                    <Text style={styles.deposite}>Deposite</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.tracking1}>Tracking</Text>
          <MaterialIconsIcon
            name="feedback"
            style={styles.icon3}
          ></MaterialIconsIcon>
        </View>
        <Text style={styles.feedback1}>Feedback</Text>
      </View>
      <View style={styles.group}>
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
      <View style={styles.rect4}>
        <View style={styles.button13Row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Homepage")}
            style={styles.button13}
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
  image19: {
    top: 81,
    left: 1,
    width: 365,
    height: 374,
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
    marginTop: 203,
    marginLeft: 24
  },
  image7: {
    top: 27,
    left: 39,
    width: 83,
    height: 85,
    position: "absolute"
  },
  image8: {
    top: 23,
    left: 249,
    width: 83,
    height: 85,
    position: "absolute"
  },
  image9: {
    top: 200,
    left: 39,
    width: 83,
    height: 85,
    position: "absolute"
  },
  image10: {
    top: 192,
    left: 249,
    width: 83,
    height: 85,
    position: "absolute"
  },
  image11: {
    top: 344,
    left: 39,
    width: 83,
    height: 85,
    position: "absolute"
  },
  image12: {
    top: 337,
    left: 249,
    width: 83,
    height: 85,
    position: "absolute"
  },
  profile1: {
    top: 121,
    left: 43,
    width: 77,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  activity1: {
    top: 118,
    left: 249,
    width: 89,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  dietMenu1: {
    top: 283,
    left: 233,
    width: 119,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  health1: {
    top: 432,
    left: 44,
    width: 77,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  interaction1: {
    top: 453,
    left: 231,
    width: 127,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  doctors1: {
    top: 430,
    left: 244,
    width: 95,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  rect3: {
    top: 0,
    left: 0,
    width: 222,
    height: 506,
    backgroundColor: "rgba(230, 230, 230,0.7)",
    position: "absolute",
    borderTopRightRadius: 80,
    borderBottomRightRadius: 80
  },
  button10: {
    width: 203,
    height: 64,
    marginTop: 15,
    marginLeft: 12
  },
  image13: {
    width: 60,
    height: 60
  },
  doctors2: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginLeft: 16
  },
  suggestion: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  doctors2Column: {
    width: 127,
    marginLeft: 7,
    marginTop: 8,
    marginBottom: 2
  },
  image13Row: {
    height: 60,
    flexDirection: "row",
    marginRight: 9
  },
  button9: {
    width: 182,
    height: 64,
    flexDirection: "row",
    marginTop: 36,
    marginLeft: 11
  },
  image14: {
    width: 60,
    height: 60
  },
  health2: {
    top: 0,
    left: 11,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  tracking2: {
    top: 24,
    left: 0,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  health2Stack: {
    width: 98,
    height: 49,
    marginLeft: 16,
    marginTop: 7
  },
  image14Row: {
    height: 60,
    flexDirection: "row",
    flex: 1,
    marginRight: 8
  },
  button8: {
    width: 196,
    height: 64,
    flexDirection: "row",
    marginTop: 39,
    marginLeft: 16
  },
  image18: {
    width: 60,
    height: 60
  },
  newsFeed: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginLeft: 5,
    marginTop: 15
  },
  image18Row: {
    height: 60,
    flexDirection: "row",
    flex: 1,
    marginRight: 8
  },
  button7: {
    width: 153,
    height: 64,
    flexDirection: "row",
    marginTop: 38,
    marginLeft: 21
  },
  image16: {
    width: 60,
    height: 60
  },
  faQs: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginLeft: 26,
    marginTop: 14
  },
  image16Row: {
    height: 60,
    flexDirection: "row",
    flex: 1,
    marginRight: 6
  },
  button6: {
    width: 176,
    height: 64,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 25
  },
  image17: {
    width: 60,
    height: 60
  },
  caution: {
    top: 0,
    left: 4,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  deposite: {
    top: 24,
    left: 0,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  cautionStack: {
    width: 99,
    height: 49,
    marginLeft: 9,
    marginTop: 3
  },
  image17Row: {
    height: 60,
    flexDirection: "row",
    flex: 1,
    marginRight: 8
  },
  image19Stack: {
    top: 0,
    left: 0,
    width: 366,
    height: 506,
    position: "absolute"
  },
  tracking1: {
    top: 459,
    left: 32,
    width: 102,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  icon3: {
    top: 492,
    left: 104,
    position: "absolute",
    color: "rgba(19,19,19,1)",
    fontSize: 60,
    width: 63,
    height: 64
  },
  image19StackStack: {
    top: 0,
    left: 0,
    width: 366,
    height: 556,
    position: "absolute"
  },
  feedback1: {
    top: 507,
    left: 172,
    width: 113,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  image19StackStackStack: {
    width: 366,
    height: 556,
    marginTop: 129
  },
  group: {
    width: 321,
    height: 77,
    marginTop: -653,
    marginLeft: 26
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
    width: 31,
    height: 43
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
    marginLeft: 77,
    marginTop: 7
  },
  button12: {
    width: 42,
    height: 43,
    marginLeft: 69,
    marginTop: 2
  },
  icon2: {
    color: "rgba(70,31,0,1)",
    fontSize: 40
  },
  button11Row: {
    height: 47,
    flexDirection: "row",
    flex: 1,
    marginRight: 4,
    marginLeft: 18,
    marginTop: 19
  },
  rect4: {
    width: 321,
    height: 79,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row",
    marginTop: 594,
    marginLeft: 27
  },
  button13: {
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
  button13Row: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 12,
    marginTop: 15
  }
});

export default Homepagemenu;
