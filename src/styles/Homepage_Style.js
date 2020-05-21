
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(175,106,37,1)"
    },
    image13Stack: {
        width: wp('100%'),
        height: hp('67.5%'),
        marginTop: hp('23.75%'),
        marginLeft: wp('0.2777%')
      },
      image13: {
        top: hp('9.0625%'),
        left: wp('0.0%'),
        width: wp('100%'),
        height: hp('58.43%'),
        position: "absolute"
      },
      image13_imageStyle: {
        opacity: 0.2
      },
      rect1: {
        width: wp('89.16%'),
        height: hp('10.93%'),
        backgroundColor: "rgba(230, 230, 230,1)",
        borderRadius: 40,
        borderColor: "#000000",
        borderWidth: 0,
        flexDirection: "row",
        marginTop: hp('-85.9375%'),
        marginLeft: wp('7.5%')
      },
      button14Row: {
        height: hp('8.4375%'),
        flexDirection: "row", 
        flex: 1,
        marginRight: wp('3.6111%'),
        marginLeft: wp('3.888%'),
        marginTop: hp('2.65625%')
      },
      button14: {
        width: wp('8.61%'),
        height: hp('6.71%')
      },
      icon4: {
        top : hp('0.78125%'),
        left : wp('2.777%'),
        color: "rgba(70,31,0,1)",
        fontSize: 30,
        
      },
      home: {
        marginTop: hp('1.0937%'),
        width: wp('19.44%'),
        height: hp('6.71%'),
        color: "rgba(70,31,0,1)",
        fontSize: 20,
        fontFamily: "roboto-700",
        marginLeft: wp('21.666%'),
        textAlign : "center",
        
      },
      group: {
        width: wp('11.66%'),
        height: hp('6.71%'),
        marginLeft: wp('19.444%'),
        marginTop: hp('0.3125%')
      },
      button13: {
        width: wp('11.76%'),
        height: hp('6.25%')
      },
      icon2: {
        top : hp('0.78125%'),
        color: "rgba(70,31,0,1)",
        fontSize: 30
      },
      profileAndActivityBlock : {
        top : hp('4.6875%'),
        flexDirection : "row",
        left : wp('11.111%')
      },
      profile: {
        top: hp('13.28125%'),
        left: wp('4.722%'),
        width: wp('21.3888%'),
        height: hp('4.2187%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      button12: {
        top: hp('0.0%'),
        width: wp('23.05%'),
        height: hp('13.28%'),
        position: "absolute"
      },
      image7: {
        width: wp('22.22%'),
        height: hp('12.5%')
      },
      activity: {
        top: hp('13.28125%'),
        left: wp('58.777%'),
        width: wp('27.77%'),
        height: hp('5.46%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      button2: {
        //top: 0,
        left: wp('53.555%'),
        width: wp('23.05%'),
        height: hp('13.28%'),
        position: "absolute"
      },
      image8: {
        width: wp('22.22%'),
        height: hp('12.5%')
      },
      treatmentAndDietBlock : {
        top: hp('26.40625%'),
        flexDirection : "row",
        left : wp('11.111%'),
      },
      treatment: {
        marginTop: hp('13.28125%'),
        marginLeft: wp('2.722%'),
        width: wp('33.61%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        fontSize: 18,
        fontFamily: "roboto-700",
      },
      button3: {
        width: wp('23.05%'),
        height: hp('13.28%'),
        position: "absolute"
      },
      image9: {
        top : hp('1.5625%'),
        width: wp('22.22%'),
        height: hp('12.5%')
      },  
      dietMenu: {
        top: hp('13.28125%'),
        left: wp('14.888%'),
        width: wp('33.05%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      button4: {
        
        left: wp('16.222%'),
        width: wp('23.05%'),
        height: hp('13.28%'),
        position: "absolute"
      },
      image10: {
        width: wp('22.22%'),
        height: hp('12.5%')
      },
      healthAndDoctorBlock : {
        top : hp('32.375%'),
        flexDirection : "row",
        left : wp('11.111%')
      },
      health2: {
        top: hp('13.5625%'),
        left : wp('4.722%'),
        width: wp('21.3%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      tracking: {
        top: hp('16.05%'),
        left : wp('3.100%'),
        width: wp('28.33%'),
        height: hp('5.46%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      health2Stack: { 
        width: wp('28.33%'),
        height: hp('8.12%'),
        marginTop: hp('0.15625%')
      },
      button5: {
        //top: 335,
        //left: 38,
        width: wp('22.05%'),
        height: hp('13.28%'),
        position: "absolute"
      },
      image11: {
        width: wp('22.22%'),
        height: hp('12.5%')
      },
      interactionStack: {
        width: wp('35.27%'),
        height: hp('8.12%'),
        marginLeft: wp('14.888%')
      },
      doctors: {
        top: hp('13.0625%'),
        left: wp('9.90%'),
        width: wp('26.38%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      interaction: {
        top: hp('16.00%'),
        left: wp('7.700%'),
        width: wp('35.27%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      
      button6: {
        //top: 335,
        left: wp('23.00%'),
        width: wp('23.05%'),
        height: hp('13.28%'),
        position: "absolute"
      },
      image12: {
        width: wp('22.22%'),
        height: hp('12.5%')
      },
      feedbackBlock : {
          top : hp('51.6875%')
      },
      feedback: {
        top: hp('2.5%'),
        left: wp('18.00%'),
        width: wp('31.38%'),
        height: hp('6.21%'),
        color: "rgba(70,31,0,1)",
        //position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      button122Stack: {
        top: hp('0.0%'),
        left: wp('0.0%'),
        width: wp('89.16%'),
        height: hp('21.71%'),
        position: "absolute"
      },
      button122: {
        top : hp('-4.0%'),
        left: wp('27.3888%'),
        width: wp('36.5%'),
        height: hp('8%'),
        //position: "absolute"
      },
      icon3: {
        color: "rgba(19,19,19,1)",
        fontSize: 65,
        top : hp('-6.0%'),
        height: hp('10%'),
        //left: wp('21.3888%'),
       // width: wp('17.5%'),
        //height: hp('8%'),
        //marginBottom : hp('3.125%'),
        //left : wp('9.888%')
      },
  });


  export default styles;