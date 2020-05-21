import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    Text,
    TouchableOpacity
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CustomBottomBar = (props) => {


    return (

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
                onPress={() => props.navigation.navigate("ProfileScreen")}
                style={styles.button7}
            >
                <Image
                    source={require("../assets/images/profile.png")}
                    resizeMode="contain"
                    style={styles.image7}
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
                    onPress={() => props.navigation.navigate("SadhakasHealthTracking")}
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
    )

}

const styles = StyleSheet.create({
    rect4: {
        flexDirection: "row",
        justifyContent: 'center',
        width: wp('91.666%'),
        //alignItems: 'center',
        backgroundColor: "rgba(230, 230, 230,1)",
        borderRadius: 40,
        borderColor: "#000000",
        marginLeft: wp('4.1666%')
    },
    button1: {
        width: wp('12.666%'),
        height: hp('8.875%'),
      //  marginTop: hp('0.000015625%'),
        marginLeft: wp('0.0%')
    },
    image2: {
        width: wp('9.111%'),
        height: hp('9.111%'),
        left: wp('0.0%'),
        marginBottom: hp('7.0%')
    },
    button2: {
        width: wp('12.666%'),
        height: hp('8.875%'),
      //  marginTop: hp('0.000015625%'),
        marginLeft: wp('0.0%')
    },
    image3: {
        width: wp('10.111%'),
        height: hp('10.111%'),
        left: wp('0.5%'),
        marginBottom: hp('7.0%')
    },
    button3: {
        width: wp('12.666%'),
        height: hp('8.875%'),
      //  marginTop: hp('0.000015625%'),
        marginLeft: wp('0.0%')
    },
    image4: {
        width: wp('10.111%'),
        height: hp('10.111%'),
       left: wp('2.0%'),
        marginBottom: hp('7.0%')
    },
    button4: {
        width: wp('12.666%'),
        height: hp('8.875%'),
      //  marginTop: hp('0.000015625%'),
        marginLeft: wp('0.0%')
    },
    image5: {
        width: wp('10.111%'),
        height: hp('10.111%'),
        left: wp('5.5%'),
        marginBottom: hp('7.0%')
    },
    button5: {
        width: wp('12.666%'),
        height: hp('8.875%'),
      //  marginTop: hp('0.000015625%'),
        marginLeft: wp('0.0%')
    },
    image6: {
        width: wp('9.111%'),
        height: hp('9.111%'),
        left: wp('7.5%'),
        marginBottom: hp('7.0%')
    },
    image7: {
        width: wp('10.111%'),
        height: hp('10.111%'),
        left: wp('-0.5%'),
        marginBottom: hp('7.0%')
    },

    button7: {
        width: wp('12.666%'),
        height: hp('8.875%'),
      //  marginTop: hp('0.000015625%'),
        marginLeft: wp('0.0%')
    },
    button1Row: {
        flexDirection: "row",
        marginRight: wp('4.1666%'),
        /* marginLeft: wp('3.333%'),
        marginTop: hp('2.34375%') */
    }
});


export default CustomBottomBar;