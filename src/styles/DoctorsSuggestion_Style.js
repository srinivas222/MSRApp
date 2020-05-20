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
      //marginTop: 10,
      //marginLeft: 2,
      textAlign: "center"
    },
    scrollArea_contentContainerStyle: {
      width: 360,
      height: 2000,
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
    dateBlock : {
        top: 20,
        left: 20,
    },
    date1: {
        
        width: 195,
        height: 27,
        color: "rgba(70,31,0,1)",
        position: "absolute",
        fontSize: 25,
        fontFamily: "roboto-700"
      },
    
    icon2: {
        top: 170,
        left: 70,
        position: "absolute",
        color: "rgba(248,244,244,1)",
        fontSize: 40,
        width: 200,
        height: 83,
        transform: [
          { scaleX: 1.5 }, 
          { scaleY: 1.5 },
       ]
      },
problemBlock : {
  top: 120,
  left: 20,
},
problem: {
    width: 127,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
},
problemtextInput: {
    top: 50,
    //left: 10,
    width: 305,
    height: 214,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "rgba(70,31,0,1)",
    position: "absolute",
    opacity: 0.8,
    borderRadius: 60,
    fontSize: 25,
    fontFamily: "roboto-regular"
},
agreeTandCBlock : {
    top: 400,
    flexDirection : "row",
    left : 20
  },
  materialCheckboxTandC: {
    //top: 341,
    left: 0,
    width: 30,
    height: 20,
    //position: "absolute"
  },
  suggestioniAgreeTc1: {
   top : -8,
    left : 30,
    width: 152,
    height: 27,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    
  },
  backandconfirmBlock : {
    top : 420,
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
  rect2: {
    top: 620,
    //left: 20,
    width: 360,
    height: 60,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0,
    flexDirection: "row"
  },
  
  });

  export default styles;
  