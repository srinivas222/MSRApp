import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Picker
} from "react-native";
import MaterialSlider from "../components/MaterialSlider";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import CustomBottomBar from "../components/customBottomBar";
import SadhakasHealthTrackInfoDropDown from "../components/defaultdropdown";
import styles from "../styles/Faq_styles";

function Faq(props) {
  const [problem, setproblem] = useState("problem");
  var problems = [];
  for (let i = 0; i < 15; i++) {
    problems.push(
      <Picker.Item key={i} label={"Problem" + i.toString()} value={"problem" + i} />
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.image7Stack}>
        <ImageBackground
          source={require("../assets/images/logo5.png")}
          resizeMode="contain"
          style={styles.image7}
          imageStyle={styles.image7_imageStyle}
        >
        </ImageBackground>
      </View>
      <View style={styles.group}>
        <View style={styles.rect1}>
          <Text style={styles.sadhakas1}>FAQ&#39;s</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollArea_contentContainerStyle}
      >
        <View style={styles.scrollArea}>
          <View style={styles.problemBlock}>
            <Text style={styles.problem}>Problem :</Text>
              <TextInput placeholder="" style={styles.textInput1}></TextInput>
              <View style={styles.icon3}>
                <Picker
                  selectedValue={problem}
                  style={{ color: "white" }}
                  onValueChange={(itemValue, itemIndex) => setProblem(itemValue)}
                >
                  {problems}
                </Picker>
            </View>
          </View>
          <View style={styles.suggestionsblock}>
                <Text style={styles.suggestions}>Suggestions :</Text>
                <View style = {styles.faqs}>
                <Text style={styles.faQs1}>1)</Text>
                <Text style={styles.faQs2}>2)</Text>
                <Text style={styles.faQs3}>3)</Text>
                <Text style={styles.faQs4}>4)</Text>
                <Text style={styles.faQs5}>5)</Text>
                <Text style={styles.faQs6}>6)</Text>
                <Text style={styles.faQs7}>7)</Text>
                <Text style={styles.faQs8}>8)</Text>
                <Text style={styles.faQs9}>9)</Text>
                <Text style={styles.faQs10}>10)</Text>
                <Text style={styles.faQs11}>11)</Text>
                <Text style={styles.faQs12}>12)</Text>
                <Text style={styles.faQs13}>13)</Text>
                <Text style={styles.faQs14}>14)</Text>
                <Text style={styles.faQs15}>15)</Text>
                </View>
              </View>
              <View style={styles.youtubeblock}>
          <Text style={styles.youtubevlock}>Videos of Raju Garu :</Text>
          <TouchableOpacity>
          <FontAwesomeIcon
            name="youtube"
            style={styles.icon}
          ></FontAwesomeIcon>
          </TouchableOpacity>
          </View>



        </View>
      </ScrollView>

      <CustomBottomBar />
    </View>
  );
}



export default Faq;
