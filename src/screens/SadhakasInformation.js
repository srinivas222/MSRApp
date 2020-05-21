import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView
} from "react-native";
import styles from "../styles/SadhakasInformation_Styles";
import CustomBottomBar from "../components/customBottomBar";

function SadhakasInformation(props) {
    return (
        <View style={styles.container}>
            <View style={styles.imageStack}>
                <ImageBackground
                    source={require("../assets/images/logo5.png")}
                    resizeMode="contain"
                    style={styles.image}
                    imageStyle={styles.image_imageStyle}
                >
                </ImageBackground>
            </View>
            
            <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}>
          <View style={styles.scrollArea}>
            <View style={styles.idblock}>
                    <Text style={styles.id1}>ID :</Text>
                    <TextInput
                        placeholder="MSRSDK0001"
                        placeholderTextColor="rgba(70,31,0,1)"
                        style={styles.textInput8}
                    ></TextInput>
            </View>
            <View style={styles.nameblock}>
                <View style={styles.name1Row}>
                    <Text style={styles.name1}>Name :</Text>
                    <TextInput placeholder="ABCDEFGHIJK" style={styles.textInput7}></TextInput>
                </View>
            </View>
            <View style={styles.addressBlock}>
              <Text style={styles.address}>Address :</Text>
              <View style = {styles.addressBlock1}>
              <View>
                <Text style={styles.doorNumber}>Door Number :</Text>
                <TextInput placeholder="Flat No:123" style={styles.doorTextInput}></TextInput>
              </View>
              <View>
                <Text style={styles.street}>Street/Location :</Text>
                <TextInput placeholder="A1 Residency,Main Road" style={styles.streetTextInput}></TextInput>
              </View>
              <View>
                <Text style={styles.city}>City/Town :</Text>
                <TextInput placeholder="Guntur" style={styles.cityTextInput}></TextInput>
              </View>
              <View>
                <Text style={styles.district}>District :</Text>
                <TextInput placeholder="Guntur" style={styles.districtTextInput}></TextInput>
              </View>
              <View>
                <Text style={styles.state}>State :</Text>
                <TextInput placeholder="Andhrapradesh" style={styles.stateTextInput}></TextInput>
              </View>
              <View>
                <Text style={styles.pin}>Pin Code :</Text>
                <TextInput placeholder="522616" style={styles.pinTextInput}></TextInput>
              </View>
              </View>

            </View>
            <View style={styles.emergencycontactblock}>
                <Text style={styles.emergencyContact1}>Emergency Contact :</Text>
                <TextInput
                    placeholder="9874563210"
                    style={styles.textInput5}
                ></TextInput>
            </View>
            <View style={styles.contactnumberblock}>
                <Text style={styles.contactNumber2}>Contact Number :</Text>
                <TextInput placeholder="9874563210" style={styles.textInput4}></TextInput>
            </View>

            <View style={styles.roomdeatilsblock}>
                <Text style={styles.roomnumber}>Room Number / Block :</Text>
                <TextInput placeholder="413/1" style={styles.textInput3}></TextInput>
            </View>
            <View style={styles.weightblockRow}>
                <View style={styles.weightblock}>
                    <Text style={styles.weight}>Weight</Text>
                    <TextInput placeholder="85" style={styles.textInput10}></TextInput>
                </View>
                <View style={styles.heightblock}>
                    <Text style={styles.height}>Height</Text>
                    <TextInput placeholder="182" style={styles.textInput11}></TextInput>
                </View>
            </View>
            
            </View>
        </ScrollView>
        <View style={styles.header}>
                <View style={styles.rect}>
                    <Text style={styles.loremIpsum}>Sadhaka&#39;s Information</Text>
                </View>
            </View>
            <View >
                <CustomBottomBar {...props}/>
            </View>
        </View>
    );
}



export default SadhakasInformation;