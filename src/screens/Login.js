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
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import MaterialButtonDark from "../components/MaterialButtonDark";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialButtonPrimaryRow}>
        <MaterialButtonPrimary
          style={styles.materialButtonPrimary}
        ></MaterialButtonPrimary>
        <ImageBackground
          source={require("../assets/images/iPhone_X-XS-11_Pro_–_1.png")}
          resizeMode="contain"
          style={styles.image3}
          imageStyle={styles.image3_imageStyle}
        >
          <Text style={styles.loremIpsum2}>Manthena Satyanarayana Raju Arogyalayam</Text>
          {/* <Text style={styles.arogyalayam}>Arogyalayam</Text> */}
          <Image
            source={require("../assets/images/logo.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Text style={styles.userLogin}>User Login</Text>
          <View style={styles.userIdRow}>
            <TextInput
              placeholder="User Id"
              placeholderTextColor="rgba(70,31,0,1)"
              style={styles.userId}
            ></TextInput>
            <TextInput
              placeholder="PassWord"
              placeholderTextColor="rgba(70,31,0,1)"
              style={styles.passWord}
            ></TextInput>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Homepage")}
            style={styles.button}
          >
            <MaterialButtonDark
              text1="Login"
              button1="Login"
              style={styles.materialButtonDark}
            ></MaterialButtonDark>
          </TouchableOpacity>
          <View style={styles.loremIpsum3Row}>
            <Text style={styles.loremIpsum3}></Text>
            <Image
              source={require("../assets/images/msrpic.png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonPrimary: {
    width: 100,
    height: 36,
    marginTop: 145
  },
  image3: {
    width: 428,
    height: 826,
    marginLeft: 457
  },
  image3_imageStyle: {},
  loremIpsum2: {
    //width: 350,
    //height: 28,
    textAlign : "center",
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 20,
    //marginLeft: 41
  },
  arogyalayam: {
    width: 150,
    height: 24,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 6,
    marginLeft: 141
  },
  image2: {
    width: 180,
    height: 180,
    marginTop: 20,
    marginLeft: 123
  },
  userLogin: {
    width: 192,
    height: 42,
    color: "rgba(70,31,0,1)",
    justifyContent: "space-between",
    fontSize: 30,
    fontFamily: "roboto-700",
    marginTop: 24,
    marginLeft: 133
  },
  userId: {                        
    width: 85,
    height: 50,
    color: "#121212",
    borderColor: "#000000",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 20,
    fontFamily: "roboto-regular",
    textAlign : "center"
  },
  passWord: {
    width: 110,
    height: 50,
    color: "#121212",
    borderColor: "#000000",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 140,
    textAlign : "center"
  },
  userIdRow: {
    height: 50,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 44,
    marginRight: 31
  },
  button: {
    width: 158,
    height: 38,
    marginTop: 30,
    marginLeft: 135
  },
  materialButtonDark: {
    height: 45,
    borderRadius: 31,
    fontSize: 30,
    fontFamily: "roboto-700",
  },
  loremIpsum3: {
    color: "rgba(125,0,0,1)",
    fontSize: 23,
    fontFamily: "roboto-regular",
    marginTop: 149
  },
  image4: {
    width: 200,
    height: 200,
    marginLeft: 57
  },
  loremIpsum3Row: {
    height: 200,
    flexDirection: "row",
    marginTop: 54,
    marginLeft: 58,
    marginRight: 113
  },
  materialButtonPrimaryRow: {
    height: 826,
    flexDirection: "row",
    flex: 1,
    marginRight: -25,
    marginLeft: -585
  }
});

export default Login;
