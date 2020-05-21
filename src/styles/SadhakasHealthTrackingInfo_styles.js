import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#AF6A25"
    },
    image7Stack: {
     // width: 644,
      height: hp('60.00%'),
      marginTop: hp('35.9375%'),
      marginLeft: wp('0.2777%')
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
    group: {
      //width: 300,
      //height: 79,
      marginTop: hp('-90.4687%'),
      marginLeft: wp('4.1666%')
    },
    rect1: {
      width: wp('91.6666%'),
      height: hp('10.1562%'),
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40,
      borderColor: "#000000",
      borderWidth: 0
    },
    sadhakas1: {
      color: "rgba(70,31,0,1)",
      fontSize: 22,
      fontFamily: "roboto-700",
      marginTop: hp('1.09375%'),
      //marginLeft: 2,
      textAlign: "center",
      
    },
    scrollArea_contentContainerStyle: {
      width: wp('100%'),
      height: 2000,
      flexDirection: "column",
  
    },
    scrollArea: {
      width: wp('100%'),
      // backgroundColor: "#AF6A25",
      overflow: "hidden",
      flex: 1,
      //marginBottom: -2969, 
      //marginTop: 5,
      marginLeft: wp('5.555%'),
      //fontSize : 25
    },
    dateBlock : {
        top: hp('3.1250%'),
    },
    date1: {
        left: wp('2.777%'),
        width: wp('18.8888%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 20,
        fontFamily: "roboto-700"
      },
      dateTime: {
        top: hp('3.3437%'),
      },
      weightBlock : {
        top: hp('6.2500%'),
      },
      weight: {
        left: wp('0.0%'),
        width: wp('17.00%'),
        height: hp('5.0000%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 20,
        fontFamily: "roboto-700"
      },
      textInput4: {
        top: hp('-1.874%'),
        left: wp('23.6111%'),
        width: wp('20.2777%'),
        height: 43,
        color: "#121212",
        position: "absolute",
        borderColor: "rgba(248,244,244,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular"
      },
      
      icon2: {
        top: hp('-2.3427%'),
        left: wp('25%'),
        position: "absolute",
        color: "rgba(248,244,244,1)",
        fontSize: 40,
        width: wp('19.4444%'),
        height: hp('6.7187%'),
        transform: [
          { scaleX: 1.5 }, 
          { scaleY: 1.5 },
       ]
      },
     bmiBlock : {
        top: hp('14.0625%'),
     },
      bmi: {
        left: wp('0.0%'),
        width: wp('16.9444%'),
        height: hp('4.2187%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 20,
        fontFamily: "roboto-700"
      },
      textInput2: {
        top: hp('-1.5625%'),
        left: wp('-18.0555%'),
        width: wp('55.5555%'),
        height: hp('6.2500%'),
        color: "#121212",
        position: "absolute",
        borderColor: "rgba(248,244,244,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        fontSize : 20
      },
      textInput2Stack: {
        top: hp('0.0%'),
        left: wp('36.1111%'),
        width: wp('20.2777%'),
        height: hp('7.500%'),
        position: "absolute"
      },
      heightBlock : {
        top: hp('6.2500%'),
      },
      height: {
       
        left: wp('47.222%'),
        width: wp('17.1666%'),
        height: hp('5.0000%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 20,
        fontFamily: "roboto-700"
      },
      textInput3: {
        top: hp('-1.875%'),
        left: wp('70.8333%'),
        width: wp('20.2777%'),
        height: hp('6.2500%'),
        color: "#121212",
        position: "absolute",
        borderColor: "rgba(248,244,244,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular"
      },
      icon3: {
        top: hp('-2.343%'),
        left: wp('72.222%'),
        position: "absolute",
        color: "rgba(248,244,244,1)",
        fontSize: 40,
        width: wp('19.4444%'),
        height: hp('6.7187%'),
        transform: [
          { scaleX: 1.5 }, 
          { scaleY: 1.5 },
       ]
      },
    bpBlock : {
        top: hp('22.65625%'),
        left : wp('0.0%')
    },
      bp: {
        //left: 10,
        width: wp('16.9444%'),
        height: hp('4.2187%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 20,
        fontFamily: "roboto-700"
      },
      textInput5: {
        top: hp('-2.34375%'),
        left: wp('16.111%'),
        width: wp('27.7777%'),
        height: hp('6.2500%'),
        color: "#121212",
        position: "absolute",
        borderColor: "rgba(248,244,244,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        fontSize: 20,
      },
      icon4: {
        //flex : 1,
        top: hp('-3.125%'),
        left: wp('19.444%'),
        position: "absolute",
        //color: "rgba(248,244,244,1)",
        
        width: wp('22.2222%'),
        height: hp('6.71875%'),
        transform: [
          { scaleX: 1.5 }, 
          { scaleY: 1.5 },
       ]
      },
      textInput6: {
        top: hp('-2.34375%'),
        left: wp('50.00%'),
        width: wp('27.7777%'),
        height: hp('6.2500%'),
        color: "#121212",
        position: "absolute",
        borderColor: "rgba(248,244,244,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        fontSize: 20,
      },
    
      icon5: {
        top: hp('-3.125%'),
        left: wp('52.777%'),
        position: "absolute",
        color: "rgba(248,244,244,1)",
        fontSize: 40,
        width: wp('22.2222%'),
        height: hp('5.00%'),
        transform: [
          { scaleX: 1.5 }, 
          { scaleY: 1.5 },
       ]
      },
      bloodTest : {
        top: hp('29.6875%'),
      },
      bloodTestInput: {
        
        //left: 10,
        width: wp('59.4444%'),
        height: hp('4.2187%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 20,
        fontFamily: "roboto-700"
      },
      btdropdown1: {
        //flex: 1,
        top: hp('4.6875%'),
        left: wp('11.111%'),
        width: wp('55.5555%'),
        height: hp('7.8125%'),
        color: "white",
        position: "absolute",
        transform: [
          { scaleX: 1.5 }, 
          { scaleY: 1.5 },
       ]
      },
      bloodReportBlock : {
        top: hp('40.625%'),
      },
      bloodReport1: {
        
        //left: 10,
        width: wp('46.3888%'),
        height: hp('4.6875%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 20,
        fontFamily: "roboto-700"
      },
      bloodNamesDirection : {
        
      },
      name2: {
        top: hp('5.46875%'),
        //left: 10,
        width: wp('23.0555%'),
        height: hp('4.2187%'),
        color: "rgba(70,31,0,1)",
        fontSize: 20,
        fontFamily: "roboto-700",  
      },
      textInput12: {
        top : hp('2.725%'),
        left: wp('18.222%'),
        width: wp('52.2222%'),
        height: hp('6.2500%'),
        color: "#121212",
        position: "absolute",
        borderColor: "rgba(248,244,244,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        fontSize : 20
      },
      name3: {
        top: hp('7.03125%'),
       // left: 10,
        width: wp('23.0555%'),
        height: hp('4.2187%'),
        color: "rgba(70,31,0,1)",
        fontSize: 20,
        fontFamily: "roboto-700",  
      },
      textInput13: {
        top : hp('8.725%'),
        left: wp('18.222%'),
        width: wp('52.2222%'),
        height: hp('6.2500%'),
        color: "#121212",
        position: "absolute",
        borderColor: "rgba(248,244,244,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        fontSize : 20
      },
      name4: {
        top: hp('8.59375%'),
        //left: 10,
        width: wp('23.0555%'),
        height: hp('4.2187%'),
        color: "rgba(70,31,0,1)",
        fontSize: 20,
        fontFamily: "roboto-700",  
      },
      textInput14: {
        top : hp('14.725%'),
        left: wp('18.222%'),
        width: wp('52.2222%'),
        height: hp('6.2500%'),
        color: "#121212",
        position: "absolute",
        borderColor: "rgba(248,244,244,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        fontSize : 20
      },
      name5: {
        top: hp('10.625%'),
        //left: 10,
        width: wp('23.05555%'),
        height: hp('4.2187%'),
        color: "rgba(70,31,0,1)",
        fontSize: 20,
        fontFamily: "roboto-700",  
      },
      textInput15: {
        top : hp('20.725%'),
        left: wp('18.222%'),
        width: wp('52.2222%'),
        height: hp('6.2500%'),
        color: "#121212",
        position: "absolute",
        borderColor: "rgba(248,244,244,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        fontSize : 20
      },
      name6: {
        top: hp('12.1855%'),
        //left: 10,
        width: wp('23.05555%'),
        height: hp('4.2187%'),
        color: "rgba(70,31,0,1)",
        fontSize: 20,
        fontFamily: "roboto-700",  
      },
      textInput16: {
        top : hp('26.725%'),
        left: wp('18.222%'),
        width: wp('52.2222%'),
        height: hp('6.2500%'),
        color: "#121212",
        position: "absolute",
        borderColor: "rgba(248,244,244,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        fontSize : 20
      },
      healthStatiticsBlock : {
        top : hp('56.25%'),
      },

      healthStatistics: {
       
        width: wp('57.7777%'),
        height: hp('4.2187%'),
        color: "rgba(70,31,0,1)",
        fontSize: 20,
        fontFamily: "roboto-700",
       // marginTop: 15,
       // marginLeft: 34
      },
      weight4: {
        top : hp('4.6875%'),
        left : wp('8.333%'),
        width: wp('23.6111%'),
        height: hp('5.4687%'),
        color: "rgba(245,241,237,1)",
        fontSize: 20,
        fontFamily: "roboto-700"
      },
      graph: {
        top:hp('14.0625%'),
        left: wp('8.333%'),
        position: "absolute",
        color: "rgba(9,9,9,1)",
        fontSize: 100,
        width: wp('28.8888%'),
        height: hp('16.7187%')
      },
      blood: {
        top : hp('4.6875%'),
        left : wp('35.625%'),
        width: wp('23.6111%'),
        height: hp('4.2187%'),
        color: "rgba(245,241,237,1)",
        fontSize: 20,
        fontFamily: "roboto-700"
      },
      graph1: {
        top: hp('14.0625%'),
        left: wp('30.625%'),
        position: "absolute",
        color: "rgba(9,9,9,1)",
        fontSize: 100,
        width: wp('28.8888%'),
        height: hp('16.7187%')
      },
      activity: {
        top : hp('26.5625%'),
        left : wp('8.333%'),
        width: wp('23.05555%'),
        height: hp('4.2187%'),
        color: "rgba(245,241,237,1)",
        fontSize: 20,
        fontFamily: "roboto-700"
      },
      graph2: {
        top: hp('35.9375%'),
        left: wp('8.333%'),
        position: "absolute",
        color: "rgba(9,9,9,1)",
        fontSize: 100,
        width: wp('28.8888%'),
        height: hp('16.7187%')
      },
      diet: {
        top : hp('26.5625%'),
        left : wp('35.777%'),
        width: wp('23.05555%'),
        height: hp('4.2187%'),
        color: "rgba(245,241,237,1)",
        fontSize: 20,
        fontFamily: "roboto-700"
      },
      graph3: {
        top: hp('35.9375%'),
        left: wp('30.777%'),
        position: "absolute",
        color: "rgba(9,9,9,1)",
        fontSize: 100,
        width: wp('28.8888%'),
        height: hp('16.7187%')
      },
      faqBlock : {
        top: hp('54.6875%'),
      },
      faQs: {
        left: wp('0.0%'),
        width: wp('21.3888%'),
        height: hp('4.2187%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 20,
        fontFamily: "roboto-700"
      },
      faQs1: {
        top : hp('4.6875%'),
        left : wp('0.0%'),
        width: wp('6.6666%'),
        height: hp('4.2187%'),
        color: "rgba(243,240,238,1)",
        fontSize: 20,
        fontFamily: "roboto-700", 
      },
      faQs2: {
        top: hp('9.375%'),
        left: wp('0.0%'),
        width: wp('6.6666%'),
        height: hp('4.2187%'),
        color: "rgba(243,240,238,1)",
        fontSize: 20,
        fontFamily: "roboto-700"
      },
      
      faQs3: {
        top : hp('14.0625%'),
        left : wp('0.0%'),
        width: wp('6.6666%'),
        height: hp('4.2187%'),
        color: "rgba(243,240,238,1)",
        fontSize: 20,
        fontFamily: "roboto-700",
      },

//======================================================================
suggestionBlock : {
top : hp('128.125%')
},
suggestion: {
  width: wp('86.3888%'),
  height: hp('4.2187%'),
  color: "rgba(70,31,0,1)",
  fontSize: 20,
  fontFamily: "roboto-700",
  
},
suggestionFaqBlock : {
  top : hp('4.6875%'),
},
faQs4: {
  top : hp('0.0%'),
  width: wp('6.6666%'),
  height: hp('4.2187%'),
  color: "rgba(243,240,238,1)",
  fontSize: 20,
  fontFamily: "roboto-700",
  
},
faQs5: {
  top : hp('7.8125%'),
  left: wp('0.0%'),
  width: wp('6.6666%'),
  height: hp('4.2187%'),
  color: "rgba(243,240,238,1)",
  position: "absolute",
  fontSize: 20,
  fontFamily: "roboto-700"
},
faQs6: {
  top : hp('15.625%'),
  left: wp('0.0%'),
  width: wp('6.6666%'),
  height: hp('4.2187%'),
  color: "rgba(243,240,238,1)",
  position: "absolute",
  fontSize: 20,
  fontFamily: "roboto-700"
},
faQs7: {
  top : hp('23.4375%'),
  left: wp('0.0%'),
  width: wp('6.6666%'),
  height: hp('4.2187%'),
  color: "rgba(243,240,238,1)",
  position: "absolute",
  fontSize: 20,
  fontFamily: "roboto-700"
},
feedbachBlock : {
  top: hp('31.25%'),
},
feedback: {
 
  left: wp('0.0%'),
  width: wp('35.2777%'),
  height: hp('4.2187%'),
  color: "rgba(70,31,0,1)",
  position: "absolute",
  fontSize: 20,
  fontFamily: "roboto-700"
},
feedbacktextInput: {
  top: hp('7.8125%'),
  left: wp('0.0%'),
  width: wp('84.7222%'),
  height: hp('33.4375%'),
  backgroundColor: "rgba(230, 230, 230,1)",
  color: "rgba(70,31,0,1)",
  position: "absolute",
  opacity: 0.8,
  borderRadius: 60,
  fontSize: 20,
  fontFamily: "roboto-regular"
},
agreeTandCBlock : {
  top: hp('78.125%'),
  flexDirection : "row"
},
materialCheckboxTandC: {
  //top: 341,
  left:wp('22.0%'),
  width: wp('8.3333%'),
  height: hp('2.125%'),
  //position: "absolute"
},
suggestioniAgreeTc1: {
  top : hp('-1.25%'),
  left : wp('25.333%'),
  width: wp('42.2222%'),
  height: hp('4.2187%'),
  color: "rgba(70,31,0,1)",
  fontSize: 20,
  fontFamily: "roboto-700",
  
},
backandconfirmBlock : {
  top : hp('81.25%'),
  flexDirection : "row",
  left : wp('5.555%')
},
backbutton6: {
  width: wp('38.3333%'),
  height: hp('7.9687%')
},
backrect3: {
  width: wp('36.6666%'),
  height: hp('7.1875%'),
  backgroundColor: "rgba(230, 230, 230,1)",
  borderRadius: 40
},
back1Text: {
  color: "rgba(70,31,0,1)",
  fontSize: 20,
  fontFamily: "roboto-700",
  textAlign : "center",
  marginTop: hp('1.5625%'),
//marginLeft: 35
},
confirmbutton7: {
  width: wp('38.33%'),
  height: hp('7.9687%'),
  marginLeft: 14
},
confirmrect4: {
  width: wp('36.6666%'),
  height: hp('7.1875%'),
  backgroundColor: "rgba(230, 230, 230,1)",
  borderRadius: 40
},
confirm1Text: {
  color: "rgba(70,31,0,1)",
  fontSize: 20,
  fontFamily: "roboto-700",
  textAlign : "center",
  top : hp('1.5625%')
},
      
      
     
      
    
  
  });

  export default styles;
  