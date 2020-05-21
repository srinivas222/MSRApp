//original


import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#AF6A25"
  //backgroundColor: "white"
    },
    scrollArea: {
      width: wp('100%'), 
      // backgroundColor: "#AF6A25",
      overflow: "hidden",
      flex: 1,
      //marginBottom: -2969,
      marginTop: 5,
      marginLeft: wp('5.5555%'),
      //fontSize : 25
    },
    scrollArea_contentContainerStyle: {
      width: wp('100%'),
      height: hp('161.8750%'),
      flexDirection: "column",
  
    },
    group: {
      marginTop: hp('-90.4375%'),
      marginLeft: wp('5.5555%')
    },
    rect1: {
      width: wp('91.6%'),
      height: hp('10.15%'),
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40,
      borderColor: "#000000",
      borderWidth: 0
    },
    sadhakas1: {
      color: "rgba(70,31,0,1)",
      fontSize: 20,
      fontFamily: "roboto-700",
      marginTop: hp('2.3437%'),
      //marginLeft: 2,
      textAlign: "center"
    },
    date1: {
      top: hp('1.5625%'),
     // left: 10,
      width: wp('18.8%'),
      height: hp('4.21%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    icon1: {
      top: hp('-1.5625%'),
      left: wp('13.8888%'),
    },
    textInput1: {
      top: hp('0.0%'),
      left: wp('22.2222%'),
      width: wp('37.5%'),
      height: hp('5.78%'),
      color: "#121212",
      position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular"
    },
    weightBlock : {
      top: hp('0.0%'),
      flexDirection : "row",
      
    },
    weight: { 
      //left: 10,
      width: wp('25%'),
      height: hp('5.00%'),
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    textInput4: {
      top: hp('-2.0625%'),
      left: wp('18.6111%'),
      width: wp('23.6%'),
      height: hp('6.25%'),
      color: "#121212",
      position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize: 18,
    },
    icon2: {
      top: hp('-1.5625%'),
      left: -wp('47.2222%'),
      position: "absolute",
      color: "rgba(248,244,244,1)",
      fontSize: 40,
      width: wp('19.4%'),
      height: hp('6.71%'),
      transform: [
        { scaleX: 1.5 }, 
        { scaleY: 1.5 },
     ]
    },
    heightBlock :{
      //top: 60,
    },
    height: {
      //top: 60,
      left: wp('45.7777%'),
      width: wp('22.2%'),
      height: hp('5.00%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    textInput3: {
      top: hp('-2.0625%'),
      left: wp('62.61111%'),
      width: wp('23.61%'),
      height: hp('6.25%'),
      color: "#121212",
      position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize: 18,
    },
    icon3: {
      top: hp('-1.5625%'),
      left: wp('70.83333%'),
      position: "absolute",
      color: "rgba(248,244,244,1)",
      fontSize: 40,
      width: wp('19.44%'),
      height: hp('6.71%'),
      transform: [
        { scaleX: 1.5 }, 
        { scaleY: 1.5 },
     ]
    },
    icon6: {
      top: hp('-1.5625%'),
      left: wp('66.6666%'),
      position: "absolute",
      color: "rgba(70,31,0,1)",
      fontSize: 60,
      width: wp('15.27%'),
      height: hp('10.00%')
    },
    
    bmiBlock : {
      top: hp('4.6875%'),
    },
    bmi: {
      width: wp('16.94%'),
      height: hp('4.21%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    textInput2: {
      top: hp('-2.0625%'),
      left: wp('13.6666%'),
      width: wp('72.22%'),
      height: hp('6.25%'),
      color: "#121212",
      position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize: 18,
    },
    bpBlock : {
      top: hp('14.0625%'),
      flexDirection : "row",
    },
    bp: {
      //left: 10,
      width: wp('16.94%'),
      height: hp('4.21%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    textInput5: {
      top: hp('-2.0437%'),
      left: wp('13.1111%'),
      width: wp('27.77%'),
      height: hp('6.87%'),
      color: "#121212",
      position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular"
    },
    icon4: {
      flex : 1,
      top: hp('-2.3437%'),
      left: wp('13.6666%'),
      position: "absolute",
      //color: "rgba(248,244,244,1)",
      
      width: wp('25.0%'),
      height: hp('6.71%'),
      transform: [
        { scaleX: 1.0 }, 
        { scaleY: 1.0 },
     ]
    },
    textInput6: {
      top: hp('-2.3437%'),
      left: wp('51.5555%'),
      width: wp('27.77%'),
      height: hp('6.71%'),
      color: "#121212",
      position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular"
    },
  
    icon5: {
      top: hp('-2.0437%'),
      left: wp('51.3333%'),
      position: "absolute",
      color: "rgba(248,244,244,1)",
      fontSize: 40,
      width: wp('25.0%'),
      height: hp('5.00%%'),
      transform: [
        { scaleX: 1.0 }, 
        { scaleY: 1.0 },
     ]
    },
    bloodTest : {
      top: hp('21.8750%'),
    },
    bloodTestInput: {
      width: wp('59.44%'),
      height: hp('4.21%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    bloodreport : {
      top: hp('54.6875%'),
    },
    bloodReport1: {
      width: wp('59.44%'),
      height: hp('5.46%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    textInput11Stack: {
      top :hp('4.6875%'),
      flexDirection: "row",
      height: hp('6.25%'),
    },
    textInput11: { 
      width: wp('39.16%'),
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    textInput12: {
      left: wp('13.8888%'),
      width: wp('39.16%'),
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    textInput13: {
      width: wp('39.16%'),
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    textInput14: {
      left: wp('13.8888%'),
      width: wp('39.16%'),
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
  
    },
    textInput15: {
      width: wp('39.16%'),
      color: "#121212",
     // position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    textInput16: {
      //top: 360,
      left: wp('13.8888%'),
      width: wp('39.16%'),
      
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    textInput17: {
      width: wp('39.16%'),
     
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    textInput18: {
      //top: 390,
      left: wp('13.8888%'),
      width: wp('39.16%'),
     
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
  
    },
    textInput19: {
      width: wp('39.16%'),
     
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    textInput20: {
      //top: 420,
      left: wp('13.8888%'),
      width: wp('39.16%'),
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
  
    },
    textInput21: {
      width: wp('39.16%'),
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    textInput22: {
      left: wp('13.8888%'),
      width: wp('39.16%'),
      
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
  
    },
    textInput23: {
      width: wp('39.16%'),
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    textInput24: {
     // top: 480,
      left: wp('13.8888%'),
      width: wp('39.16%'),
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
  
    },
    textInput25: {
      width: wp('39.16%'),
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
    },
    textInput26: {
     // top: 510,
      left: wp('13.8888%'),
      width: wp('39.16%'),
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 18
  
    },
    attachebloodreport :{
      top : hp('62.0625%'),
    },
    attachProfilePhoto1: {
      left: wp('6.1111%'),
      width: wp('69.44%'),
      height: hp('4.21%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    icon12: {
      
      left: wp('79.1666%'),
      position: "absolute",
      color: "rgba(70,31,0,1)",
      fontSize: 40,
      width: wp('12.50%'),
      height: hp('6.71%')
    },
    loremIpsum: {
      width: wp('3.05%'),
      height: hp('4.21%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-regular"
    },
    termandcondition : {
      top: hp('68.4375%'),
      left : wp('20.0%')
     
    },
    icon13: {
      top : hp('-0.3812%'),
      left : 10,
      position: "absolute",
      color: "rgba(70,31,0,1)",
      fontSize: 30,
      width: wp('11.66%'),
      height: hp('6.71%')
    },
    iAgreeTc1: {
      left: wp('14.4444%'),
      width: wp('42.22%'),
      height: hp('5.46%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    button6Row: {
     top: hp('74.8125%'),
      marginLeft: wp('2.7777%'),
      height: hp('7.65%'),
      flexDirection: "row",
    },
    button6: {
      width: wp('38.33%'),
      height: hp('7.65%')
    },
    rect4: {
      width: wp('36.66%'),
      height: hp('7.18%'),
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40
    },
    back7: {
      color: "rgba(70,31,0,1)",
      fontSize: 18,
      fontFamily: "roboto-700",
      textAlign : "center",
      marginTop: hp('1.2500%'),
    },
    button7: {
      width: wp('38.33%'),
      height: hp('7.65%'),
    },
    button72: {
      width: wp('36.66%'),
      height: hp('7.18%')
    },
    rect3: {
      width: wp('36.66%'),
      height: hp('7.18%'),
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40,
      left : wp('8.3333%')
    },
    confirm1: {
      color: "rgba(70,31,0,1)",
      fontSize: 18,
      fontFamily: "roboto-700",
      textAlign : "center",
      marginTop: hp('1.2500%'),
    },
    
    image7Stack: {
      width: wp('100%'),
      height: hp('60.00%'),
      marginTop: hp('35.9375%'),
      marginLeft: wp('0.27777%')
    },
    image7: {
      top: hp('0.0%'),
      left: wp('0.0%'),
      width: wp('100%'),
      height: hp('60.00%'),
      position: "absolute"
    },
    image7_imageStyle: {
      opacity: 0.2
    },
    rect2: {
      top: hp('89.8750%'),
      position: "absolute",
    },
    
  
  });


  export default styles;