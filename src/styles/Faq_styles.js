import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AF6A25"
  },
  image7Stack: {
   // width: 644,
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
  scrollArea_contentContainerStyle: {
    width: 360,
    height: 1500,
    flexDirection: "column",

  },
  scrollArea: {
    width: 360,
    // backgroundColor: "#AF6A25",
    overflow: "hidden",
    flex: 1,
    //marginBottom: -2969, 
    //marginTop: 5,
    marginLeft: 20,
    //fontSize : 25
  },
  problemBlock : {
    //top : 10
  },
  problem: {
    //top: 19,
    left: 10,
    width: 113,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
 
  textInput1: {
    top: 40,
    left: 10,
    width: 280,
    height: 37,
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
    width : 200,
    height : 40,
    position: "absolute",
    //color: "rgba(248,244,244,1)",
    fontFamily: "roboto-regular",
    fontSize: 25,
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
    width: 160,
    height: 35,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
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
    width: 24,
    
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  faQs2: {
    top: 80,
    //left: 38,
    width: 24,
   // height: 27,
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  faQs3: {
    top: 120,
    //left: 38,
    width: 24,
    //height: 27,
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  faQs4: {
    top: 160,
    //left: 38,
    width: 24,
    //height: 27,
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  faQs5: {
    top: 200,
   // left: 38,
    width: 24,
   // height: 27,
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  faQs6: {
    top: 240,
    //left: 38,
    width: 24,
    //height: 27,
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  faQs7: {
    top: 280,
    //left: 38,
    width: 24,
   // height: 27,
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  faQs8: {
    top: 320,
    //left: 38,
    width: 24,
    //height: 27,
    color: "rgba(243,240,238,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  faQs9: {
    top: 360,
    width: 24,
    //height: 27,
    color: "rgba(243,240,238,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    position: "absolute",
    //marginLeft: 38
  },
  faQs10: {
    top: 400,
    width: 40,
    //height: 27,
    color: "rgba(243,240,238,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    position: "absolute",
    //marginLeft: 38
  },
  faQs11: {
    top: 440,
    width: 40,
    //height: 27,
    color: "rgba(243,240,238,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    position: "absolute",
    //marginLeft: 38
  },
  faQs12: {
    top: 480,
    width: 40,
    //height: 27,
    color: "rgba(243,240,238,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    position: "absolute",
    //marginLeft: 38
  },
  faQs13: {
    top: 520,
    width: 40,
    //height: 27,
    color: "rgba(243,240,238,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    position: "absolute",
    //marginLeft: 38
  },
  faQs14: {
    top: 560,
    width: 40,
    //height: 27,
    color: "rgba(243,240,238,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    position: "absolute",
    //marginLeft: 38
  },
  faQs15: {
    top: 600,
    width: 40,
    //height: 27,
    color: "rgba(243,240,238,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    position: "absolute",
    //marginLeft: 38
  },
  youtubeblock : {
    top : 740,
    left : 10
  },
  youtubevlock : {
    width: 250,
    height: 35,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
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
    fontSize: 20,
    width: 200,
    height: 96,
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
    fontSize: 20,
    width: 200,
    height: 96,
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