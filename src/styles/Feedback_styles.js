import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(175,106,37,1)"
    },
    image7StackStack: {
      width: wp('100%'),
      height: hp('15.62%'),
      marginTop: 34,
      marginLeft: 1
    },
    image7Stack: {
      top: 188,
      left: 0,
      width: wp('27.77%'),
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
    rect1: {
      top: 10,
      left: 20,
      width: wp('88.88%'),
      height: hp('11.25%'),
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40,
      borderColor: "#000000",
      borderWidth: 0
    },
    feedback2: {
      color: "rgba(70,31,0,1)",
      fontSize: 22,
      fontFamily: "roboto-700",
      textAlign : "center",
      top: 15,
      
    },
    sadhakasIdBlock : {
      marginTop: 30,
      marginLeft: 20
    },
    sadhakasId: {
      width: wp('45%'),
      height: hp('4.68%'),
      color: "rgba(70,31,0,1)",
      fontSize: 22,
      fontFamily: "roboto-700", 
    },
    textInput4: {
      top: 10,
      //left: 10,
      width: wp('86.11%'),
      height: hp('4.68%'),
      color: "#121212",
      borderColor: "rgba(250,247,247,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize: 22,
      
    },
    feedbackblock: {
      top: 30,
      left: 20,
  },
  feedback1: {
    width: wp('35.27%'),
    height: hp('4.21%'),
    color: "rgba(70,31,0,1)",
    fontSize: 22,
    fontFamily: "roboto-700",
    //marginTop: 152,
    //marginLeft: 35
  },
  textInput1Column: {
    top: 30,
    //left: 10,
     // width: wp('89.16%'),
     // height: hp('73.59%'),
  },
  textInput1: {
    width: wp('84.72%'),
    height: hp('31.25%'),
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "rgba(70,31,0,1)",
    opacity: 0.8,
    borderRadius: 60,
    fontSize: 22,
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
      width: wp('42.22%'),
      height: hp('5.46%'),
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 22,
      fontFamily: "roboto-700"
    },
  materialCheckbox1: {
      //top: 0,
     // left: 0,
      width: wp('18.61%'),
      height: hp('6.25%'),
      position: "absolute"
    },
    backandconfirmBlock : {
      top : 105,
      flexDirection : "row",
      left : 25
    },
    backbutton6: {
      width: wp('38.33%'),
      height: hp('7.96%')
    },
    backrect3: {
      width: wp('36.66%'),
      height: hp('7.18%'),
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40
    },
    back1Text: {
      color: "rgba(70,31,0,1)",
      fontSize: 22,
      fontFamily: "roboto-700",
      textAlign : "center"
      //marginTop: 10,
      //marginLeft: 35
    },
    confirmbutton7: {
      width: wp('38.33%'),
      height: hp('7.96%'),
      marginLeft: 14
    },
    confirmrect4: {
      width: wp('36.66%'),
      height: hp('7.18%'),
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40
    },
    confirm1Text: {
      color: "rgba(70,31,0,1)",
      fontSize: 22,
      fontFamily: "roboto-700",
      textAlign : "center"
    },
    bottomTab : {
        top : 120,
      }
  });
  export default styles;