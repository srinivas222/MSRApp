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
    fontSize: 22,
    fontFamily: "roboto-700",
    marginTop: 10,
    //marginLeft: 2,
    textAlign: "center"
  },
  scrollArea_contentContainerStyle: {
    width: wp('100%'),
    height: 1500,
    flexDirection: "column",

  },
  scrollArea: {
    width: wp('100%'),
    // backgroundColor: "#AF6A25",
    overflow: "hidden",
    flex: 1,
    //marginBottom: -2969, 
    //marginTop: 5,
    marginLeft: 20,
    //fontSize : 22
  },
  problemBlock : {
    //top : 10
  },
  problem: {
    //top: 19,
    left: 10,
    width: wp('31.38%'),
    height: hp('4.21%'),
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 22,
    fontFamily: "roboto-700"
  },
 
  textInput1: {
    top: 40,
    left: 10,
    width: wp('77.77%'),
    height: hp('5.78%'),
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(250,247,247,1)",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontFamily: "roboto-regular"
  },
  icon3: {
    top: 30,
    left: 40,
    width : wp('55.55%'),
    height : hp('6.25%'),
    position: "absolute",
    //color: "rgba(248,244,244,1)",
    fontFamily: "roboto-regular",
    fontSize: 22,
    transform: [
      { scaleX: 1.5 }, 
      { scaleY: 1.5 },
   ]
  },
  suggestionsblock : {
    top: 100,
    left: 10,
    
    
  },
  suggestions: {
    width: wp('44.44%'),
    height: hp('5.46%'),
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 22,
    fontFamily: "roboto-700"
  },
  faqs : {
    top : 20,
    flexDirection : "column",
    left : 20,
    height: 40,
  },
  
  faQs1: {
    top: 40,
    //left: 38,
    width: wp('6.66%'),
    
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 22,
    fontFamily: "roboto-700"
  },
  faQs2: {
    top: 80,
    //left: 38,
    width: wp('6.66%'),
   // height: hp('4.21%'),
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 22,
    fontFamily: "roboto-700"
  },
  faQs3: {
    top: 120,
    //left: 38,
    width: wp('6.66%'),
    //height: hp('4.21%'),
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 22,
    fontFamily: "roboto-700"
  },
  faQs4: {
    top: 160,
    //left: 38,
    width: wp('6.66%'),
    //height: hp('4.21%'),
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 22,
    fontFamily: "roboto-700"
  },
  faQs5: {
    top: 200,
   // left: 38,
    width: wp('6.66%'),
   // height: hp('4.21%'),
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 22,
    fontFamily: "roboto-700"
  },
  faQs6: {
    top: 240,
    //left: 38,
    width: wp('6.66%'),
    //height: hp('4.21%'),
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 22,
    fontFamily: "roboto-700"
  },
  faQs7: {
    top: 280,
    //left: 38,
    width: wp('6.66%'),
   // height: hp('4.21%'),
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 22,
    fontFamily: "roboto-700"
  },
  faQs8: {
    top: 320,
    //left: 38,
    width: wp('6.66%'),
    //height: hp('4.21%'),
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 22,
    fontFamily: "roboto-700"
  },
  faQs9: {
    top: 360,
    width: wp('6.66%'),
    //height: hp('4.21%'),
    color: "rgba(243,240,238,1)",
    fontSize: 22,
    fontFamily: "roboto-700",
    position: "absolute",
    //marginLeft: 38
  },
  faQs10: {
    top: 400,
    width: wp('11.11%'),
    //height: hp('4.21%'),
    color: "rgba(243,240,238,1)",
    fontSize: 22,
    fontFamily: "roboto-700",
    position: "absolute",
    //marginLeft: 38
  },
  faQs11: {
    top: 440,
    width: wp('11.11%'),
    //height: hp('4.21%'),
    color: "rgba(243,240,238,1)",
    fontSize: 22,
    fontFamily: "roboto-700",
    position: "absolute",
    //marginLeft: 38
  },
  faQs12: {
    top: 480,
    width: wp('11.11%'),
    //height: hp('4.21%'),
    color: "rgba(243,240,238,1)",
    fontSize: 22,
    fontFamily: "roboto-700",
    position: "absolute",
    //marginLeft: 38
  },
  faQs13: {
    top: 520,
    width: wp('11.11%'),
    //height: hp('4.21%'),
    color: "rgba(243,240,238,1)",
    fontSize: 22,
    fontFamily: "roboto-700",
    position: "absolute",
    //marginLeft: 38
  },
  faQs14: {
    top: 560,
    width: wp('11.11%'),
    //height: hp('4.21%'),
    color: "rgba(243,240,238,1)",
    fontSize: 22,
    fontFamily: "roboto-700",
    position: "absolute",
    //marginLeft: 38
  },
  faQs15: {
    top: 600,
    width: wp('11.11%'),
    //height: hp('4.21%'),
    color: "rgba(243,240,238,1)",
    fontSize: 22,
    fontFamily: "roboto-700",
    position: "absolute",
    //marginLeft: 38
  },
  youtubeblock : {
    top : 740,
    left : 10
  },
  youtubevlock : {
    width: wp('69.44%'),
    height: hp('5.46%'),
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 22,
    fontFamily: "roboto-700"
  },
  icon: {
    top : 50,
    left : 50,
    // color: "rgba(243,240,238,1)",
    // backgroundColor : "#AF6A25",
    // opacity : 20,
    // borderRadius : 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    //backgroundColor: '#ecf0f1',
    fontSize: 22,
    width: wp('55.55%'),
    height: hp('15%'),
    alignItems : "center",
    position: "absolute",
    //marginTop: 237,
   // marginLeft: 123
  },
  iconYoutube : {
    top : 200,
    left : 50,
    // color: "rgba(243,240,238,1)",
    // backgroundColor : "#AF6A25",
    // opacity : 20,
    // borderRadius : 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    //backgroundColor: '#ecf0f1',
    fontSize: 22,
    width: wp('55.55%'),
    height: hp('15%'),
    alignItems : "center",
    position: "absolute",
    //marginTop: 237,
   // marginLeft: 123
  },
  
  bottomTab : {
    top : 550,
  }
});
export default styles;