import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function HealthTracking(props) {
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
                <View style={styles.scrollArea}>
                  <ScrollView
                    contentContainerStyle={
                      styles.scrollArea_contentContainerStyle
                      }
                  >
                    <Text style={styles.bloodReport1}>Blood Report :</Text>
                    <View style={styles.textInput11StackRow}></View>
                      <View style={styles.textInput11Stack}>
                        <TextInput
                          placeholder=""
                          style={styles.textInput11}
                        ></TextInput>
                        <IoniconsIcon
                          name="md-arrow-dropdown"
                          style={styles.icon17}
                        ></IoniconsIcon>
                      
                      <TextInput
                        placeholder=""
                        style={styles.textInput12}
                      ></TextInput>
                    </View>
                    <View style={styles.image8Stack}>
                      <ImageBackground
                        source={require("../assets/images/logo10.png")}
                        resizeMode="contain"
                        style={styles.image8}
                        imageStyle={styles.image8_imageStyle}
                      >
                        <TextInput
                          placeholder=""
                          style={styles.textInput23}
                        ></TextInput>
                      </ImageBackground>
                      <TextInput
                        placeholder=""
                        style={styles.textInput8}
                      ></TextInput>
                      <IoniconsIcon
                        name="md-arrow-dropdown"
                        style={styles.icon14}
                      ></IoniconsIcon>
                      <TextInput
                        placeholder=""
                        style={styles.textInput9}
                      ></TextInput>
                      <IoniconsIcon
                        name="md-arrow-dropdown"
                        style={styles.icon15}
                      ></IoniconsIcon>
                      <TextInput
                        placeholder=""
                        style={styles.textInput10}
                      ></TextInput>
                      <IoniconsIcon
                        name="md-arrow-dropdown"
                        style={styles.icon16}
                      ></IoniconsIcon>
                      <TextInput
                        placeholder=""
                        style={styles.textInput13}
                      ></TextInput>
                      <TextInput
                        placeholder=""
                        style={styles.textInput14}
                      ></TextInput>
                      <TextInput
                        placeholder=""
                        style={styles.textInput15}
                      ></TextInput>
                      <TextInput
                        placeholder=""
                        style={styles.textInput16}
                      ></TextInput>
                      <IoniconsIcon
                        name="md-arrow-dropdown"
                        style={styles.icon18}
                      ></IoniconsIcon>
                    </View>
                    <View style={styles.textInput22StackRow}>
                      <View style={styles.textInput22Stack}>
                        <TextInput
                          placeholder=""
                          style={styles.textInput22}
                        ></TextInput>
                        <IoniconsIcon
                          name="md-arrow-dropdown"
                          style={styles.icon21}
                        ></IoniconsIcon>
                      </View>
                      <TextInput
                        placeholder=""
                        style={styles.textInput17}
                      ></TextInput>
                    </View>
                    <View style={styles.textInput21StackRow}>
                      <View style={styles.textInput21Stack}>
                        <TextInput
                          placeholder=""
                          style={styles.textInput21}
                        ></TextInput>
                        <IoniconsIcon
                          name="md-arrow-dropdown"
                          style={styles.icon20}
                        ></IoniconsIcon>
                      </View>
                      <TextInput
                        placeholder=""
                        style={styles.textInput18}
                      ></TextInput>
                    </View>
                    <View style={styles.textInput20StackRow}>
                      <View style={styles.textInput20Stack}>
                        <TextInput
                          placeholder=""
                          style={styles.textInput20}
                        ></TextInput>
                        <IoniconsIcon
                          name="md-arrow-dropdown"
                          style={styles.icon19}
                        ></IoniconsIcon>
                      </View>
                      <TextInput
                        placeholder=""
                        style={styles.textInput19}
                      ></TextInput>
                    </View>
                  </ScrollView>
                </View>
              </ImageBackground>
              <Text style={styles.height}>Height :</Text>
              <TextInput placeholder="" style={styles.textInput3}></TextInput>
              <IoniconsIcon
                name="md-arrow-dropdown"
                style={styles.icon3}
              ></IoniconsIcon>
              <IoniconsIcon
                name="md-arrow-dropdown"
                style={styles.icon4}
              ></IoniconsIcon>
              <TextInput placeholder="" style={styles.textInput5}></TextInput>
              <TextInput placeholder="" style={styles.textInput6}></TextInput>
              <IoniconsIcon
                name="md-arrow-dropdown"
                style={styles.icon5}
              ></IoniconsIcon>
              <Text style={styles.bp}>BP :</Text>
              <Text style={styles.bloodTestName}>Blood Test Name :</Text>
              <TextInput placeholder="" style={styles.textInput7}></TextInput>
              <IoniconsIcon
                name="md-arrow-dropdown"
                style={styles.icon7}
              ></IoniconsIcon>
              <Text style={styles.attachProfilePhoto1}>
                Attach Blood Report :
              </Text>
              <FontAwesomeIcon
                name="cloud-upload"
                style={styles.icon12}
              ></FontAwesomeIcon>
              <Text style={styles.loremIpsum}>*</Text>
            </View>
            <Text style={styles.bmi}>BMI :</Text>
            <View style={styles.textInput2Stack}>
              <TextInput placeholder="" style={styles.textInput2}></TextInput>
              <IoniconsIcon
                name="ios-arrow-round-down"
                style={styles.icon2}
              ></IoniconsIcon>
            </View>
            <MaterialIconsIcon
              name="radio-button-checked"
              style={styles.icon13}
            ></MaterialIconsIcon>
          </View>
          <Text style={styles.weight}>Weight :</Text>
          <View style={styles.textInput4Stack}>
            <TextInput placeholder="" style={styles.textInput4}></TextInput>
            <IoniconsIcon name="ios-images" style={styles.icon6}></IoniconsIcon>
          </View>
          <Text style={styles.iAgreeTc1}>I Agree T &amp; C</Text>
        </View>
        <Text style={styles.date1}>Date :</Text>
        <View style={styles.textInput1Stack}>
          <TextInput placeholder="" style={styles.textInput1}></TextInput>
          <IoniconsIcon
            name="md-arrow-dropdown"
            style={styles.icon1}
          ></IoniconsIcon>
        </View>
      </View>
      <View style={styles.group}>
        <View style={styles.rect1}>
          <Text style={styles.sadhakas7}>Sadhaka&#39;s Health Tracking</Text>
        </View>
      </View>
      <View style={styles.button6Row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Homepage")}
          style={styles.button6}
        >
          <View style={styles.rect4}>
            <Text style={styles.back7}>Back</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Healthtrackinginfo1")}
          style={styles.button7}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Healthtrackinginfo1")}
            style={styles.button72}
          >
            <View style={styles.rect3}>
              <Text style={styles.confirm1}>Confirm</Text>
            </View>
          </TouchableOpacity>
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
    top: 9,
    left: 0,
    width: 365,
    height: 374,
    position: "absolute"
  },
  image7_imageStyle: {
    opacity: 0.2
  },
  scrollArea: {
    width: 352,
    height: 194,
    marginTop: 139,
    marginLeft: 10
  },
  scrollArea_contentContainerStyle: {
    width: 352,
    height: 968,
    flexDirection: "column"
  },
  bloodReport1: {
    width: 226,
    height: 6,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 9
  },
  textInput11: {
    top: 0,
    left: 0,
    width: 141,
    height: 10,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  icon17: {
    top: 1,
    left: 110,
    position: "absolute",
    color: "rgba(248,244,244,1)",
    fontSize: 40,
    width: 41,
    height: 10
  },
  textInput11Stack: {
    width: 151,
    height: 11
  },
  textInput12: {
    width: 141,
    height: 10,
    color: "#121212",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular",
    marginLeft: 54
  },
  textInput11StackRow: {
    height: 11,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 6
  },
  image8: {
    top: 7,
    left: 0,
    height: 73,
    position: "absolute",
    right: 0
  },
  image8_imageStyle: {
    opacity: 0.2
  },
  textInput23: {
    width: 141,
    height: 10,
    color: "#121212",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular",
    marginTop: 60,
    marginLeft: 6
  },
  textInput8: {
    top: 43,
    left: 6,
    width: 141,
    height: 10,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  icon14: {
    top: 44,
    left: 116,
    position: "absolute",
    color: "rgba(248,244,244,1)",
    fontSize: 40,
    width: 41,
    height: 10
  },
  textInput9: {
    top: 21,
    left: 6,
    width: 141,
    height: 10,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  icon15: {
    top: 22,
    left: 116,
    position: "absolute",
    color: "rgba(248,244,244,1)",
    fontSize: 40,
    width: 41,
    height: 10
  },
  textInput10: {
    top: 0,
    left: 6,
    width: 141,
    height: 10,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  icon16: {
    top: 1,
    left: 116,
    position: "absolute",
    color: "rgba(248,244,244,1)",
    fontSize: 40,
    width: 41,
    height: 10
  },
  textInput13: {
    top: 1,
    left: 211,
    width: 141,
    height: 10,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  textInput14: {
    top: 22,
    left: 211,
    width: 141,
    height: 10,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  textInput15: {
    top: 44,
    left: 211,
    width: 141,
    height: 10,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  textInput16: {
    top: 67,
    left: 211,
    width: 141,
    height: 10,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  icon18: {
    top: 68,
    left: 116,
    position: "absolute",
    color: "rgba(248,244,244,1)",
    fontSize: 40,
    width: 41,
    height: 10
  },
  image8Stack: {
    height: 80,
    marginTop: 10
  },
  textInput22: {
    top: 0,
    left: 0,
    width: 141,
    height: 10,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  icon21: {
    top: 1,
    left: 110,
    position: "absolute",
    color: "rgba(248,244,244,1)",
    fontSize: 40,
    width: 41,
    height: 10
  },
  textInput22Stack: {
    width: 151,
    height: 11
  },
  textInput17: {
    width: 141,
    height: 10,
    color: "#121212",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular",
    marginLeft: 54
  },
  textInput22StackRow: {
    height: 11,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 6
  },
  textInput21: {
    top: 0,
    left: 0,
    width: 141,
    height: 10,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  icon20: {
    top: 1,
    left: 110,
    position: "absolute",
    color: "rgba(248,244,244,1)",
    fontSize: 40,
    width: 41,
    height: 10
  },
  textInput21Stack: {
    width: 151,
    height: 11
  },
  textInput18: {
    width: 141,
    height: 10,
    color: "#121212",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular",
    marginLeft: 54,
    marginTop: 1
  },
  textInput21StackRow: {
    height: 11,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 6
  },
  textInput20: {
    top: 0,
    left: 0,
    width: 141,
    height: 10,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  icon19: {
    top: 1,
    left: 110,
    position: "absolute",
    color: "rgba(248,244,244,1)",
    fontSize: 40,
    width: 41,
    height: 10
  },
  textInput20Stack: {
    width: 151,
    height: 11
  },
  textInput19: {
    width: 141,
    height: 10,
    color: "#121212",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular",
    marginLeft: 54,
    marginTop: 1
  },
  textInput20StackRow: {
    height: 11,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 6
  },
  height: {
    top: 22,
    left: 28,
    width: 91,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  textInput3: {
    top: 2,
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
  icon3: {
    top: 7,
    left: 176,
    position: "absolute",
    color: "rgba(248,244,244,1)",
    fontSize: 40,
    width: 21,
    height: 43
  },
  icon4: {
    top: 2,
    left: 292,
    position: "absolute",
    color: "rgba(248,244,244,1)",
    fontSize: 40,
    width: 21,
    height: 43
  },
  textInput5: {
    top: 0,
    left: 264,
    width: 52,
    height: 44,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  textInput6: {
    top: 1,
    left: 329,
    width: 31,
    height: 43,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  icon5: {
    top: 6,
    left: 338,
    position: "absolute",
    color: "rgba(248,244,244,1)",
    fontSize: 30,
    width: 16,
    height: 32
  },
  bp: {
    top: 23,
    left: 210,
    width: 47,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  bloodTestName: {
    top: 63,
    left: 27,
    width: 214,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  textInput7: {
    top: 90,
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
    top: 92,
    left: 317,
    position: "absolute",
    color: "rgba(248,244,244,1)",
    fontSize: 40,
    width: 21,
    height: 43
  },
  attachProfilePhoto1: {
    top: 354,
    left: 22,
    width: 250,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  icon12: {
    top: 347,
    left: 285,
    position: "absolute",
    color: "rgba(70,31,0,1)",
    fontSize: 40,
    width: 45,
    height: 43
  },
  loremIpsum: {
    top: 347,
    left: 13,
    width: 11,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-regular"
  },
  image7Stack: {
    top: 46,
    left: 0,
    width: 365,
    height: 390,
    position: "absolute"
  },
  bmi: {
    top: 21,
    left: 210,
    width: 61,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  textInput2: {
    top: 0,
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
  icon2: {
    top: 5,
    left: 51,
    position: "absolute",
    color: "rgba(248,244,244,1)",
    fontSize: 40,
    width: 21,
    height: 43
  },
  textInput2Stack: {
    top: 0,
    left: 130,
    width: 73,
    height: 48,
    position: "absolute"
  },
  icon13: {
    top: 429,
    left: 75,
    position: "absolute",
    color: "rgba(70,31,0,1)",
    fontSize: 40,
    width: 42,
    height: 43
  },
  image7StackStack: {
    top: 53,
    left: 0,
    width: 365,
    height: 472,
    position: "absolute"
  },
  weight: {
    top: 72,
    left: 27,
    width: 95,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
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
  iAgreeTc1: {
    top: 490,
    left: 127,
    width: 152,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  image7StackStackStack: {
    top: 0,
    left: 0,
    width: 365,
    height: 525,
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
    top: 0,
    left: 0,
    width: 135,
    height: 43,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(248,244,244,1)",
    borderWidth: 0,
    borderBottomWidth: 5,
    fontFamily: "roboto-regular"
  },
  icon1: {
    top: 2,
    left: 106,
    position: "absolute",
    color: "rgba(248,244,244,1)",
    fontSize: 40,
    width: 21,
    height: 43
  },
  textInput1Stack: {
    top: 8,
    left: 101,
    width: 135,
    height: 45,
    position: "absolute"
  },
  image7StackStackStackStack: {
    width: 365,
    height: 525,
    marginTop: 116,
    marginLeft: 1
  },
  group: {
    width: 321,
    height: 77,
    marginTop: -607,
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
  sadhakas7: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 24,
    marginLeft: 3
  },
  button6: {
    width: 138,
    height: 49
  },
  rect4: {
    width: 132,
    height: 46,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40
  },
  back7: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 10,
    marginLeft: 35
  },
  button7: {
    width: 138,
    height: 49,
    marginLeft: 14
  },
  button72: {
    width: 132,
    height: 46
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
    marginTop: 11,
    marginLeft: 25
  },
  button6Row: {
    height: 49,
    flexDirection: "row",
    marginTop: 531,
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
    marginTop: 12,
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

export default HealthTracking;
