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
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCheckbox1 from "../components/MaterialCheckbox1";
import MaterialCheckbox from "../components/MaterialCheckbox";

function Cautiondeposite(props) {
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
            <Text style={styles.depositeMoney}>Deposite Money :</Text>
          </ImageBackground>
          <IoniconsIcon name="ios-images" style={styles.icon1}></IoniconsIcon>
          <Text style={styles.amountPaid}>Amount Paid :</Text>
          <TextInput placeholder="" style={styles.textInput2}></TextInput>
          <Text style={styles.balance}>Balance :</Text>
          <TextInput placeholder="" style={styles.textInput3}></TextInput>
          <Text style={styles.viewStatement}>View Statement :</Text>
          <FontAwesomeIcon
            name="credit-card"
            style={styles.icon2}
          ></FontAwesomeIcon>
          <FeatherIcon name="file" style={styles.icon3}></FeatherIcon>
          <MaterialCheckbox1
            style={styles.materialCheckbox1}
          ></MaterialCheckbox1>
          <Text style={styles.loremIpsum}>Start Discharge Formalites</Text>
          <Text style={styles.iAgreeTc1}>I Agree T &amp; C</Text>
          <MaterialCheckbox
            button1="Cautiondeposite"
            style={styles.materialCheckbox2}
          ></MaterialCheckbox>
        </View>
        <Text style={styles.sadhakasId1}>Sadhaka&#39;s ID :</Text>
        <TextInput placeholder="" style={styles.textInput1}></TextInput>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Homepage")}
          style={styles.button7}
        >
          <View style={styles.rect3}>
            <Text style={styles.confirm1}>Confirm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Homepage")}
          style={styles.button6}
        >
          <View style={styles.rect4}>
            <Text style={styles.back1}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.group}>
        <View style={styles.rect5}>
          <Text style={styles.text4}>Caution Deposite</Text>
        </View>
      </View>
      <View style={styles.rect6}>
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
    top: 98,
    left: 0,
    width: 365,
    height: 374,
    position: "absolute"
  },
  image7_imageStyle: {
    opacity: 0.2
  },
  depositeMoney: {
    width: 203,
    height: 27,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 182,
    marginLeft: 35
  },
  icon1: {
    top: 0,
    left: 254,
    position: "absolute",
    color: "rgba(70,31,0,1)",
    fontSize: 100,
    width: 91,
    height: 107
  },
  amountPaid: {
    top: 81,
    left: 38,
    width: 165,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  textInput2: {
    top: 108,
    left: 39,
    width: 193,
    height: 36,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(250,247,247,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  balance: {
    top: 156,
    left: 38,
    width: 108,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  textInput3: {
    top: 204,
    left: 39,
    width: 104,
    height: 36,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(250,247,247,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  viewStatement: {
    top: 156,
    left: 163,
    width: 199,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  icon2: {
    top: 269,
    left: 244,
    position: "absolute",
    color: "rgba(70,31,0,1)",
    fontSize: 100,
    width: 112,
    height: 107
  },
  icon3: {
    top: 202,
    left: 220,
    position: "absolute",
    color: "rgba(70,31,0,1)",
    fontSize: 50,
    width: 52,
    height: 53
  },
  materialCheckbox1: {
    top: 388,
    left: 9,
    width: 42,
    height: 43,
    position: "absolute"
  },
  loremIpsum: {
    top: 395,
    left: 46,
    width: 313,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  iAgreeTc1: {
    top: 448,
    left: 131,
    width: 152,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  materialCheckbox2: {
    top: 429,
    left: 74,
    width: 67,
    height: 70,
    position: "absolute"
  },
  image7Stack: {
    top: 0,
    left: 0,
    width: 365,
    height: 499,
    position: "absolute"
  },
  sadhakasId1: {
    top: 6,
    left: 38,
    width: 162,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  textInput1: {
    top: 33,
    left: 39,
    width: 193,
    height: 36,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(250,247,247,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  button7: {
    top: 494,
    left: 194,
    width: 138,
    height: 49,
    position: "absolute"
  },
  rect3: {
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
  button6: {
    top: 495,
    left: 42,
    width: 138,
    height: 49,
    position: "absolute"
  },
  rect4: {
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
  image7StackStack: {
    width: 365,
    height: 544,
    marginTop: 126,
    marginLeft: 1
  },
  group: {
    width: 321,
    height: 77,
    marginTop: -636,
    marginLeft: 33
  },
  rect5: {
    width: 308,
    height: 72,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0
  },
  text4: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 23,
    marginLeft: 58
  },
  rect6: {
    width: 321,
    height: 79,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row",
    marginTop: 592,
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

export default Cautiondeposite;
