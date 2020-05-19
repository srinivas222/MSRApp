import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import MaterialSlider from "../components/MaterialSlider";
import OcticonsIcon from "react-native-vector-icons/Octicons";

function HealthTrackinginfo2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image7Stack}>
        <ImageBackground
          source={require("../assets/images/logo5.png")}
          resizeMode="contain"
          style={styles.image7}
          imageStyle={styles.image7_imageStyle}
        >
          <Text style={styles.faQs1}>1)</Text>
        </ImageBackground>
        <MaterialSlider style={styles.materialSlider1}></MaterialSlider>
        <Text style={styles.bloodReport4}>Blood Report</Text>
        <Text style={styles.activities}>Activities</Text>
        <OcticonsIcon name="graph" style={styles.icon}></OcticonsIcon>
        <OcticonsIcon name="graph" style={styles.icon1}></OcticonsIcon>
        <OcticonsIcon name="graph" style={styles.icon2}></OcticonsIcon>
        <OcticonsIcon name="graph" style={styles.icon3}></OcticonsIcon>
        <Text style={styles.faQs}>FAQ&#39;s :</Text>
        <Text style={styles.faQs2}>2)</Text>
      </View>
      <View style={styles.group}>
        <View style={styles.rect1}>
          <Text style={styles.sadhakas1}>Sadhaka&#39;s Health Tracking</Text>
          <Text style={styles.information1}>Information</Text>
        </View>
      </View>
      <Text style={styles.healthStatistics}>Health Statistics :</Text>
      <View style={styles.weight4Row}>
        <Text style={styles.weight4}>Weight</Text>
        <Text style={styles.height4}>Height</Text>
      </View>
      <Text style={styles.faQs3}>3)</Text>
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
    top: 3,
    left: 0,
    width: 365,
    height: 374,
    position: "absolute"
  },
  image7_imageStyle: {
    opacity: 0.2
  },
  faQs1: {
    width: 24,
    height: 27,
    color: "rgba(243,240,238,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 319,
    marginLeft: 33
  },
  materialSlider1: {
    top: 171,
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
  bloodReport4: {
    top: 119,
    left: 20,
    width: 153,
    height: 27,
    color: "rgba(249,248,246,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  activities: {
    top: 119,
    left: 221,
    width: 110,
    height: 27,
    color: "rgba(245,243,241,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  icon: {
    top: 0,
    left: 41,
    position: "absolute",
    color: "rgba(9,9,9,1)",
    fontSize: 100,
    width: 104,
    height: 107
  },
  icon1: {
    top: 0,
    left: 223,
    position: "absolute",
    color: "rgba(9,9,9,1)",
    fontSize: 100,
    width: 104,
    height: 107
  },
  icon2: {
    top: 155,
    left: 223,
    position: "absolute",
    color: "rgba(9,9,9,1)",
    fontSize: 100,
    width: 104,
    height: 107
  },
  icon3: {
    top: 155,
    left: 41,
    position: "absolute",
    color: "rgba(9,9,9,1)",
    fontSize: 100,
    width: 104,
    height: 107
  },
  faQs: {
    top: 279,
    left: 33,
    width: 77,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  faQs2: {
    top: 365,
    left: 33,
    width: 24,
    height: 27,
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  image7Stack: {
    width: 644,
    height: 392,
    marginTop: 221,
    marginLeft: 1
  },
  group: {
    width: 321,
    height: 77,
    marginTop: -579,
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
  information1: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 1,
    marginLeft: 83
  },
  healthStatistics: {
    width: 208,
    height: 27,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 15,
    marginLeft: 34
  },
  weight4: {
    width: 82,
    height: 27,
    color: "rgba(245,241,237,1)",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  height4: {
    width: 78,
    height: 27,
    color: "rgba(251,248,245,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginLeft: 95
  },
  weight4Row: {
    height: 27,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 57,
    marginRight: 63
  },
  faQs3: {
    width: 24,
    height: 27,
    color: "rgba(243,240,238,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 413,
    marginLeft: 34
  },
  rect2: {
    width: 321,
    height: 79,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row",
    marginTop: 48,
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

export default HealthTrackinginfo2;
