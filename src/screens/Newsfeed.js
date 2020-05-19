import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";

function Newsfeed(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image7StackStack}>
        <View style={styles.image7Stack}>
          <Image
            source={require("../assets/images/logo5.png")}
            resizeMode="contain"
            style={styles.image7}
          ></Image>
          <View style={styles.group3}></View>
          <View style={styles.scrollArea1}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.scrollArea1_contentContainerStyle}
            >
              <View style={styles.rect3}>
                <Text style={styles.announcements1}>*Announcements 1</Text>
                <Text style={styles.announcements2}>*Announcements 2</Text>
                <Text style={styles.announcements3}>*Announcements 3</Text>
                <Text style={styles.announcements4}>*Announcements 4</Text>
                <Text style={styles.announcements5}>*Announcements 5</Text>
                <Text style={styles.announcements9}>*Announcements 6</Text>
                <Text style={styles.announcements11}>*Announcements 1</Text>
                <Text style={styles.announcements12}>*Announcements 2</Text>
                <Text style={styles.announcements13}>*Announcements 3</Text>
                <Text style={styles.announcements14}>*Announcements 4</Text>
                <Text style={styles.announcements15}>*Announcements 5</Text>
                <Text style={styles.announcements10}>*Announcements 6</Text>
                <Text style={styles.announcements17}>*Announcements 1</Text>
                <Text style={styles.announcements18}>*Announcements 2</Text>
                <Text style={styles.announcements19}>*Announcements 3</Text>
                <Text style={styles.announcements20}>*Announcements 4</Text>
                <Text style={styles.announcements21}>*Announcements 5</Text>
                <Text style={styles.announcements16}>*Announcements 6</Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <Text style={styles.announcements8}>Announcements :</Text>
      </View>
      <View style={styles.group2}>
        <View style={styles.rect1}>
          <Text style={styles.text}>News Feed</Text>
        </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(175,106,37,1)"
  },
  image7: {
    top: 65,
    left: 0,
    width: 365,
    height: 384,
    position: "absolute",
    opacity: 0.2
  },
  group3: {
    top: 0,
    left: 31,
    width: 316,
    height: 521,
    position: "absolute"
  },
  scrollArea1: {
    top: 15,
    left: 35,
    width: 316,
    height: 521,
    position: "absolute"
  },
  scrollArea1_contentContainerStyle: {
    width: 316,
    height: 2607
  },
  rect3: {
    width: 316,
    height: 1190,
    backgroundColor: "rgba(230, 230, 230,0.4)",
    borderRadius: 80
  },
  announcements1: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 55,
    marginLeft: 34
  },
  announcements2: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 34,
    marginLeft: 39
  },
  announcements3: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 39,
    marginLeft: 39
  },
  announcements4: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 36,
    marginLeft: 39
  },
  announcements5: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 33,
    marginLeft: 39
  },
  announcements9: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 30,
    marginLeft: 44
  },
  announcements11: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 21,
    marginLeft: 44
  },
  announcements12: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 34,
    marginLeft: 49
  },
  announcements13: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 39,
    marginLeft: 49
  },
  announcements14: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 36,
    marginLeft: 49
  },
  announcements15: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 33,
    marginLeft: 49
  },
  announcements10: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 30,
    marginLeft: 54
  },
  announcements17: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 16,
    marginLeft: 49
  },
  announcements18: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 34,
    marginLeft: 54
  },
  announcements19: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 39,
    marginLeft: 54
  },
  announcements20: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 36,
    marginLeft: 54
  },
  announcements21: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 33,
    marginLeft: 54
  },
  announcements16: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 30,
    marginLeft: 59
  },
  image7Stack: {
    top: 19,
    left: 0,
    width: 365,
    height: 536,
    position: "absolute"
  },
  announcements8: {
    top: 0,
    left: 95,
    width: 205,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  image7StackStack: {
    width: 365,
    height: 555,
    marginTop: 126,
    marginLeft: 1
  },
  group2: {
    width: 321,
    height: 79,
    marginTop: -646,
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
  text: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 24,
    marginLeft: 89
  },
  rect4: {
    width: 321,
    height: 79,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row",
    marginTop: 589,
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

export default Newsfeed;
