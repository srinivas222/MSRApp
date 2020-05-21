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
      marginLeft: 20,
      //fontSize : 25
    },
    scrollArea_contentContainerStyle: {
      width: wp('100%'),
      height: 1100,
      flexDirection: "column",
  
    },
    group: {
      //width: 300,
      //height: 79,
      marginTop: -630,
      marginLeft: 20
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
      marginTop: 15,
      //marginLeft: 2,
      textAlign: "center"
    },
    date1: {
      top: 10,
     // left: 10,
      width: wp('18.8%'),
      height: hp('4.21%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 20,
      fontFamily: "roboto-700"
    },
    icon1: {
      top: -10,
      left: 50,
    },
    textInput1: {
      top: 0,
      left: 80,
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
      top: 0,
      flexDirection : "row",
      
    },
    weight: { 
      //left: 10,
      width: wp('25%'),
      height: hp('5.00%'),
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 20,
      fontFamily: "roboto-700"
    },
    textInput4: {
      top: -10,
      left: 85,
      width: wp('23.6%'),
      height: hp('6.25%'),
      color: "#121212",
      position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize: 20,
    },
    icon2: {
      top: -10,
      left: -170,
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
      left: 190,
      width: wp('22.2%'),
      height: hp('5.00%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 20,
      fontFamily: "roboto-700"
    },
    textInput3: {
      top: -10,
      left: 265,
      width: wp('23.61%'),
      height: hp('6.25%'),
      color: "#121212",
      position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize: 20,
    },
    icon3: {
      top: -10,
      left: 255,
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
      top: -10,
      left: 240,
      position: "absolute",
      color: "rgba(70,31,0,1)",
      fontSize: 60,
      width: wp('15.27%'),
      height: hp('10.00%')
    },
    
    bmiBlock : {
      top: 30,
    },
    bmi: {
      
      //left: 10,
      width: wp('16.94%'),
      height: hp('4.21%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 20,
      fontFamily: "roboto-700"
    },
    textInput2: {
      top: -10,
      left: 60,
      width: wp('72.22%'),
      height: hp('6.25%'),
      color: "#121212",
      position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize: 20,
    },
    bpBlock : {
      top: 90,
      flexDirection : "row",
    },
    bp: {
      //left: 10,
      width: wp('16.94%'),
      height: hp('4.21%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 20,
      fontFamily: "roboto-700"
    },
    textInput5: {
      top: -15,
      left: 58,
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
      top: -15,
      left: 60,
      position: "absolute",
      //color: "rgba(248,244,244,1)",
      
      width: wp('25.0%'),
      height: hp('6.71%'),
      transform: [
        { scaleX: 1.5 }, 
        { scaleY: 1.5 },
     ]
    },
    textInput6: {
      top: -15,
      left: 200,
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
      top: -15,
      left: 210,
      position: "absolute",
      color: "rgba(248,244,244,1)",
      fontSize: 40,
      width: wp('25.0%'),
      height: hp('5.00%%'),
      transform: [
        { scaleX: 1.5 }, 
        { scaleY: 1.5 },
     ]
    },
    bloodTest : {
      top: 140,
    },
    bloodTestInput: {
      //left: 10,
      width: wp('59.44%'),
      height: hp('4.21%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 20,
      fontFamily: "roboto-700"
    },
    
    bloodreport : {
      top: 350,
    },
    bloodReport1: {
      //top: 270,
      //left: 10,
      width: wp('59.44%'),
      height: hp('5.46%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 20,
      fontFamily: "roboto-700"
    },
    textInput11Stack: {
      top :30,
      flexDirection: "row",
      height: hp('6.25%'),
      //flex : 1
    },
    textInput11: { 
      //left: 10,
      width: wp('39.16%'),
      color: "#121212",
     // position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
    },
    textInput12: {
      left: 50,
      width: wp('39.16%'),
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
    },
    textInput13: {
     // top: 330,
      //left: 10,
      width: wp('39.16%'),
      
      color: "#121212",
     // position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
    },
    textInput14: {
      //top: 330,
      left: 50,
      width: wp('39.16%'),
     
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
  
    },
    textInput15: {
      //top: 360,
      //left: 10,
      width: wp('39.16%'),
      
      color: "#121212",
     // position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
    },
    textInput16: {
      //top: 360,
      left: 50,
      width: wp('39.16%'),
      
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
    },
    textInput17: {
     // top: 390,
      //left: 10,
      width: wp('39.16%'),
     
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
    },
    textInput18: {
      //top: 390,
      left: 50,
      width: wp('39.16%'),
     
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
  
    },
    textInput19: {
     // top: 420,
      //left: 10,
      width: wp('39.16%'),
     
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
    },
    textInput20: {
      //top: 420,
      left: 50,
      width: wp('39.16%'),
      
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
  
    },
    textInput21: {
     // top: 450,
      //left: 10,
      width: wp('39.16%'),
      
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
    },
    textInput22: {
     // top: 450,
      left: 50,
      width: wp('39.16%'),
      
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
  
    },
    textInput23: {
      //top: 480,
      //left: 10,
      width: wp('39.16%'),
      
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
    },
    textInput24: {
     // top: 480,
      left: 50,
      width: wp('39.16%'),
      
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
  
    },
    textInput25: {
      //top: 510,
     // left: 10,
      width: wp('39.16%'),
     
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
    },
    textInput26: {
     // top: 510,
      left: 50,
      width: wp('39.16%'),
     
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
  
    },
    attachebloodreport :{
      //top: -1890,
      top : 410,
      //flex : 1
    },
    attachProfilePhoto1: {
     // top: 200,
      left: 22,
      width: wp('69.44%'),
      height: hp('4.21%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 20,
      fontFamily: "roboto-700"
    },
    icon12: {
      
      left: 285,
      position: "absolute",
      color: "rgba(70,31,0,1)",
      fontSize: 40,
      width: wp('12.50%'),
      height: hp('6.71%')
    },
    loremIpsum: {
      //left: 10,
      width: wp('3.05%'),
      height: hp('4.21%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 20,
      fontFamily: "roboto-regular"
    },
    termandcondition : {
      top: 470,
      //flex : 1
    },
    icon13: {
      //left: 20,
      position: "absolute",
      color: "rgba(70,31,0,1)",
      fontSize: 40,
      width: wp('11.66%'),
      height: hp('6.71%')
    },
    iAgreeTc1: {
      //top: 570,
      left: 70,
      width: wp('42.22%'),
      height: hp('5.46%'),
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 20,
      fontFamily: "roboto-700"
    },
    button6Row: {
     top: 530,
      marginLeft: 10,
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
      fontSize: 20,
      fontFamily: "roboto-700",
      textAlign : "center",
      marginTop: 5,
      //marginLeft: 35
    },
    button7: {
      width: wp('38.33%'),
      height: hp('7.65%'),
     // marginLeft: 14
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
      left : 30
    },
    confirm1: {
      color: "rgba(70,31,0,1)",
      fontSize: 20,
      fontFamily: "roboto-700",
      textAlign : "center",
      marginTop: 5,
     // marginLeft: 25
    },
    
    image7Stack: {
      width: wp('100%'),
      height: hp('60.00%'),
      marginTop: 230,
      marginLeft: 1
    },
    image7: {
      top: 0,
      left: 0,
      width: wp('100%'),
      height: hp('60.00%'),
      position: "absolute"
    },
    image7_imageStyle: {
      opacity: 0.2
    },
    rect2: {
      top: 620,
      position: "absolute",
    },
    // button123Row: {
    //   height: 45,
    //   flexDirection: "row",
    //   flex: 1,
    //   marginRight: 15,
    //   marginLeft: 15,
    //   marginTop: 10
    // },
    // button123: {
    //   width: 42,
    //   height: 44,
    //   marginTop: 1
    // },
    // image2: {
    //   width: 40,
    //   height: 40,
    //   flex: 1
    // },
    // button124: {
    //   width: 42,
    //   height: 44,
    //   marginLeft: 21
    // },
    // image3: {
    //   width: 40,
    //   height: 40,
    //   flex: 1
    // },
    // button125: {
    //   width: 42,
    //   height: 44,
    //   marginLeft: 22,
    //   marginTop: 1
    // },
    // image4: {
    //   width: 40,
    //   height: 40,
    //   flex: 1
    // },
    // button126: {
    //   width: 42,
    //   height: 44,
    //   marginLeft: 23
    // },
    // image5: {
    //   width: 40,
    //   height: 40,
    //   flex: 1
    // },
    // button127: {
    //   width: 42,
    //   height: 44,
    //   marginLeft: 18
    // },
    // image6: {
    //   width: 40,
    //   height: 40,
    //   flex: 1
    // },
    
    // image8Stack: {
    //   height: 80,
    //   marginTop: 10,
    //   marginLeft: 100
  
    // },
    // image8: {
    //   top: 7,
    //   left: 0,
    //   height: 73,
    //   position: "absolute",
    //   right: 0
    // },
  
  });


  export default styles;