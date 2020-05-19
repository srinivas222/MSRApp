import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    Text,
    TouchableOpacity
} from "react-native";

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
         justifyContent: 'flex-end',
        //width : 300,
        alignItems: 'center',
        backgroundColor: "rgba(230, 230, 230,1)",
        borderRadius: 40,
        borderColor: "#000000"
    },
    button1: {
        width: 42,
        height: 44,
        marginTop: 1
    },
    image2: {
        width: 40,
        height: 40,
        left : 10,
        top : -2
    },
    button2: {
        width: 42,
        height: 44,
        marginLeft: 18
    },
    image3: {
        width: 40,
        height: 40
    },
    button3: {
        width: 42,
        height: 44,
        marginLeft: 18,
    },
    image4: {
        width: 40,
        height: 40
    },
    button4: {
        width: 42,
        height: 44,
        marginLeft: 18
    },
    image5: {
        width: 40,
        height: 40
    },
    button5: {
        width: 42,
        height: 44,
        marginLeft: 18
    },
    image6: {
        width: 40,
        height: 40
    },
    image7: {
        width: 40,
        height: 40
    },

    button7: {
        width: 42,
        height: 44,
        marginLeft: 18
    },
    button1Row: {
        flexDirection: "row",
        marginRight: 15,
        marginLeft: 12,
        marginTop: 15
    }
});


export default CustomBottomBar;