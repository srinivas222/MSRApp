import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#AF6A25"
    },
    image7Stack: {
     // width: wp('100%'),
      height: hp('60%'),
      marginTop: 230,
      marginLeft: 1
    },
    image7: {
      top: 0,
      left: 0,
      width: wp('100%'),
      height: hp('60%'),
      position: "absolute"
    },
    image7_imageStyle: {
      opacity: 0.2
    },
    group: {
      //width: wp('83.33%'),
      //height: hp('12.34%'),
      marginTop: -579,
      marginLeft: 15
    },
    rect1: {
      width: wp('91.66%'),
      height: hp('10.15%'),
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40,
      borderColor: "#000000",
      borderWidth: 0
    },
    sadhakas1: {
      color: "rgba(70,31,0,1)",
      fontSize: 24,
      fontFamily: "roboto-700",
      //marginTop: 10,
      //marginLeft: 2,
      textAlign: "center"
    },
    scrollArea_contentContainerStyle: {
      width: wp('100%'),
      height: 1200,
      flexDirection: "column",
  
    },
    scrollArea: {
      width: wp('100%'),
      // backgroundColor: "#AF6A25",
      overflow: "hidden",
      flex: 1,
      //marginBottom: -2969,
      //marginTop: 5,
      marginLeft: 0,
      //fontSize : 24
    },
    dateBlock : {
        top: 20,
    },
    date1: {
        left: 10,
        width: wp('54.16%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 24,
        fontFamily: "roboto-700"
      },
    
    icon2: {
        top: 100,
        left: 90,
        position: "absolute",
        color: "rgba(248,244,244,1)",
        fontSize: 40,
        width: wp('55.55%'),
        height: hp('12.96%'),
        transform: [
          { scaleX: 1.5 }, 
          { scaleY: 1.5 },
       ]
      },
//======================================================================

problem: {
    top: 80,
    left: 10,
    width: wp('35.27%'),
    height: hp('4.21%'),
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "roboto-700"
},
problemtextInput: {
    top: 140,
    left: 15,
    width: wp('84.72%'),
    height: hp('33.43%'),
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "rgba(70,31,0,1)",
    position: "absolute",
    opacity: 0.8,
    borderRadius: 60,
    fontSize: 24,
    fontFamily: "roboto-regular"
},

suggestion: {
    top: 230,
    left: 10,
    width: wp('38.8%'),
    height: hp('6.25%'),
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "roboto-700"
},

suggestiontextInput: {
    top: 280,
    left: 15,
    width: wp('84.72%'),
    height: hp('33.43%'),
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "rgba(70,31,0,1)",
    position: "absolute",
    opacity: 0.8,
    borderRadius: 60,
    fontSize: 24,
    fontFamily: "roboto-regular"
},

// suggestionBlock : {
//     top : 420
//     },

    feedback: {
        top: 520,
        left: 10,
        width: wp('35.27%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 24,
        fontFamily: "roboto-700"
    },
    feedbacktextInput: {
        top: 570,
        left: 15,
        width: wp('84.72%'),
        height: hp('33.43%'),
        backgroundColor: "rgba(230, 230, 230,1)",
        color: "rgba(70,31,0,1)",
        position: "absolute",
        opacity: 0.8,
        borderRadius: 60,
        fontSize: 24,
        fontFamily: "roboto-regular"
    },

agreeTandCBlock : {
  top: 800,
  flexDirection : "row",
  left: 65,
},
materialCheckboxTandC: {
  top: 8,
  width: wp('8.33%'),
  height: hp('3.12%'),
  //position: "absolute"
},
suggestioniAgreeTc1: {
 // top : 1050,
  left : 20,
  width: wp('42.22%'),
  height: hp('4.21%'),
  color: "rgba(70,31,0,1)",
  fontSize: 24,
  fontFamily: "roboto-700",
  
},
backandconfirmBlock : {
  top : 850,
  left : 20,
  flexDirection : "row"
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
  fontSize: 24,
  fontFamily: "roboto-700",
  textAlign : "center",
  marginTop: 6,
  //marginLeft: 35
},
confirmbutton7: {
  width: wp('38.33%'),
  height: hp('7.96%'),
  marginLeft: 25
},
confirmrect4: {
  width: wp('36.66%'),
  height: hp('7.18%'),
  backgroundColor: "rgba(230, 230, 230,1)",
  borderRadius: 40
},
confirm1Text: {
  color: "rgba(70,31,0,1)",
  fontSize: 24,
  fontFamily: "roboto-700",
  textAlign : "center",
  marginTop: 5,
},
  });

  export default styles;