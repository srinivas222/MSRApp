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
      width: 360,
      // backgroundColor: "#AF6A25",
      overflow: "hidden",
      flex: 1,
      //marginBottom: -2969,
      marginTop: 5,
      marginLeft: 20,
      //fontSize : 25
    },
    scrollArea_contentContainerStyle: {
      width: 360,
      height: 5000,
      flexDirection: "column",
  
    },
    group: {
      //width: 300,
      //height: 79,
      marginTop: -579,
      marginLeft: 15
    },
    rect1: {
      width: 330,
      height: 65,
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40,
      borderColor: "#000000",
      borderWidth: 0
    },
    sadhakas1: {
      color: "rgba(70,31,0,1)",
      fontSize: 25,
      fontFamily: "roboto-700",
      marginTop: 10,
      //marginLeft: 2,
      textAlign: "center"
    },
    date1: {
      top: 10,
     // left: 10,
      width: 68,
      height: 27,
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
    icon1: {
      top: -10,
      left: 50,
      position: "absolute",
      color: "rgba(248,244,244,1)",
      fontSize: 40,
      width: 21,
      height: 35
    },
    textInput1: {
      top: 0,
      left: 80,
      width: 135,
      height: 37,
      color: "#121212",
      position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular"
    },
    weightBlock : {
      top: 60,
      
    },
    weight: {
      
      //left: 10,
      width: 90,
      height: 32,
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
    textInput4: {
      top: -10,
      left: -170,
      width: 73,
      height: 43,
      color: "#121212",
      position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular"
    },
    icon2: {
      top: -10,
      left: -170,
      position: "absolute",
      color: "rgba(248,244,244,1)",
      fontSize: 40,
      width: 70,
      height: 43,
      transform: [
        { scaleX: 1.5 }, 
        { scaleY: 1.5 },
     ]
    },
    heightBlock :{
      top: 60,
    },
    height: {
      //top: 60,
      left: 170,
      width: 80,
      height: 32,
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
    textInput3: {
      top: -10,
      left: 255,
      width: 73,
      height: 43,
      color: "#121212",
      position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular"
    },
    icon3: {
      top: -10,
      left: 255,
      position: "absolute",
      color: "rgba(248,244,244,1)",
      fontSize: 40,
      width: 70,
      height: 43,
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
      width: 55,
      height: 64
    },
    
    textInput4Stack: {
      top: 0,
      left: 260,
      width: 73,
      height: 96,
      position: "absolute"
    },
    bmiBlock : {
      top: 110,
    },
    bmi: {
      
      //left: 10,
      width: 61,
      height: 27,
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
    textInput2: {
      top: -10,
      left: 60,
      width: 260,
      height: 40,
      color: "#121212",
      position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize: 20,
    },
    bpBlock : {
      top: 160,
      flexDirection : "row",
    },
    bp: {
      //left: 10,
      width: 61,
      height: 27,
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
    textInput5: {
      top: -15,
      left: 58,
      width: 100,
      height: 44,
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
      
      width: 90,
      height: 43,
      transform: [
        { scaleX: 1.5 }, 
        { scaleY: 1.5 },
     ]
    },
    textInput6: {
      top: -15,
      left: 180,
      width: 100,
      height: 43,
      color: "#121212",
      position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular"
    },
  
    icon5: {
      top: -15,
      left: 180,
      position: "absolute",
      color: "rgba(248,244,244,1)",
      fontSize: 40,
      width: 90,
      height: 32,
      transform: [
        { scaleX: 1.5 }, 
        { scaleY: 1.5 },
     ]
    },
    bloodTest : {
      top: 210,
    },
    bloodTestInput: {
      //left: 10,
      width: 214,
      height: 27,
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
    
    bloodreport : {
      top: 410,
    },
    bloodReport1: {
      //top: 270,
      //left: 10,
      width: 214,
      height: 30,
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
    textInput11Stack: {
      top :30,
      flexDirection: "row",
      height: 40,
      //flex : 1
    },
    textInput11: { 
      //left: 10,
      width: 141,
      color: "#121212",
     // position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 25
    },
    textInput12: {
      left: 50,
      width: 141,
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
  
    },
    textInput13: {
     // top: 330,
      //left: 10,
      width: 141,
      
      color: "#121212",
     // position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular"
    },
    textInput14: {
      //top: 330,
      left: 50,
      width: 141,
     
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
  
    },
    textInput15: {
      //top: 360,
      //left: 10,
      width: 141,
      
      color: "#121212",
     // position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular"
    },
    textInput16: {
      //top: 360,
      left: 50,
      width: 141,
      
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
  
    },
    textInput17: {
     // top: 390,
      //left: 10,
      width: 141,
     
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular"
    },
    textInput18: {
      //top: 390,
      left: 50,
      width: 141,
     
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
  
    },
    textInput19: {
     // top: 420,
      //left: 10,
      width: 141,
     
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular"
    },
    textInput20: {
      //top: 420,
      left: 50,
      width: 141,
      
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
  
    },
    textInput21: {
     // top: 450,
      //left: 10,
      width: 141,
      
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular"
    },
    textInput22: {
     // top: 450,
      left: 50,
      width: 141,
      
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
  
    },
    textInput23: {
      //top: 480,
      //left: 10,
      width: 141,
      
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular"
    },
    textInput24: {
     // top: 480,
      left: 50,
      width: 141,
      
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
  
    },
    textInput25: {
      //top: 510,
     // left: 10,
      width: 141,
     
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular"
    },
    textInput26: {
     // top: 510,
      left: 50,
      width: 141,
     
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
  
    },
    attachebloodreport :{
      //top: -1890,
      top : 460,
      //flex : 1
    },
    attachProfilePhoto1: {
     // top: 200,
      left: 22,
      width: 250,
      height: 27,
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
    icon12: {
      
      left: 285,
      position: "absolute",
      color: "rgba(70,31,0,1)",
      fontSize: 40,
      width: 45,
      height: 43
    },
    loremIpsum: {
      //left: 10,
      width: 11,
      height: 27,
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 25,
      fontFamily: "roboto-regular"
    },
    termandcondition : {
      top: 500,
      //flex : 1
    },
    icon13: {
      //left: 20,
      position: "absolute",
      color: "rgba(70,31,0,1)",
      fontSize: 40,
      width: 42,
      height: 43
    },
    iAgreeTc1: {
      //top: 570,
      left: 70,
      width: 152,
      height: 27,
      color: "rgba(70,31,0,1)",
      position: "absolute",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
    button6Row: {
     top: 550,
      marginLeft: 10,
      height: 49,
      flexDirection: "row",
    },
    button6: {
      width: 138,
      height: 49
    },
    rect4: {
      width: 132,
      height: 46,
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40
    },
    back7: {
      color: "rgba(70,31,0,1)",
      fontSize: 25,
      fontFamily: "roboto-700",
      textAlign : "center",
      marginTop: 5,
      //marginLeft: 35
    },
    button7: {
      width: 138,
      height: 49,
     // marginLeft: 14
    },
    button72: {
      width: 132,
      height: 46
    },
    rect3: {
      width: 132,
      height: 46,
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40,
      left : 30
    },
    confirm1: {
      color: "rgba(70,31,0,1)",
      fontSize: 25,
      fontFamily: "roboto-700",
      textAlign : "center",
      marginTop: 5,
     // marginLeft: 25
    },
    
    image7Stack: {
      width: 644,
      height: 384,
      marginTop: 230,
      marginLeft: 1
    },
    image7: {
      top: 0,
      left: 0,
      width: 365,
      height: 384,
      position: "absolute"
    },
    image7_imageStyle: {
      opacity: 0.2
    },
    rect2: {
      top: 620,
      left: 20,
      width: 330,
      height: 60,
      backgroundColor: "rgba(230, 230, 230,1)",
      position: "absolute",
      borderRadius: 40,
      borderColor: "#000000",
      borderWidth: 0,
      flexDirection: "row"
    },
    button123Row: {
      height: 45,
      flexDirection: "row",
      flex: 1,
      marginRight: 15,
      marginLeft: 15,
      marginTop: 10
    },
    button123: {
      width: 42,
      height: 44,
      marginTop: 1
    },
    image2: {
      width: 40,
      height: 40,
      flex: 1
    },
    button124: {
      width: 42,
      height: 44,
      marginLeft: 21
    },
    image3: {
      width: 40,
      height: 40,
      flex: 1
    },
    button125: {
      width: 42,
      height: 44,
      marginLeft: 22,
      marginTop: 1
    },
    image4: {
      width: 40,
      height: 40,
      flex: 1
    },
    button126: {
      width: 42,
      height: 44,
      marginLeft: 23
    },
    image5: {
      width: 40,
      height: 40,
      flex: 1
    },
    button127: {
      width: 42,
      height: 44,
      marginLeft: 18
    },
    image6: {
      width: 40,
      height: 40,
      flex: 1
    },
    
    image8Stack: {
      height: 80,
      marginTop: 10,
      marginLeft: 100
  
    },
    image8: {
      top: 7,
      left: 0,
      height: 73,
      position: "absolute",
      right: 0
    },
  
  });


  export default styles;