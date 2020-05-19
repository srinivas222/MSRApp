import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(175,106,37,1)"
  },
  image7Stack: {
    width: 365,
    height: 418,
    marginTop: 217,
    marginLeft: 1
  },
  image7: {
    top: 7,
    left: 0,
    width: 365,
    height: 374,
    position: "absolute"
  },
  image7_imageStyle: {
    opacity: 0.2
  },
  header: {
    top: -180,
    left: 33,
    width: 321,
    height: 77,
    
  },
  rect5: {
    width: 308,
    height: 72,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0
  },
  text4: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    marginTop: 23,
    marginLeft: 58
  },
  sadhakasIdBlock : {
    marginTop: -170,
    marginLeft: 20
  },
  sadhakasId: {
    width: 162,
    height: 27,
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
  },
  sadhakastextinput1: {
    width: 313,
    height: 36,
    color: "#121212",
    borderColor: "rgba(250,247,247,1)",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontFamily: "roboto-regular",
    //marginTop: -516,
    //marginLeft: 40
  },
  amountPaidBlock : {
    marginTop: 20,
    marginLeft: 20
  },
  amountPaid1: {
    //top: 0,
    //left: 38,
    width: 165,
    height: 30,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  amountpaidtextinput1: {
    width: 313,
    height: 36,
    color: "#121212",
    borderColor: "rgba(250,247,247,1)",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontFamily: "roboto-regular",
    marginTop: 30,
    fontSize : 20
   // marginLeft: 39
  },
  balanceAndStatementBlock : {
    marginTop: 30,
    marginLeft: 20,
    flexDirection : "row"
  },
  balance1: {
    //top: 75,
    //left: 38,
    width: 108,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  balancetextinput1: {
    top: 30,
    //left: 39,
    width: 100,
    height: 36,
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(250,247,247,1)",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontFamily: "roboto-regular",
    fontSize : 20,
  },
  viewStatement1: {
    //top: 75,
    left: 140,
    width: 199,
    height: 27,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  statement1: {
    top: 50,
    left: 220,
    width: 52,
    height: 53,
    position: "absolute"
  },
  icon3: {
    color: "rgba(70,31,0,1)",
    fontSize: 50,
    flex: 1
  },
  depositeBlock : {
    top: 110,
    left: 20,
  },
  depositeMoney: {
    width: 203,
    height: 35,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  payment1: {
    top: 20,
    left: 200,
    width: 112,
    height: 107,
    position: "absolute"
  },
  icon4: {
    color: "rgba(70,31,0,1)",
    fontSize: 100,
    flex: 1
  },
  dischargegroup: {
    top: 307,
    left: 9,
    width: 349,
    height: 43,
    position: "absolute"
  },
  materialCheckbox1Stack: {
    width: 349,
    flex: 1
  },
  materialCheckbox1: {
    top: 0,
    left: 0,
    width: 42,
    //height : 40,
    position: "absolute",
    bottom: 0
  },
  loremIpsum: {
    top: 7,
    left: 36,
    width: 313,
    height: 35,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  tandC: {
    top: 340,
    //left: 10,
    width: 209,
    height: 70,
    position: "absolute"
  },
  iAgreeTc1Stack: {
    width: 209,
    flex: 1
  },
  iAgreeTc1: {
    top: 19,
    left: 57,
    width: 152,
    height: 35,
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  materialCheckbox2: {
    top: 0,
    left: 0,
    width: 67,
    position: "absolute",
    bottom: 0
  },
  backRow: {
    top : 330,
    height: 50,
    flexDirection: "row",
    marginLeft: 43,
    marginRight: 42
  },
  back: {
    width: 138,
    height: 49,
    marginTop: 1
  },
  rect4: {
    width: 132,
    height: 46,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40
  },
  back1: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign : "center",
    marginTop: 5,
    //marginLeft: 35
  },
  confirm: {
    width: 138,
    height: 49,
    marginLeft: 14
  },
  rect3: {
    width: 132,
    height: 46,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 40
  },
  confirm1: {
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign : "center",
    marginTop: 5,
    //marginLeft: 24
  },
  bottomTab : {
    top : 550,
  }
});
  export default styles;