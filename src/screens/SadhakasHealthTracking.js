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
import CustomBottomBar from "../components/customBottomBar";
import styles from "../styles/SadhakasHealthTracking_Style";
import DropDownPicker from "../components/DropDownPicker";
import BPDropdownPicker from "../components/BPDropdownPicker";
import DateTime from "../components/DateTime";


function SadhakasHealthTracking(props) {
  const [bp1, setBp1] = useState(1);
  const [bp2, setBp2] = useState(2);
  const [height, setHeight] = useState(2);
  const [weight, setWeight] = useState(2);
  var myloop = [];
  for (let i = 0; i < 300; i++) {
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
          <Text style={styles.sadhakas1}>Sadhaka&#39;s Health Tracking</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollArea_contentContainerStyle}>
        <View style={styles.scrollArea}>
          <Text style={styles.date1}>Date :</Text>
          <View >
            <View style={styles.icon1}>
              <DateTime />
            </View>
          </View>
          {/* <IoniconsIcon name="ios-images" style={styles.icon6}></IoniconsIcon> */}
          <View style={styles.weightBlock}>
            <Text style={styles.weight}>Weight :</Text>
            <TextInput placeholder="Weight" style={styles.textInput4}></TextInput>
            {/* <View style={styles.icon2}>
              <Picker
                  selectedValue={weight}
                  style={{ color: "white" }}
                  onValueChange={(itemValue, itemIndex) => setWeight(itemValue)}
                >
                  {myloop}
                </Picker>
            </View> */}
            <Text style={styles.height}>Height :</Text>
            <TextInput placeholder="Height" style={styles.textInput3}></TextInput>
            {/* <View style={styles.icon3}>
              <Picker
                selectedValue={height}
                style={{ color: "white" }}
                onValueChange={(itemValue, itemIndex) => setHeight(itemValue)}
              >
                {myloop}
              </Picker>
            </View> */}

          </View>

          <View style={styles.bmiBlock}>
            <Text style={styles.bmi}>BMI :</Text>
            <TextInput placeholder="" style={styles.textInput2}></TextInput>
          </View>
          <View style={styles.bpBlock}>
            <Text style={styles.bp}>BP :</Text>
            <TextInput placeholder="" style={styles.textInput5}></TextInput>
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
            <View >
              <DropDownPicker />
            </View>
          </View>
          <View style={styles.bloodreport}>
            <Text style={styles.bloodReport1}>Blood Report :</Text>
            <View style={styles.textInput11Stack}>
              <TextInput
                placeholder=""
                style={styles.textInput11}
              ></TextInput>
              <TextInput
                placeholder=""
                style={styles.textInput12}
              ></TextInput>
            </View>
            <View style={styles.textInput11Stack}>
              <TextInput
                placeholder=""
                style={styles.textInput13}
              ></TextInput>
              <TextInput
                placeholder=""
                style={styles.textInput14}
              ></TextInput>
            </View>
            <View style={styles.textInput11Stack}>
              <TextInput
                placeholder=""
                style={styles.textInput15}
              ></TextInput>
              <TextInput
                placeholder=""
                style={styles.textInput16}
              ></TextInput>

            </View>
            <View style={styles.textInput11Stack}>
              <TextInput
                placeholder=""
                style={styles.textInput17}
              ></TextInput>
              <TextInput
                placeholder=""
                style={styles.textInput18}
              ></TextInput>

            </View>
            <View style={styles.textInput11Stack}>
              <TextInput
                placeholder=""
                style={styles.textInput19}
              ></TextInput>
              <TextInput
                placeholder=""
                style={styles.textInput20}
              ></TextInput>

            </View>
            <View style={styles.textInput11Stack}>
              <TextInput
                placeholder=""
                style={styles.textInput21}
              ></TextInput>
              <TextInput
                placeholder=""
                style={styles.textInput22}
              ></TextInput>

            </View>
            <View style={styles.textInput11Stack}>
              <TextInput
                placeholder=""
                style={styles.textInput23}
              ></TextInput>
              <TextInput
                placeholder=""
                style={styles.textInput24}
              ></TextInput>

            </View>
            <View style={styles.textInput11Stack}>
              <TextInput
                placeholder=""
                style={styles.textInput25}
              ></TextInput>
              <TextInput
                placeholder=""
                style={styles.textInput26}
              ></TextInput>
            </View>
          </View>
          <View style={styles.attachebloodreport}>
            <Text style={styles.loremIpsum}>*</Text>
            <Text style={styles.attachProfilePhoto1}>
              Attach Blood Report :
              </Text>
            <FontAwesomeIcon
              name="cloud-upload"
              style={styles.icon12}
            ></FontAwesomeIcon>
          </View>
          <View style={styles.termandcondition}>
            <MaterialIconsIcon
              name="radio-button-checked"
              style={styles.icon13}
            ></MaterialIconsIcon>
            <Text style={styles.iAgreeTc1}>I Agree T &amp; C</Text>
            <View>
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
              onPress={() => props.navigation.navigate("SadhakasHealthTrackingInfo")}
              style={styles.button72}
            >
              <View style={styles.rect3}>
                <Text style={styles.confirm1}>Confirm</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
      <View style={styles.rect2}>
        <CustomBottomBar {...props} />
        
      </View>
    </View>
  );
}



export default SadhakasHealthTracking;
