
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
        marginTop: 152,
        marginLeft: 1
      },
      image13: {
        top: 58,
        left: 0,
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
        marginTop: -550,
        marginLeft: 27
      },
      button14Row: {
        height: 54,
        flexDirection: "row",
        flex: 1,
        marginRight: 13,
        marginLeft: 17,
        marginTop: 17
      },
      button14: {
        width: wp('8.61%'),
        height: hp('6.71%')
      },
      icon4: {
        color: "rgba(70,31,0,1)",
        fontSize: 18
      },
      home: {
        width: wp('19.44%'),
        height: hp('6.71%'),
        color: "rgba(70,31,0,1)",
        fontSize: 18,
        fontFamily: "roboto-700",
        marginLeft: 78,
        textAlign : "center",
        //marginTop: 11
      },
      group: {
        width: wp('11.66%'),
        height: hp('6.71%'),
        marginLeft: 70,
        marginTop: 2
      },
      button13: {
        width: wp('11.76%'),
        height: hp('6.25%')
      },
      icon2: {
        color: "rgba(70,31,0,1)",
        fontSize: 18
      },
      profileAndActivityBlock : {
        top : 30,
        flexDirection : "row",
        left : 40
      },
      profile: {
        top: 85,
        //left: 40,
        width: 77,
        height: 27,
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      button12: {
        top: 0,
        //left: 40,
        width: wp('23.05%'),
        height: hp('13.28%'),
        position: "absolute"
      },
      image7: {
        width: wp('22.22%'),
        height: hp('12.5%')
      },
      activity: {
        top: 85,
        left: 190,
        width: wp('27.77%'),
        height: hp('5.46%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      button2: {
        //top: 0,
        left: 200,
        width: wp('23.05%'),
        height: hp('13.28%'),
        position: "absolute"
      },
      image8: {
        width: wp('22.22%'),
        height: hp('12.5%')
      },
      treatmentAndDietBlock : {
        top: 169,
        flexDirection : "row",
        left : 40,
      },
      treatment: {
        marginTop: 85,
       // marginLeft: 40,
        width: wp('33.61%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        fontSize: 18,
        fontFamily: "roboto-700",
        
      },
      button3: {
        
        //left: 40,
        width: wp('23.05%'),
        height: hp('13.28%'),
        position: "absolute"
      },
      image9: {
        width: wp('22.22%'),
        height: hp('12.5%')
      },  
      dietMenu: {
        top: 85,
        left: 50,
        width: wp('33.05%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      button4: {
        
        left: 80,
        width: wp('23.05%'),
        height: hp('13.28%'),
        position: "absolute"
      },
      image10: {
        width: wp('22.22%'),
        height: hp('12.5%')
      },
      healthAndDoctorBlock : {
        top : 220,
        flexDirection : "row",
        left : 40
      },
      health2: {
        top: 90,
       // left: 40,
        width: wp('21.3%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      tracking: {
        top: 120,
        //left: 40,
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
        marginTop: 1
      },
      button5: {
        //top: 335,
        //left: 38,
        width: wp('23.05%'),
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
        marginLeft: 50
      },
      doctors: {
        top: 90,
        left: 25,
        width: wp('26.38%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      interaction: {
        top: 120,
        left: 20,
        width: wp('35.27%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      
      button6: {
        //top: 335,
        left: 90,
        width: wp('23.05%'),
        height: hp('13.28%'),
        position: "absolute"
      },
      image12: {
        width: wp('22.22%'),
        height: hp('12.5%')
      },
      feedbackBlock : {
          top : 350
      },
      feedback: {
        //top: 14,
        left: 155,
        width: wp('31.38%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      button122Stack: {
        top: 0,
        left: 0,
        width: wp('89.16%'),
        height: hp('21.71%'),
        position: "absolute"
      },
      button122: {
        top: 0,
        left: 77,
        width: wp('17.5%'),
        height: hp('10%'),
        position: "absolute"
      },
      icon3: {
        color: "rgba(19,19,19,1)",
        fontSize: 18
      },
  });


  export default styles;