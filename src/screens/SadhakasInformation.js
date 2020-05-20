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
            <View style={styles.header}>
                <View style={styles.rect}>
                    <Text style={styles.loremIpsum}>Sadhaka&#39;s Information</Text>
                </View>
            </View>
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
            <View style={styles.addressblock}>
                <Text style={styles.address1}>Address :</Text>
                <TextInput placeholder="Flat No:123,A1 Residency,Main Road,Guntur,Andhrapradesh" style={styles.textInput6}></TextInput>
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
            <View style = {styles.bottomTab}>
                <CustomBottomBar {...props}/>
            </View>
            {/* <View style={styles.bottomTab}>
                <View style={styles.rect1}>
                    <View style={styles.button5Row}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Homepage")}
                            style={styles.button5}
                        >
                            <Image
                                source={require("../assets/images/home.png")}
                                resizeMode="contain"
                                style={styles.image5}
                            ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Activityinfomation")}
                            style={styles.button4}
                        >
                            <Image
                                source={require("../assets/images/activity.png")}
                                resizeMode="contain"
                                style={styles.image4}
                            ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("TreatmentInfo")}
                            style={styles.button3}
                        >
                            <Image
                                source={require("../assets/images/treatment.png")}
                                resizeMode="contain"
                                style={styles.image3}
                            ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Dietmenu")}
                            style={styles.button2}
                        >
                            <Image
                                source={require("../assets/images/dietmenu.png")}
                                resizeMode="contain"
                                style={styles.image2}
                            ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("HealthTracking")}
                            style={styles.button1}
                        >
                            <Image
                                source={require("../assets/images/healthtracking.png")}
                                resizeMode="contain"
                                style={styles.image1}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> */}
        </View>
    );
}



export default SadhakasInformation;