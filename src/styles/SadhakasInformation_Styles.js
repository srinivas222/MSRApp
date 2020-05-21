import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(175,106,37,1)"
    },
    imageStack: {
        top: hp('20.3125%'),
        left: wp('0.0%'),
        height: hp('80%'),
        position: "absolute",
        right: 0 
      },
    image: {
      top: hp('7034375%'),
      height: hp('57%'),
      position: "absolute",
      left: wp('0.0%'),
      right: 0
    },
    image_imageStyle: {
      opacity: 0.2
    },
    header: {
        top: hp('5.125%'),
        left: wp('6.944%'),
        position: "absolute"
      },
    rect: {
        backgroundColor: "#E6E6E6",
        borderRadius: 40,
        width: wp('82%'),
        height: hp('9.6%'),
        //flex: 1
      },
    loremIpsum: {
        fontFamily: "roboto-700",
        color: "rgba(70,31,0,1)",
        fontSize: 20,
        textAlign : "center",
        top: hp('2.343%'),
        marginLeft: wp('6.111%')
      },
      scrollArea: {
        width: wp('100%'),
        // backgroundColor: "#AF6A25",
        overflow: "hidden",
        flex: 1,
        //marginBottom: -2969,
        top: hp('0.78125%'),
        marginLeft: wp('2.777%'),
        //fontSize : 25
      },
      scrollArea_contentContainerStyle: {
        width: wp('100%'),
        height: hp('137.5%'),
        flexDirection: "column",
      },
    idblock: {
        top: hp('14.0625%'),
        left: wp('2.777%'),
        flexDirection: "row",
        position: "absolute",
      },
    id1: {
        width: wp('8.5%'),
        height: hp('4.2%'),
        color: "rgba(70,31,0,1)",
        fontSize: 18,
        fontFamily: "roboto-700",
        marginTop: hp('2.8125%')
      },
    textInput8: {
        width: wp('56.6%'),
        color: "rgba(70,31,0,1)",
        fontSize: 18,
        borderColor: "rgba(250,244,244,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        marginLeft: wp('0.0%')
      },
    nameblock: {
        top: hp('21.875%'),
        left: 10,
        flexDirection: "row",
        position: "absolute",
      },
    name1: {
        width: wp('17%'),
        height: hp('4.2%'),
        color: "rgba(70,31,0,1)",
        fontSize: 18,
        fontFamily: "roboto-700",
        marginTop: hp('3.65625%')
      },
    textInput7: {
        width: wp('56.5%'),
        color: "rgba(70,31,0,1)",
        fontSize: 18,
        borderColor: "rgba(250,244,244,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        marginLeft:wp('0.0%')
      },
    name1Row: {
        height: hp('7.81%'),
        flexDirection: "row",
        flex: 1
      },
      addressBlock : {
        top: hp('32.03125%'),
        left: wp('2.777%'),
        position: "absolute",
      },
      address: {
        //left: 15,
        width: wp('30.83%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        //position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      addressBlock1 : {
          top : hp('2.34375%')
      },
      doorNumber: {
       // left: 15,
        width: wp('55.55%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        //position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      doorTextInput: {
        //left: 15,
        width: wp('91.66%'),
        height: hp('4.6%'),
        color: "#121212",
        //position: "absolute",
        borderColor: "rgba(252,246,246,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        fontSize : 18
      },
      street: {
        //left: 15,
        width: wp('55.55%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        //position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      streetTextInput: {
       //left: 15,
        width: wp('91.66%'),
        height: hp('4.6%'),
        color: "#121212",
        //position: "absolute",
        borderColor: "rgba(252,246,246,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        fontSize : 18
      },
      city: {
        //left: 15,
        width: wp('55.55%'),
        height: hp('5.46%'),
        color: "rgba(70,31,0,1)",
        //position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      cityTextInput: {
        //left: 15,
        width: wp('91.66%'),
        height: hp('4.6%'),
        color: "#121212",
        //position: "absolute",
        borderColor: "rgba(252,246,246,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        fontSize : 18
      },
      district: {
        //left: 15,
        width: wp('55.55%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        //position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      districtTextInput: {
        //left: 15,
        width: wp('91.66%'),
        height: hp('4.6%'),
        color: "#121212",
        //position: "absolute",
        borderColor: "rgba(252,246,246,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        fontSize : 18
      },
      state: {
       // left: 15,
        width: wp('55.55%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        //position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      stateTextInput: {
       // left: 15,
        width: wp('91.66%'),
        height: hp('4.6%'),
        color: "#121212",
        //position: "absolute",
        borderColor: "rgba(252,246,246,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        fontSize : 18
      },
      pin: {
        //left: 15,
        width: wp('55.55%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        //position: "absolute",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
      pinTextInput: {
       // left: 15,
        width: wp('91.66%'),
        height: hp('4.6%'),
        color: "#121212",
        //position: "absolute",
        borderColor: "rgba(252,246,246,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        fontSize : 18
      },
    emergencycontactblock: {
        top: hp('93.1875%'),
        left: wp('2.777%'),
        position: "absolute",
      },
    emergencyContact1: {
        width: wp('67.5%'),
        height: hp('5.4%'),
        color: "rgba(70,31,0,1)",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
    textInput5: {
        width: wp('86.6%'),
        height: hp('4.6%'),
        color: "rgba(70,31,0,1)",
        fontSize: 18,
        borderColor: "rgba(248,244,244,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        //marginTop: 5,
        //marginLeft: 10
      },
    contactnumberblock: {
        top: hp('103.125%'),
        left: wp('2.777%'),
        position: "absolute",
      },
    contactNumber2: {
        width: wp('67.5%'),
        height: hp('5.4%'),
        color: "rgba(70,31,0,1)",
        fontSize: 18,
        fontFamily: "roboto-700"
      },
    textInput4: {
        width: wp('86.6%'),
        height: hp('4.6%'),
        color: "rgba(70,31,0,1)",
        fontSize: 18,
        borderColor: "rgba(248,244,244,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        //marginTop: 5,
        //marginLeft: 2
      },
    roomdeatilsblock: {
        marginTop: hp('113.0625%'),
        marginLeft: wp('2.777%'),
        position: "absolute",
    },
    roomnumber: {
        width: wp('75.5%'),
        height: hp('5.4%'),
      color: "rgba(70,31,0,1)",
      fontSize: 18,
      fontFamily: "roboto-700"
    },
    textInput3: {
        width: wp('86.6%'),
        height: hp('4.6%'),
      color: "rgba(70,31,0,1)",
      fontSize: 18,
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      //marginTop: 11,
      //marginLeft: 2
    },
    
    weightblockRow: {
      marginTop: hp('123.5625%'),
        flexDirection: "row",
        marginLeft: wp('2.777%'),
        position: "absolute",
        //marginRight: 36
      },
      weightblock: {
        width: wp('35.27%'),
        height: hp('7.81%'),
      },
    weight: {
        //top: 0,
        //left: 18,
        position: "absolute",
        fontFamily: "roboto-700",
        color: "rgba(70,31,0,1)",
        fontSize: 18
      },
    textInput10: {
        top: hp('3.59375%'),
        left: wp('0.0%'),
        width: wp('27.7%'),
        height: hp('7.3%'),
        color: "rgba(70,31,0,1)",
        fontSize: 18,
        position: "absolute",
        borderColor: "rgba(250,246,246,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        right: 0
      },
    heightblock: {
        width: wp('35.27%'),
        height: hp('7.81%'),
        marginLeft: wp('16.111%')
      },
    height: {
        //top: 0,
        left: wp('6.944%'),
        position: "absolute",
        fontFamily: "roboto-700",
        color: "rgba(70,31,0,1)",
        fontSize: 18
      },
    textInput11: {
        top: hp('3.59375%'),
        //left: 0,
        width: wp('27.7%'),
        height: hp('7.3%'),
        color: "rgba(70,31,0,1)",
        fontSize: 18,
        position: "absolute",
        borderColor: "rgba(250,246,246,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        right: 0
      },
      bottomTab: {
        //width: 356,
        //height: 79,
        marginTop: hp('92.65625%'),
        //marginLeft: 27
      },
    
      
    
    
   
   
    
   
    
    
   
    rect1: {
      backgroundColor: "rgba(230, 230, 230,1)",
      borderRadius: 40,
      borderColor: "#000000",
      borderWidth: 0,
      flexDirection: "row",
      flex: 1
    },
    button5: {
      width: 42,
      height: 44,
      marginTop: 1
    },
    image5: {
      height: 44
    },
    button4: {
      width: 42,
      height: 44,
      marginLeft: 22
    },
    image4: {
      width: 42,
      flex: 1
    },
    button3: {
      width: 42,
      height: 44,
      marginLeft: 22,
      marginTop: 1
    },
    image3: {
      width: 40,
      height: 40
    },
    button2: {
      width: 42,
      height: 44,
      marginLeft: 23
    },
    image2: {
      flex: 1
    },
    button1: {
      width: 42,
      height: 44,
      marginLeft: 18
    },
    image1: {
      flex: 1
    },
    button5Row: {
      height: 45,
      flexDirection: "row",
      flex: 1,
      marginRight: 15,
      marginLeft: 11,
      marginTop: 14
    }
  });
  export default styles;