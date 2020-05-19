import React, { Component, useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Picker,
  Alert,
  Linking,
  Button
} from "react-native";
import MaterialSlider from "../components/MaterialSlider";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import CustomBottomBar from "../components/customBottomBar";
import SadhakasHealthTrackInfoDropDown from "../components/defaultdropdown";
import styles from "../styles/Faq_styles";


function Faq(props) {
  const supportedURL1 = "https://www.youtube.com/channel/UCNBkfuBkQKFOyf7RicF66rw";
  const supportedURL2 = "https://www.youtube.com/channel/UC8bntwvlT0qgyBcxpV-jvbg";
  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
  };


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
            <View style={styles.faqs}>
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

            {/* <FontAwesomeIcon
            name="youtube"
            style={styles.icon}><YoTubeLinks /></FontAwesomeIcon> */}
            <View style={styles.icon}>
              <OpenURLButton url={supportedURL1}>For Health Mantra Youtube Channel</OpenURLButton>
            </View>
            <View style={styles.iconYoutube}>
              <OpenURLButton url={supportedURL2}>For Good Health Youtube Channel</OpenURLButton>
            </View>
          </View>



        </View>
      </ScrollView>

      <CustomBottomBar {...props} />
    </View>
  );
}



export default Faq;
