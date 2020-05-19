import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Faq2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image7Stack}>
        <ImageBackground
          source={require("../assets/images/logo5.png")}
          resizeMode="contain"
          style={styles.image7}
          imageStyle={styles.image7_imageStyle}
        >
          <Icon name="youtube" style={styles.icon}></Icon>
        </ImageBackground>
        <Text style={styles.faQs4}>12)</Text>
        <Text style={styles.faQs5}>13)</Text>
        <Text style={styles.faQs6}>14)</Text>
        <Text style={styles.faQs7}>15)</Text>
        <Text style={styles.suggestions1}>Videos of Raju Garu :</Text>
      </View>
      <View style={styles.group}>
        <View style={styles.rect2}>
          <Text style={styles.faQs1}>FAQ&#39;s</Text>
        </View>
      </View>
      <Text style={styles.faQs2}>10)</Text>
      <Text style={styles.faQs3}>11)</Text>
      <TouchableOpacity style={styles.button}>
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
              <TouchableOpacity
                onPress={() => props.navigation.navigate("TreatmentInfo")}
                style={styles.button7}
              >
                <Image
                  source={require("../assets/images/dietmenu.png")}
                  resizeMode="contain"
                  style={styles.image5}
                ></Image>
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("HealthTracking")}
              style={styles.button5}
            >
              <TouchableOpacity
                onPress={() => props.navigation.navigate("HealthTracking")}
                style={styles.button6}
              >
                <Image
                  source={require("../assets/images/healthtracking.png")}
                  resizeMode="contain"
                  style={styles.image6}
                ></Image>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
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
    width: 350,
    height: 359,
    position: "absolute"
  },
  image7_imageStyle: {
    opacity: 0.2
  },
  icon: {
    color: "rgba(70,31,0,1)",
    fontSize: 100,
    width: 87,
    height: 96,
    marginTop: 237,
    marginLeft: 123
  },
  faQs4: {
    top: 1,
    left: 36,
    width: 36,
    height: 26,
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  faQs5: {
    top: 42,
    left: 36,
    width: 36,
    height: 26,
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  faQs6: {
    top: 83,
    left: 36,
    width: 36,
    height: 26,
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  faQs7: {
    top: 124,
    left: 36,
    width: 36,
    height: 26,
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  suggestions1: {
    top: 181,
    left: 37,
    width: 236,
    height: 26,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  image7Stack: {
    width: 350,
    height: 359,
    marginTop: 216,
    marginLeft: 1
  },
  group: {
    width: 308,
    height: 74,
    marginTop: -542,
    marginLeft: 32
  },
  rect2: {
    width: 308,
    height: 72,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0
  },
  faQs1: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 23,
    marginLeft: 120
  },
  faQs2: {
    width: 36,
    height: 26,
    color: "rgba(243,240,238,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 28,
    marginLeft: 37
  },
  faQs3: {
    width: 36,
    height: 26,
    color: "rgba(243,240,238,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 13,
    marginLeft: 37
  },
  button: {
    width: 308,
    height: 71,
    marginTop: 458,
    marginLeft: 26
  },
  rect3: {
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row",
    flex: 1
  },
  button1: {
    width: 40,
    height: 39,
    marginTop: 1
  },
  image2: {
    height: 39
  },
  button2: {
    width: 40,
    height: 39,
    marginLeft: 21
  },
  image3: {
    width: 40,
    flex: 1
  },
  button3: {
    width: 40,
    height: 39,
    marginLeft: 21,
    marginTop: 1
  },
  image4: {
    width: 40,
    height: 38
  },
  button4: {
    width: 40,
    height: 39,
    marginLeft: 23
  },
  button7: {
    flex: 1
  },
  image5: {
    flex: 1
  },
  button5: {
    width: 40,
    height: 39,
    marginLeft: 17
  },
  button6: {
    flex: 1
  },
  image6: {
    flex: 1
  },
  button1Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 11,
    marginTop: 13
  }
});

export default Faq2;
