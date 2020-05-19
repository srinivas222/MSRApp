import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(175,106,37,1)"
    },
    image7StackStack: {
      width: 365,
      height: 100,
      marginTop: 34,
      marginLeft: 1
    },
    image7Stack: {
      top: 188,
      left: 0,
      width: 100,
      height: 466,
      position: "absolute"
    },
    image7: {
      top: 2,
      left: 0,
      width: 365,
      height: 374,
      position: "absolute"
    },
    image7_imageStyle: {
      opacity: 0.2
    },
    rect1: {
      top: 10,
      left: 20,
      width: 320,
      height: 72,
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40,
      borderColor: "#000000",
      borderWidth: 0
    },
    feedback2: {
      color: "rgba(70,31,0,1)",
      fontSize: 25,
      fontFamily: "roboto-700",
      textAlign : "center",
      top: 15,
      
    },
    sadhakasIdBlock : {
      marginTop: 30,
      marginLeft: 20
    },
    sadhakasId: {
      width: 162,
      height: 30,
      color: "rgba(70,31,0,1)",
      fontSize: 25,
      fontFamily: "roboto-700", 
    },
    textInput4: {
      top: 10,
      //left: 10,
      width: 310,
      height: 30,
      color: "#121212",
      borderColor: "rgba(250,247,247,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize: 25,
      
    },
    feedbackblock: {
      top: 30,
      left: 20,
  },
  feedback1: {
    width: 127,
    height: 27,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    //marginTop: 152,
    //marginLeft: 35
  },
  textInput1Column: {
    top: 30,
    //left: 10,
     // width: 321,
     // height: 471,
  },
  textInput1: {
    width: 305,
    height: 200,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "rgba(70,31,0,1)",
    opacity: 0.8,
    borderRadius: 60,
    fontSize: 25,
    fontFamily: "roboto-regular",
    marginLeft: 12
  }, 
  iAgreeTc1Stack: {
    top: 90,
    left: 20,
    },
    iAgreeTc1: {
     // top: 22,
      left: 50,
      width: 152,
      height: 35,
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
  materialCheckbox1: {
      //top: 0,
     // left: 0,
      width: 67,
      height: 40,
      position: "absolute"
    },
    backandconfirmBlock : {
      top : 105,
      flexDirection : "row",
      left : 25
    },
    backbutton6: {
      width: 138,
      height: 51
    },
    backrect3: {
      width: 132,
      height: 46,
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40
    },
    back1Text: {
      color: "rgba(70,31,0,1)",
      fontSize: 25,
      fontFamily: "roboto-700",
      textAlign : "center"
      //marginTop: 10,
      //marginLeft: 35
    },
    confirmbutton7: {
      width: 138,
      height: 51,
      marginLeft: 14
    },
    confirmrect4: {
      width: 132,
      height: 46,
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40
    },
    confirm1Text: {
      color: "rgba(70,31,0,1)",
      fontSize: 25,
      fontFamily: "roboto-700",
      textAlign : "center"
    },
    bottomTab : {
        top : 120,
      }
  });
  export default styles;