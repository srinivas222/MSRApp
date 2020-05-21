import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(175,106,37,1)"
    },
    image7StackStack: {
      width: wp('100%'),
      height: hp('100%'),
      marginTop: 34,
      marginLeft: 1
    },
    image7Stack: {
      top: 188,
      left: 0,
      width: wp('100%'),
      height: hp('72.81%'),
      position: "absolute"
    },
    image7: {
      top: 2,
      left: 0,
      width: wp('100%'),
      height: hp('58.43%'),
      position: "absolute"
    },
    image7_imageStyle: {
      opacity: 0.2
    },
    icon1Stack: {
      top: 0,
      left: 26,
      width: wp('89.16%'),
      height: hp('29.68%'),
      position: "absolute"
    },
    icon1: {
      top: 83,
      left: 220,
      position: "absolute",
      color: "rgba(70,31,0,1)",
      fontSize: 100,
      width: wp('25.27%'),
      height: hp('16.71%')
    },
    group: {
      top: 0,
      left: 0,
      width: wp('89.16%'),
      height: hp('13.59%'),
      //position: "absolute"
    },
    rect2Stack: {
      height: hp('13.59%')
    },
    rect2: {
      top: 0,
      left: 0,
      height: hp('10.15%'),
      backgroundColor: "rgba(230, 230, 230,1)",
      position: "absolute",
      borderRadius: 40,
      borderColor: "#000000",
      borderWidth: 0,
      right: 0
    },
    sadhakasActivity: {
      width: wp('58.88%'),
      height: hp('15.62%'),
      color: "rgba(70,31,0,1)",
      fontSize: 25,
      fontFamily: "roboto-700",
     // marginTop: 15,
     //justifyContent : "center",
      alignSelf : "center",
      //marginLeft: 53
    },
    information: {
      top: 30,
      left: 91,
      width: wp('43.33%'),
      height: hp('6.71%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
    activityNameBlock : {
        top : 105,
        left : 10
    },
    activityName: {
      //top: 105,
      left: 0,
      width: wp('49.44%'),
      height: hp('5.46%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 16,
      fontFamily: "roboto-700"
    },
    textInput1: {
      top: 60,
      left: 0,
      width: wp('86.94%'),
      height: hp('6.71%'),
      color: "#121212",
      position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular"
    },
    icon2: {
      top: 55,
      left: 10,
      width : wp('83.33%'),
      height : hp('6.25%'),
      position: "absolute",
      color: "rgba(248,244,244,1)",
      fontFamily: "roboto-regular",
      fontSize: 40
    },
    timingBlock : {
      top: 220,
      left: 10,
    },
    timings: { 
      width: wp('30.27%'),
      height: hp('5.46%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 16,
      fontFamily: "roboto-700"
    },
    textInput2: {
      top: 30,
      //left: 38,
      width: wp('86.94%'),
      height: hp('6.71%'),
      color: "white",
      position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 16,
    },
    activiPlaceBlock : {
      top : 310,
      left: 10,
    },
    activityPlace: {
      //top: 193,
      
      width: wp('48.33%'),
      height: hp('5.46%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 16,
      fontFamily: "roboto-700"
    },
    textInput3: {
      top: 30,
      //left: 10,
      width: wp('86.94%'),
      height: hp('6.71%'),
      color: "#121212",
      position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular"
    },
    activityPlaceDropDown : {
      top: 30,
      left: 10,
      width : wp('83.33%'),
      height : hp('6.25%'),
      position: "absolute",
      color: "rgba(248,244,244,1)",
      fontFamily: "roboto-regular",
      fontSize: 40
    },
    navigationBlock : {
        top : 400,
        left : 10,
    },
    navigation: {
      width: wp('38.88%'),
      height: hp('5.46%'),
      color: "rgba(70,31,0,1)",
      fontSize: 16,
      fontFamily: "roboto-700",
      //marginTop: 289,
     // marginLeft: 37
    },
    materialMapView1: {
      top: 50,
      //left: 39,
      width: wp('91.66%'),
      height: hp('21.40%'),
      position: "absolute"
    },
    bottomTab : {
      top : 560,
    },


    rect3: {
      width: wp('89.16%'),
      height: hp('12.34%'),
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40,
      borderColor: "#000000",
      borderWidth: 0,
      flexDirection: "row",
      marginTop: 15,
      marginLeft: 27
    },
    button1: {
      width: wp('11.66%'),
      height: hp('6.87%'),
      marginTop: 1
    },
    image2: {
      height: hp('6.87%')
    },
    button2: {
      width: wp('11.66%'),
      height: hp('6.87%'),
      marginLeft: 21
    },
    image3: {
      width: wp('11.66%'),
      flex: 1
    },
    button3: {
      width: wp('11.66%'),
      height: hp('6.87%'),
      marginLeft: 22,
      marginTop: 1
    },
    image4: {
      width: wp('11.11%'),
      height: hp('6.25%')
    },
    button4: {
      width: wp('11.66%'),
      height: hp('6.87%'),
      marginLeft: 23
    },
    image5: {
      flex: 1
    },
    button5: {
      width: wp('11.66%'),
      height: hp('6.87%'),
      marginLeft: 18
    },
    image6: {
      flex: 1
    },
    button1Row: {
      height: hp('7.03%'),
      flexDirection: "row",
      flex: 1,
      marginRight: 15,
      marginLeft: 12,
      marginTop: 15
    }
  });






export default styles;