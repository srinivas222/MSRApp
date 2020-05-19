import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCheckbox from "../components/MaterialCheckbox";

function Doctorssuggestion1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image7Column}>
        <Image
          source={require("../assets/images/logo5.png")}
          resizeMode="contain"
          style={styles.image7}
        ></Image>
        <View style={styles.group}>
          <View style={styles.rect2}>
            <Text style={styles.sadhakasDoctors1}>
              Sadhaka&#39;s Doctor&#39;s
            </Text>
            <Text style={styles.suggestion5}>Suggestion</Text>
          </View>
        </View>
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
      <View style={styles.image7ColumnFiller}>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.image8Stack}>
              <ImageBackground
                source={require("../assets/images/logo7.png")}
                resizeMode="contain"
                style={styles.image8}
                imageStyle={styles.image8_imageStyle}
              >
                <Text style={styles.iAgreeTc1}>I Agree T &amp; C</Text>
              </ImageBackground>
              <ImageBackground
                source={require("../assets/images/logo7.png")}
                resizeMode="contain"
                style={styles.image9}
                imageStyle={styles.image9_imageStyle}
              >
                <TextInput
                  placeholder="        ----Enter Your Feedback----"
                  placeholderTextColor="rgba(70,31,0,1)"
                  style={styles.textInput4}
                ></TextInput>
              </ImageBackground>
              <ImageBackground
                source={require("../assets/images/logo7.png")}
                resizeMode="contain"
                style={styles.image10}
                imageStyle={styles.image10_imageStyle}
              >
                <Text style={styles.feedback1}>Feedback :</Text>
              </ImageBackground>
              <TextInput
                placeholder="          --------- Suggestion ---------"
                placeholderTextColor="rgba(70,31,0,1)"
                style={styles.textInput1}
              ></TextInput>
              <Text style={styles.suggestion6}>Suggestion :</Text>
              <TextInput
                placeholder="              --------- Problem ---------"
                placeholderTextColor="rgba(70,31,0,1)"
                style={styles.textInput2}
              ></TextInput>
              <Text style={styles.problem1}>Problem :</Text>
              <TextInput placeholder="" style={styles.textInput3}></TextInput>
              <Icon name="ios-images" style={styles.icon1}></Icon>
              <Text style={styles.doctorsName1}>Doctor&#39;s Name :</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Doctorssuggestion1")}
                style={styles.button6}
              >
                <View style={styles.rect32}>
                  <MaterialCheckbox
                    button1="DoctorsSuggestion2"
                    style={styles.materialCheckbox1}
                  ></MaterialCheckbox>
                  <Text style={styles.back2}>Back</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Homepage")}
                style={styles.button7}
              >
                <View style={styles.rect4Stack}>
                  <View style={styles.rect4}></View>
                  <Text style={styles.confirm1}>Confirm</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
    width: 365,
    height: 384,
    opacity: 0.2,
    marginTop: 195
  },
  group: {
    width: 321,
    height: 79,
    marginTop: -579,
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
  sadhakasDoctors1: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 12,
    marginLeft: 52
  },
  suggestion5: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 3,
    marginLeft: 91
  },
  rect3: {
    width: 321,
    height: 79,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row",
    marginTop: 589,
    marginLeft: 26
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
  image7Column: {
    width: 365,
    marginTop: 35,
    marginLeft: 1
  },
  scrollArea: {
    width: 274,
    backgroundColor: "rgba(175,106,37,1)"
  },
  scrollArea_contentContainerStyle: {
    width: 376,
    flexDirection: "column"
  },
  image8: {
    top: 0,
    left: 0,
    width: 374,
    height: 334,
    position: "absolute"
  },
  image8_imageStyle: {
    opacity: 0.2
  },
  iAgreeTc1: {
    width: 135,
    height: 0,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginLeft: 83
  },
  image9: {
    top: 0,
    left: 3,
    width: 374,
    height: 334,
    position: "absolute"
  },
  image9_imageStyle: {
    opacity: 0.4
  },
  textInput4: {
    width: 271,
    height: 0,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "rgba(70,31,0,1)",
    opacity: 0.8,
    borderRadius: 60,
    fontSize: 25,
    fontFamily: "roboto-regular"
  },
  image10: {
    top: 0,
    left: 0,
    width: 374,
    height: 334,
    position: "absolute"
  },
  image10_imageStyle: {
    opacity: 0.4
  },
  feedback1: {
    width: 113,
    height: 0,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginLeft: 15
  },
  textInput1: {
    top: 0,
    left: 0,
    height: 0,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "rgba(70,31,0,1)",
    position: "absolute",
    opacity: 0.8,
    borderRadius: 60,
    fontSize: 25,
    fontFamily: "roboto-regular",
    right: 103
  },
  suggestion6: {
    top: 0,
    left: 26,
    width: 107,
    height: 0,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  textInput2: {
    top: 0,
    left: 0,
    height: 0,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "rgba(70,31,0,1)",
    position: "absolute",
    opacity: 0.8,
    borderRadius: 60,
    fontSize: 25,
    fontFamily: "roboto-regular",
    right: 103
  },
  problem1: {
    top: 0,
    left: 26,
    width: 82,
    height: 0,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  textInput3: {
    top: 0,
    left: 39,
    width: 114,
    height: 5,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  icon1: {
    top: 0,
    left: 186,
    position: "absolute",
    color: "rgba(70,31,0,1)",
    fontSize: 100,
    width: 67,
    height: 0
  },
  doctorsName1: {
    top: 0,
    left: 28,
    width: 134,
    height: 0,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  button6: {
    top: 0,
    left: 22,
    width: 111,
    height: 0,
    position: "absolute"
  },
  rect32: {
    width: 132,
    height: 46,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40
  },
  materialCheckbox1: {
    width: 59,
    height: 0,
    marginLeft: 3
  },
  back2: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 10,
    marginLeft: 35
  },
  button7: {
    top: 0,
    left: 144,
    width: 111,
    height: 0,
    position: "absolute"
  },
  rect4: {
    top: 0,
    left: 0,
    width: 132,
    height: 46,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 40
  },
  confirm1: {
    top: 10,
    left: 24,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  rect4Stack: {
    width: 132,
    height: 60
  },
  image8Stack: {
    height: 334,
    marginRight: -103
  },
  image7ColumnFiller: {
    flex: 1
  }
});

export default Doctorssuggestion1;
