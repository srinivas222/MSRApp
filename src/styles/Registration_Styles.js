import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(175,106,37,1)"
    },
    image: {
      width: wp('100%'),
      height: 399,
      marginTop: hp('31.2500%'),
      marginLeft: wp('0.2777%'),
      position: "absolute" 
    },
    image_imageStyle: {
      opacity: 0.2
    },
    react1: {
      top: hp('4.6875%'),
      left: wp('5.5555%'),
      width: wp('89.1666%'),
      height: hp('8.5937%'),
      backgroundColor: "rgba(230, 230, 230,1)",
      position: "absolute",
      borderRadius: 40,
      borderColor: "#000000",
      borderWidth: 0
    },
    regHeading1: {
      width: wp('74.1666%'),
      height: hp('5.4687%'),
      color: "rgba(70,31,0,1)",
      fontSize: 22,
      fontFamily: "roboto-700",
      marginTop: hp('1.5625%'),
      marginLeft: wp('7.50%'),
      textAlign : "center"
    },
    scrollArea: {
      width: wp('100%'),
      // backgroundColor: "#AF6A25",
      overflow: "hidden",
      flex: 1,
      //marginBottom: -2969,
      marginTop: hp('0.7812%'),
      marginLeft: wp('2.7777%'),
      //fontSize : 25
    },
    scrollArea_contentContainerStyle: {
      width: wp('100%'),
      height: hp('195.9375%'),
      flexDirection: "column",
    },
    idBlock : {
      top: hp('16.0625%'),
      flexDirection : "row"
    },
    id: {
      left: wp('4.1666%'),
      width: wp('10.5555%'),
      height: hp('4.2187%'),
      color: "rgba(70,31,0,1)",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    idTextInput: {
      top: hp('-2.7812'),
      left: 15,
      width: wp('35.2777%'),
      height: hp('6.2500%'),
      color: "#121212",
      borderColor: "rgba(250,246,246,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    nameBlock : {
      top: hp('16.4062%'),
      flexDirection : "row"
    },
    name: {
      left: wp('4.1666%'),
      width: wp('17.0555%'),
      height: hp('4.2187%'),
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    nameTextInput: {
      top: hp('-2.7812%'),
      left: wp('4.1666%'),
      width: wp('69.4444%'),
      height: hp('6.2500%'),
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(250,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    addressBlock : {
      top: hp('17.1875%'),
    },
    address: {
      left: wp('4.1666%'),
      width: wp('30.8333%'),
      height: hp('4.2187%'),
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    addressBlock1 : {
        top : hp('1.5625%')
    },
    doorNumber: {
      left: wp('4.1666%'),
      width: wp('55.5555%'),
      height: hp('4.2187%'),
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    doorTextInput: {
      left: wp('4.1666%'),
      width: wp('91.6666%'),
      height: hp('7.81%'),
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(252,246,246,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    street: {
      left: wp('4.1666%'),
      width: wp('55.5555%'),
      height: hp('4.2187%'),
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    streetTextInput: {
      left: wp('4.1666%'),
      width: wp('91.6666%'),
      height: hp('7.81%'),
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(252,246,246,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    city: {
      left: wp('4.1666%'),
      width: wp('55.5555%'),
      height: hp('4.2187%'),
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    cityTextInput: {
      left: wp('4.1666%'),
      width: wp('91.6666%'),
      height: hp('7.81%'),
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(252,246,246,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    district: {
      left: wp('4.1666%'),
      width: wp('55.5555%'),
      height: hp('4.2187%'),
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    districtTextInput: {
      left: wp('4.1666%'),
      width: wp('91.6666%'),
      height: hp('7.81%'),
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(252,246,246,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    state: {
      left: wp('4.1666%'),
      width: wp('55.5555%'),
      height: hp('4.2187%'),
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    stateTextInput: {
      left: wp('4.1666%'),
      width: wp('91.6666%'),
      height: hp('7.81%'),
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(252,246,246,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    pin: {
      left: wp('4.1666%'),
      width: wp('55.5555%'),
      height: hp('4.2187%'),
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    pinTextInput: {
      left: wp('4.1666%'),
      width: wp('91.6666%'),
      height: hp('7.81%'),
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(252,246,246,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    emargencyBlock :{
      top: hp('18.7500%'),
    },
    emergencyContact: {
      left: wp('4.1666%'),
      width: wp('67.50%'),
      height: hp('5.4687%'),
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    textInput69: {
      //top: 10,
      left: wp('4.1666%'),
      width: wp('91.6666%'),
      height: hp('7.8125%'),
      color: "#121212",
     // position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18,
    },
    contactBlock : {
      top: hp('19.5312%'),
    },
    contactNumber: {
      left: wp('4.1666%'),
      width: wp('57.2222%'),
      height: hp('4.6875%'),
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    textInput10: {
     // top: 10,
      left: wp('4.1666%'),
      width: wp('91.6666%'),
      height: hp('7.8125%'),
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18,
    },
    roomBlock :{
      top: hp('20.3125%'),
    },
    roomNumber: {
      left: wp('4.1666%'),
      width: wp('75.2777%'),
      height: hp('4.2187%'),
      color: "rgba(70,31,0,1)",
     // position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    textInput11: {
      //top: 10,
      left: wp('4.1666%'),
      width: wp('91.6666%'),
      height: hp('7.8125%'),
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    icon4: {
      top : hp('-4.6875%'),
      color: "rgba(248,244,244,1)",
      fontSize: 25,
      height: hp('4.6875%'),
      width: wp('8.3333%'),
     // marginTop: 212,
      marginLeft: 318
    },
    passwordBlock : {
      top: hp('21.0937%'),
    },
    password: {
      left: wp('4.1666%'),
      width: wp('35.8333%'),
      height: hp('4.2187%'),
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    textInput: {
      //top: 10,
      left: wp('4.1666%'),
      width: wp('91.6666%'),
      height: hp('7.8125%'),
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    confirmPSWBlock : {
      top: hp('21.0937%'),
    },
    confirmPassword: {
      left: wp('4.1666%'),
      width: wp('63.8888%'),
      height: hp('4.2187%'),
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    textInput12: {
     // top : 15,
      left : wp('4.1666%'),
      width: wp('91.6666%'),
      height: hp('7.8125%'),
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    attachProfilePhotoColumnRow: {
      top : hp('21.8750%'),
      left : wp('4.1666%'),
      //height: 81,
      flexDirection: "row",
      //marginTop: 5,
     // marginLeft: 29,
      //marginRight: 34
    },
    attachProfilePhoto: {
      width: wp('69.4444%'),
      height: hp('4.2187%'),
      color: "rgba(70,31,0,1)",
      fontSize: 18,
      fontFamily: "roboto-700",
      marginLeft: wp('0.83333%')
    },
    icon2: {
      color: "rgba(70,31,0,1)",
      fontSize: 40
    },

    agreeBlock: {
      top : hp('22.6562%'),
      left : wp('4.1666%'),
      height: hp('4.6875%'),
      flexDirection: "row",
      //marginTop: 6,
      //marginRight: 49
    },
    icon3: {
      color: "rgba(70,31,0,1)",
      fontSize: 30
    },
    iAgreeTc: {
      top : hp('-0.7812%'),
      width: wp('42.2222%'),
      height: hp('5.00%'),
      color: "rgba(70,31,0,1)",
      fontSize: 18,
      fontFamily: "roboto-700",
      marginLeft: wp('3.3333%'),
      //marginTop: 8
    },
    backandconfirmBlock: {
      top : hp('24.2187%'),
      left : wp('9.7222%'),
      //height: 49,
      flexDirection: "row",
    },
    button2: {
     // width: 138,
      //height: 49
    },
    rect2: {
      width: wp('36.6666%'),
      height: hp('6.2500%'),
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40
    },
    back: {
      color: "rgba(70,31,0,1)",
      fontSize: 18,
      fontFamily: "roboto-700",
      marginTop: 7,
      alignItems : "center",
      marginLeft: wp('13.5555%')
    },
    button3: {
      width: wp('38.3333%'),
      height: hp('10.6562%'),
      marginLeft: wp('6.1666%')
    },
    rect3: {
      width: wp('36.6666%'),
      height: hp('6.2500%'),
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40
    },
    confirm15: {
      color: "rgba(70,31,0,1)",
      fontSize: 18,
      fontFamily: "roboto-700",
      marginTop: 7,
      alignItems : "center",
      marginLeft: wp('10.6666%')
    },












    textInput13: {
      top: hp('51.7187%'),
      left: wp('8.8888%'),
      width: wp('86.9444%'),
      height: 25,
      color: "#121212",
      position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 5,
      fontFamily: "roboto-regular"
    },
    
    
    textInputStack: {
      top: hp('20.6250%'),
      left: wp('1.3888%'),
      width: wp('81.1111%'),
      height: 27,
      position: "absolute"
    },
    
    
    
    
    
    attachProfilePhotoColumn: {
      width: wp('70.2777%'),
      marginTop: 8
    },
    group: {
      width: wp('12.0000%'),
      height: 43,
      marginLeft: 14
    },
    
    
    
   
    
  });

  export default styles;