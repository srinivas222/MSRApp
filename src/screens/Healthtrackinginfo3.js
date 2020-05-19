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
import MaterialSlider from "../components/MaterialSlider";
import MaterialCheckbox from "../components/MaterialCheckbox";

function Healthtrackinginfo3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image7Stack}>
        <ImageBackground
          source={require("../assets/images/logo5.png")}
          resizeMode="contain"
          style={styles.image7}
          imageStyle={styles.image7_imageStyle}
        >
          <Text style={styles.iAgreeTc1}>I Agree T &amp; C</Text>
        </ImageBackground>
        <Text style={styles.faQs3}>2)</Text>
        <Text style={styles.faQs4}>3)</Text>
        <MaterialSlider style={styles.materialSlider1}></MaterialSlider>
        <Text style={styles.feedback}>Feedback :</Text>
        <TextInput
          placeholder="----Enter Your Feedback----"
          placeholderTextColor="rgba(70,31,0,1)"
          style={styles.textInput}
        ></TextInput>
        <MaterialCheckbox style={styles.materialCheckbox}></MaterialCheckbox>
      </View>
      <Text style={styles.faQs1}>Suggestions of Raju Garu :</Text>
      <Text style={styles.faQs2}>1)</Text>
      <View style={styles.group}>
        <View style={styles.rect2}>
          <Text style={styles.sadhakas1}>Sadhaka&#39;s Health Tracking</Text>
          <Text style={styles.information1}>Information</Text>
        </View>
      </View>
      <View style={styles.button6Row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Healthtrackinginfo1")}
          style={styles.button6}
        >
          <View style={styles.rect3}>
            <Text style={styles.back1}>Back</Text>
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
    top: 13,
    left: 0,
    width: 365,
    height: 384,
    position: "absolute"
  },
  image7_imageStyle: {
    opacity: 0.2
  },
  iAgreeTc1: {
    width: 152,
    height: 27,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 348,
    marginLeft: 127
  },
  faQs3: {
    top: 0,
    left: 39,
    width: 24,
    height: 27,
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  faQs4: {
    top: 44,
    left: 39,
    width: 24,
    height: 27,
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  materialSlider1: {
    top: 175,
    left: 71,
    width: 573,
    height: 33,
    position: "absolute",
    transform: [
      {
        rotate: "90.00deg"
      }
    ]
  },
  feedback: {
    top: 97,
    left: 34,
    width: 127,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  textInput: {
    top: 130,
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
  materialCheckbox: {
    top: 341,
    left: 70,
    width: 67,
    height: 72,
    position: "absolute"
  },
  image7Stack: {
    width: 644,
    height: 413,
    marginTop: 217,
    marginLeft: 1
  },
  faQs1: {
    width: 311,
    height: 27,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: -500,
    marginLeft: 35
  },
  faQs2: {
    width: 24,
    height: 27,
    color: "rgba(243,240,238,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 16,
    marginLeft: 40
  },
  group: {
    width: 321,
    height: 79,
    marginTop: -165,
    marginLeft: 33
  },
  rect2: {
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
    marginLeft: 5
  },
  information1: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 1,
    marginLeft: 77
  },
  button6: {
    width: 138,
    height: 51
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
    height: 51,
    flexDirection: "row",
    marginTop: 518,
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
    marginTop: 20,
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

export default Healthtrackinginfo3;
