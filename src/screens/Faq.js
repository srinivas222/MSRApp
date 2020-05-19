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
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Faq(props) {
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
            <View style={styles.problem1Stack}>
              <Text style={styles.problem1}>Problem :</Text>
              <ImageBackground
                source={require("../assets/images/logo6.png")}
                resizeMode="contain"
                style={styles.image8}
                imageStyle={styles.image8_imageStyle}
              >
                <FontAwesomeIcon
                  name="youtube"
                  style={styles.icon2}
                ></FontAwesomeIcon>
              </ImageBackground>
              <TextInput placeholder="" style={styles.textInput1}></TextInput>
              <IoniconsIcon
                name="md-arrow-dropdown"
                style={styles.icon1}
              ></IoniconsIcon>
              <Text style={styles.suggestions1}>Suggestions :</Text>
              <Text style={styles.faQs1}>1)</Text>
              <Text style={styles.faQs2}>2)</Text>
              <Text style={styles.faQs3}>3)</Text>
              <Text style={styles.faQs4}>4)</Text>
              <Text style={styles.faQs5}>5)</Text>
              <Text style={styles.suggestions2}>Videos of Raju Garu :</Text>
            </View>
            <Image
              source={require("../assets/images/logo6.png")}
              resizeMode="contain"
              style={styles.image9}
            ></Image>
            <Image
              source={require("../assets/images/logo6.png")}
              resizeMode="contain"
              style={styles.image10}
            ></Image>
          </ScrollView>
        </View>
      </View>
      <View style={styles.group}>
        <View style={styles.rect1}>
          <Text style={styles.faQs}>FAQ&#39;s</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(175,106,37,1)"
  },
  image7: {
    top: 102,
    left: 0,
    width: 365,
    height: 384,
    position: "absolute",
    opacity: 0.2
  },
  scrollArea: {
    left: 0,
    width: 374,
    height: 557,
    backgroundColor: "rgba(175,106,37,1)",
    position: "absolute",
    top: 0
  },
  scrollArea_contentContainerStyle: {
    width: 359,
    height: 2606
  },
  problem1: {
    top: 9,
    left: 39,
    width: 161,
    height: 9,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  image8: {
    top: 0,
    left: 0,
    width: 359,
    height: 719,
    position: "absolute"
  },
  image8_imageStyle: {
    opacity: 0.2
  },
  icon2: {
    color: "rgba(70,31,0,1)",
    fontSize: 200,
    width: 187,
    height: 43,
    marginTop: 438,
    marginLeft: 93
  },
  textInput1: {
    top: 70,
    left: 39,
    width: 192,
    height: 9,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(250,247,247,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  icon1: {
    top: 70,
    left: 207,
    position: "absolute",
    color: "rgba(248,244,244,1)",
    fontSize: 40,
    width: 25,
    height: 12
  },
  suggestions1: {
    top: 99,
    left: 39,
    width: 167,
    height: 7,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  faQs1: {
    top: 149,
    left: 38,
    width: 24,
    height: 8,
    color: "rgba(70,26,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  faQs2: {
    top: 191,
    left: 38,
    width: 24,
    height: 8,
    color: "rgba(70,26,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  faQs3: {
    top: 234,
    left: 38,
    width: 24,
    height: 8,
    color: "rgba(70,26,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  faQs4: {
    top: 278,
    left: 39,
    width: 37,
    height: 8,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  faQs5: {
    top: 318,
    left: 38,
    width: 24,
    height: 8,
    color: "rgba(70,26,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  suggestions2: {
    top: 381,
    left: 40,
    width: 265,
    height: 9,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  problem1Stack: {
    width: 359,
    height: 719,
    marginTop: 2
  },
  image9: {
    width: 359,
    height: 719,
    opacity: 0.2,
    marginTop: 181
  },
  image10: {
    width: 359,
    height: 719,
    opacity: 0.2,
    marginTop: 196
  },
  image7Stack: {
    width: 374,
    height: 557,
    marginTop: 128,
    marginLeft: 1
  },
  group: {
    width: 321,
    height: 79,
    marginTop: -650,
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
  faQs: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 23,
    marginLeft: 125
  },
  rect2: {
    width: 321,
    height: 79,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row",
    marginTop: 587,
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
    marginTop: 17
  }
});

export default Faq;
