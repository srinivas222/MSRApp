import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Picker
} from "react-native";
import { Center } from "@builderx/utils";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import styles from "../styles/SadhakasHealthTrackingInfo_styles";
import CustomBottomBar from "../components/customBottomBar";
import DateTime from "../components/DateTime";
import OcticonsIcon from "react-native-vector-icons/Octicons";
import SadhakasHealthTrackInfoDropDown from "../components/SadhakasHealthTrackInfoDropDown";
import MaterialCheckbox from "../components/MaterialCheckbox";

function SadhakasHealthTrackingInfo(props) {
  const [bp1, setBp1] = useState(1);
  const [bp2, setBp2] = useState(2);
  const [height, setHeight] = useState(2);
  const [weight, setWeight] = useState(2);
  var myloop = [];
  for (let i = 0; i < 1000; i++) {
    myloop.push(
      <Picker.Item key={i} label={i.toString()} value={i} />
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
          {/* <Boototmfooter style={styles.boototmfooter}></Boototmfooter> */}
        </ImageBackground>
        {/* <MaterialSlider style={styles.materialSlider1}></MaterialSlider> */}
      </View>
      <View style={styles.group}>
        <View style={styles.rect1}> 
          <Text style={styles.sadhakas1}>Sadhaka&#39;s Health Tracking Information</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollArea_contentContainerStyle}
      >
        <View style={styles.scrollArea}> 
          <View style={styles.dateBlock}>
            <Text style={styles.date1}>Date :</Text>
            <View style={styles.dateTime}>
              <DateTime />
            </View>
          </View>
          <View style={styles.weightBlock}>
            <Text style={styles.weight}>Weight :</Text>
            <TextInput placeholder="" style={styles.textInput4}></TextInput>
            {/* <IoniconsIcon
                name="ios-arrow-round-down"
                style={styles.icon2}
              ></IoniconsIcon> */}
            <View style={styles.icon2}>
              <Picker
                selectedValue={weight}
                style={{ color: "white" }}
                onValueChange={(itemValue, itemIndex) => setWeight(itemValue)}
              >
                {myloop}
              </Picker>
            </View>
          </View>
          <View style={styles.heightBlock}>
            <Text style={styles.height}>Height :</Text>
            <TextInput placeholder="" style={styles.textInput3}></TextInput>
            {/* <IoniconsIcon
                name="md-arrow-dropdown"
                style={styles.icon3}
              ></IoniconsIcon> */}
            <View style={styles.icon3}>
              <Picker
                selectedValue={height}
                style={{ color: "white" }}
                onValueChange={(itemValue, itemIndex) => setHeight(itemValue)}
              >
                {myloop}
              </Picker>
            </View>
          </View>
          <View style={styles.bmiBlock}>
            <Text style={styles.bmi}>BMI :</Text>
            <View style={styles.textInput2Stack}>
              <TextInput placeholder="" style={styles.textInput2}></TextInput>
            </View>
          </View>


          <View style={styles.bpBlock}>
            <Text style={styles.bp}>BP :</Text>
            <TextInput placeholder="" style={styles.textInput5}></TextInput>
            {/* <IoniconsIcon
                name="md-arrow-dropdown"
                style={styles.icon4}
              ></IoniconsIcon> */}
            <View style={styles.icon4}>
              <Picker
                selectedValue={bp1}
                style={{ color: "white" }}
                onValueChange={(itemValue, itemIndex) => setBp1(itemValue)}
              >
                {myloop}


              </Picker>
            </View>
            <TextInput placeholder="" style={styles.textInput6}></TextInput>
            {/* <IoniconsIcon
                name="md-arrow-dropdown"
                style={styles.icon5}
              ></IoniconsIcon> */}
            <View style={styles.icon5}>
              <Picker
                selectedValue={bp2}
                style={{ color: "white" }}
                onValueChange={(itemValue, itemIndex) => setBp2(itemValue)}
              >
                {myloop}


              </Picker>
            </View>
          </View>

          <View style={styles.bloodTest}>
            <Text style={styles.bloodTestInput}>Blood Test Name :</Text>
            <View style={styles.btdropdown1}>
              <SadhakasHealthTrackInfoDropDown />
            </View>
          </View>
          <View style={styles.bloodReportBlock}>
            <Text style={styles.bloodReport1}>Blood Report :</Text>
            <View style={styles.bloodNamesDirection}>
              <Text style={styles.name2}>Name :</Text>
              <TextInput placeholder="" style={styles.textInput12}></TextInput>
              <Text style={styles.name3}>Name :</Text>
              <TextInput placeholder="" style={styles.textInput13}></TextInput>
              <Text style={styles.name4}>Name :</Text>
              <TextInput placeholder="" style={styles.textInput14}></TextInput>
              <Text style={styles.name5}>Name :</Text>
              <TextInput placeholder="" style={styles.textInput15}></TextInput>
              <Text style={styles.name6}>Name :</Text>
              <TextInput placeholder="" style={styles.textInput16}></TextInput>
            </View>
          </View>
          <View style={styles.healthStatiticsBlock}>
            <Text style={styles.healthStatistics}>Health Statistics :</Text>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={styles.weight4}>Weight:</Text>
                <OcticonsIcon name="graph" style={styles.graph}></OcticonsIcon>
              </View>
              <View>
                <Text style={styles.blood}>Blood:</Text>
                <OcticonsIcon name="graph" style={styles.graph1}></OcticonsIcon>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={styles.activity}>Activities:</Text>
                <OcticonsIcon name="graph" style={styles.graph2}></OcticonsIcon>
              </View>
              <View>
                <Text style={styles.diet}>Diet:</Text>
                <OcticonsIcon name="graph" style={styles.graph3}></OcticonsIcon>
              </View>
            </View>
            <View style={styles.faqBlock}>
              <Text style={styles.faQs}>FAQ&#39;s :</Text>
              <Text style={styles.faQs1}>1)</Text>
              <Text style={styles.faQs2}>2)</Text>
              <Text style={styles.faQs3}>3)</Text>
            </View>
          </View>


          <View style = {styles.suggestionBlock}>
            <View>
              <Text style={styles.suggestion}>Suggestions of Raju Garu :</Text>
              <View style = {styles.suggestionFaqBlock}>
              <Text style={styles.faQs4}>1)</Text>
              <Text style={styles.faQs5}>2)</Text>
              <Text style={styles.faQs6}>3)</Text>
              <Text style={styles.faQs7}>4)</Text>
              </View>
            </View>
            <View style = {styles.feedbachBlock}>
              <Text style={styles.feedback}>Feedback :</Text>
              <TextInput
                placeholder="----Enter Your Feedback----"
                placeholderTextColor="rgba(70,31,0,1)"
                style={styles.feedbacktextInput}
              ></TextInput>
            </View>
            <View style = {styles.agreeTandCBlock}>
              <MaterialCheckbox style={styles.materialCheckboxTandC}></MaterialCheckbox>
              <Text style={styles.suggestioniAgreeTc1}>I Agree T &amp; C</Text>
            </View>
            <View style = {styles.backandconfirmBlock}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("SadhakasHealthTracking")}
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
          </View>

        </View>
      </ScrollView>

      <CustomBottomBar {...props}/>
    </View>
  );
}



export default SadhakasHealthTrackingInfo;
