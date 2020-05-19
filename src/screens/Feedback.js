import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import MaterialCheckbox from "../components/MaterialCheckbox";
import styles from "../styles/Feedback_styles";
import CustomBottomBar from "../components/customBottomBar";
function Feedback(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image7StackStack}>
        <View style={styles.image7Stack}>
          <ImageBackground
            source={require("../assets/images/logo5.png")}
            resizeMode="contain"
            style={styles.image7}
            imageStyle={styles.image7_imageStyle}>
          </ImageBackground>
        </View>
        <View style={styles.rect1}>
        <Text style={styles.feedback2}>Feedback</Text>
      </View>
      <View style={styles.sadhakasIdBlock}>
        <Text style={styles.sadhakasId}>Sadhaka&#39;s ID :</Text>
        <TextInput placeholder="" style={styles.textInput4}></TextInput>
      </View>
      <View style={styles.feedbackblock}>
        <Text style={styles.feedback1}>Feedback :</Text>

        <View style={styles.textInput1Column}>
          <TextInput
            placeholder="----Enter Your Feedback----"
            placeholderTextColor="rgba(70,31,0,1)"
            style={styles.textInput1}
          ></TextInput>
        </View>
      </View>
      <View style={styles.iAgreeTc1Stack}>
        <Text style={styles.iAgreeTc1}>I Agree T &amp; C</Text>
        <MaterialCheckbox
          style={styles.materialCheckbox1}
        ></MaterialCheckbox>
      </View>
      <View style = {styles.backandconfirmBlock}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Healthtrackinginfo1")}
                style={styles.backbutton6}
              >
                <View style={styles.backrect3}>
                  <Text style={styles.back1Text}>Back</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Homepage")}
                style={styles.confirmbutton7}
              >
                <View style={styles.confirmrect4}>
                  <Text style={styles.confirm1Text}>Confirm</Text>
                </View>
              </TouchableOpacity>
            </View>
        
        



        <View style={styles.bottomTab}>
          <CustomBottomBar {...props}/>
        </View>
      </View>

    </View>
  );
}

export default Feedback;