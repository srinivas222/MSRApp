import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(175,106,37,1)"
    },
    imageStack: {
        top: 130,
        left: 0,
        height: hp('80%'),
        position: "absolute",
        right: 0
      },
    image: {
      top: 47,
      height: hp('57%'),
      position: "absolute",
      left: 0,
      right: 0
    },
    image_imageStyle: {
      opacity: 0.2
    },
    header: {
        top: 30,
        left: 25,
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
        fontSize: 25,
        textAlign : "center",
        marginTop: 15,
        marginLeft: 22
      },
    idblock: {
        top: 90,
        left: 10,
        flexDirection: "row",
        position: "absolute",
      },
    id1: {
        width: wp('10.5%'),
        height: hp('4.2%'),
        color: "rgba(70,31,0,1)",
        fontSize: 25,
        fontFamily: "roboto-700",
        marginTop: 18
      },
    textInput8: {
        width: wp('56.6%'),
        color: "rgba(70,31,0,1)",
        fontSize: 25,
        borderColor: "rgba(250,244,244,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        marginLeft: 9
      },
    nameblock: {
        top: 140,
        left: 10,
        flexDirection: "row",
        position: "absolute",
      },
    name1: {
        width: wp('23%'),
        height: hp('4.2%'),
        color: "rgba(70,31,0,1)",
        fontSize: 25,
        fontFamily: "roboto-700",
        marginTop: 17
      },
    textInput7: {
        width: wp('56.5%'),
        color: "rgba(70,31,0,1)",
        fontSize: 25,
        borderColor: "rgba(250,244,244,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        marginLeft: 7
      },
    name1Row: {
        height: 50,
        flexDirection: "row",
        flex: 1
      },
    addressblock: {
        top: 210,
        left: 10,
        position: "absolute",
      },
    address1: {
        width: wp('30.83%'),
        height: hp('4.21%'),
        color: "rgba(70,31,0,1)",
        fontSize: 25,
        fontFamily: "roboto-700"
      },
    textInput6: {
        width: wp('86.9%'),
        height: hp('7.03%'),
        color: "rgba(70,31,0,1)",
        fontSize: 25,
        borderColor: "rgba(252,246,246,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        //marginTop: 49,
        //marginLeft: 10
      },
    emergencycontactblock: {
        top: 290,
        left: 10,
        position: "absolute",
      },
    emergencyContact1: {
        width: wp('67.5%'),
        height: hp('5.4%'),
        color: "rgba(70,31,0,1)",
        fontSize: 25,
        fontFamily: "roboto-700"
      },
    textInput5: {
        width: wp('86.6%'),
        height: hp('4.6%'),
        color: "rgba(70,31,0,1)",
        fontSize: 25,
        borderColor: "rgba(248,244,244,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        //marginTop: 5,
        //marginLeft: 10
      },
    contactnumberblock: {
        top: 365,
        left: 10,
        position: "absolute",
      },
    contactNumber2: {
        width: wp('67.5%'),
        height: hp('5.4%'),
        color: "rgba(70,31,0,1)",
        fontSize: 25,
        fontFamily: "roboto-700"
      },
    textInput4: {
        width: wp('86.6%'),
        height: hp('4.6%'),
        color: "rgba(70,31,0,1)",
        fontSize: 25,
        borderColor: "rgba(248,244,244,1)",
        borderWidth: 0,
        borderBottomWidth: 2,
        fontFamily: "roboto-regular",
        //marginTop: 5,
        //marginLeft: 2
      },
    roomdeatilsblock: {
        marginTop: 440,
        marginLeft: 10,
        position: "absolute",
    },
    roomnumber: {
        width: wp('75.5%'),
        height: hp('5.4%'),
      color: "rgba(70,31,0,1)",
      fontSize: 25,
      fontFamily: "roboto-700"
    },
    textInput3: {
        width: wp('86.6%'),
        height: hp('4.6%'),
      color: "rgba(70,31,0,1)",
      fontSize: 25,
      borderColor: "rgba(248,244,244,1)",
      borderWidth: 0,
      borderBottomWidth: 2,
      fontFamily: "roboto-regular",
      //marginTop: 11,
      //marginLeft: 2
    },
    
    weightblockRow: {
        //height: 78,
        flexDirection: "row",
        marginTop: 510,
        marginLeft: 10,
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
        fontSize: 25
      },
    textInput10: {
    top: 23,
        left: 0,
        width: wp('27.7%'),
        height: hp('7.3%'),
        color: "rgba(70,31,0,1)",
        fontSize: 25,
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
        marginLeft: 58
      },
    height: {
        //top: 0,
        left: 25,
        position: "absolute",
        fontFamily: "roboto-700",
        color: "rgba(70,31,0,1)",
        fontSize: 25
      },
    textInput11: {
        top: 23,
        //left: 0,
        width: wp('27.7%'),
        height: hp('7.3%'),
        color: "rgba(70,31,0,1)",
        fontSize: 25,
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
        marginTop: 625,
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