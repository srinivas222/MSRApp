import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(175,106,37,1)"
    },
    image: {
      width: 365,
      height: 399,
      marginTop: 200,
      marginLeft: 1,
      position: "absolute"
    },
    image_imageStyle: {
      opacity: 0.2
    },
    rect: {
      top: 30,
      left: 20,
      width: 321,
      height: 55,
      backgroundColor: "rgba(230, 230, 230,1)",
      position: "absolute",
      borderRadius: 40,
      borderColor: "#000000",
      borderWidth: 0
    },
    regHeading: {
      width: 267,
      height: 35,
      color: "rgba(70,31,0,1)",
      fontSize: 25,
      fontFamily: "roboto-700",
      marginTop: 10,
      marginLeft: 27
    },
    idBlock : {
      top: 90,
      flexDirection : "row"
    },
    id: {
      left: 15,
      width: 38,
      height: 27,
      color: "rgba(70,31,0,1)",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
    idTextInput: {
      top: 2,
      left: 20,
      width: 127,
      height: 30,
      color: "#121212",
      borderColor: "rgba(250,246,246,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
    },
    nameBlock : {
      top: 95,
      flexDirection : "row"
    },
    name: {
      left: 15,
      width: 83,
      height: 27,
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
    nameTextInput: {
      top: 2,
      left: 15,
      width: 250,
      height: 30,
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(250,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
    },
    addressBlock : {
      top: 100,
    },
    address: {
      left: 15,
      width: 111,
      height: 27,
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
    addressTextInput: {
      left: 15,
      width: 330,
      height: 50,
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(252,246,246,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
    },
    emargencyBlock :{
      top: 105,
    },
    emergencyContact: {
      left: 15,
      width: 243,
      height: 35,
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
    textInput69: {
      //top: 10,
      left: 15,
      width: 330,
      height: 30,
      color: "#121212",
     // position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20,
    },
    contactBlock : {
      top: 110,
    },
    contactNumber: {
      left: 15,
      width: 206,
      height: 30,
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
    textInput10: {
     // top: 10,
      left: 15,
      width: 330,
      height: 30,
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20,
    },
    roomBlock :{
      top: 115,
    },
    roomNumber: {
      left: 15,
      width: 271,
      height: 27,
      color: "rgba(70,31,0,1)",
     // position: "absolute",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
    textInput11: {
      //top: 10,
      left: 15,
      width: 330,
      height: 35,
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
    },
    icon4: {
      top : -30,
      color: "rgba(248,244,244,1)",
      fontSize: 25,
      height: 30,
      width: 30,
     // marginTop: 212,
      marginLeft: 318
    },
    passwordBlock : {
      top: 90,
    },
    password: {
      left: 15,
      width: 129,
      height: 27,
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
    textInput: {
      //top: 10,
      left: 15,
      width: 330,
      height: 30,
      color: "#121212",
      //position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
    },
    confirmPSWBlock : {
      top: 95,
    },
    confirmPassword: {
      left: 15,
      width: 230,
      height: 27,
      color: "rgba(70,31,0,1)",
      //position: "absolute",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
    textInput12: {
     // top : 15,
      left : 15,
      width: 330,
      height: 30,
      color: "#121212",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      fontSize : 20
    },
    attachProfilePhotoColumnRow: {
      top : 100,
      left : 15,
      //height: 81,
      flexDirection: "row",
      //marginTop: 5,
     // marginLeft: 29,
      //marginRight: 34
    },
    attachProfilePhoto: {
      width: 250,
      height: 27,
      color: "rgba(70,31,0,1)",
      fontSize: 25,
      fontFamily: "roboto-700",
      marginLeft: 3
    },
    icon2: {
      color: "rgba(70,31,0,1)",
      fontSize: 40
    },

    agreeBlock: {
      top : 100,
      left : 15,
      height: 30,
      flexDirection: "row",
      //marginTop: 6,
      //marginRight: 49
    },
    icon3: {
      color: "rgba(70,31,0,1)",
      fontSize: 30
    },
    iAgreeTc: {
      top : -5,
      width: 152,
      height: 32,
      color: "rgba(70,31,0,1)",
      fontSize: 25,
      fontFamily: "roboto-700",
      marginLeft: 12,
      //marginTop: 8
    },
    backandconfirmBlock: {
      top : 105,
      left : 35,
      //height: 49,
      flexDirection: "row",
    },
    button2: {
     // width: 138,
      //height: 49
    },
    rect2: {
      width: 132,
      height: 40,
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40
    },
    back: {
      color: "rgba(70,31,0,1)",
      fontSize: 25,
      fontFamily: "roboto-700",
      //marginTop: 7,
      alignItems : "center",
      marginLeft: 38
    },
    button3: {
      width: 138,
      height: 49,
      marginLeft: 15
    },
    rect3: {
      width: 132,
      height: 40,
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40
    },
    confirm15: {
      color: "rgba(70,31,0,1)",
      fontSize: 25,
      fontFamily: "roboto-700",
      //marginTop: 7,
      alignItems : "center",
      marginLeft: 24
    },












    textInput13: {
      top: 331,
      left: 32,
      width: 313,
      height: 25,
      color: "#121212",
      position: "absolute",
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 5,
      fontFamily: "roboto-regular"
    },
    
    
    textInputStack: {
      top: 132,
      left: 5,
      width: 292,
      height: 27,
      position: "absolute"
    },
    
    
    
    
    
    attachProfilePhotoColumn: {
      width: 253,
      marginTop: 8
    },
    group: {
      width: 45,
      height: 43,
      marginLeft: 14
    },
    
    
    
   
    
  });

  export default styles;