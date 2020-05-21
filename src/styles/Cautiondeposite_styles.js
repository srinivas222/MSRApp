import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(175,106,37,1)"
  },
  image7Stack: {
    width: wp('100%'),
    height: hp('65.31%'),
    marginTop: 217,
    marginLeft: 1
  },
  image7: {
    top: 7,
    left: 0,
    width: wp('100%'),
    height: hp('58.43%'),
    position: "absolute"
  },
  image7_imageStyle: {
    opacity: 0.2
  },
  header: {
    top: -180,
    left: 33,
    width: wp('89.16%'),
    height: hp('12.03%'),
    
  },
  rect5: {
    width: wp('85.55%'),
    height: hp('11.25%'),
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
    width: wp('45%'),
    height: hp('4.21%'),
    color: "rgba(70,31,0,1)",
    fontSize: 25,
    fontFamily: "roboto-700",
  },
  sadhakastextinput1: {
    width: wp('86.94%'),
    height: hp('5.62%'),
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
    width: wp('45.83%'),
    height: hp('4.68%'),
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  amountpaidtextinput1: {
    width: wp('86.94%'),
    height: hp('5.62%'),
    color: "#121212",
    borderColor: "rgba(250,247,247,1)",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontFamily: "roboto-regular",
    marginTop: 30,
    fontSize : 25
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
    width: wp('30%'),
    height: hp('4.21%'),
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  balancetextinput1: {
    top: 30,
    //left: 39,
    width: wp('27.77%'),
    height: hp('5.62%'),
    color: "#121212",
    position: "absolute",
    borderColor: "rgba(250,247,247,1)",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontFamily: "roboto-regular",
    fontSize : 25,
  },
  viewStatement1: {
    //top: 75,
    left: 140,
    width: wp('55.27%'),
    height: hp('4.21%'),
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  statement1: {
    top: 50,
    left: 220,
    width: wp('14.44%'),
    height: hp('8.28%'),
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
    width: wp('56.38%'),
    height: hp('5.46%'),
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  payment1: {
    top: 20,
    left: 200,
    width: wp('31.11%'),
    height: hp('16.71%'),
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
    width: wp('96.94%'),
    height: hp('6.71%'),
    position: "absolute"
  },
  materialCheckbox1Stack: {
    width: wp('96.94%'),
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
    width: wp('86.94%'),
    height: hp('5.46%'),
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  tandC: {
    top: 340,
    //left: 10,
    width: wp('58.05%'),
    height: hp('10.93%'),
    position: "absolute"
  },
  iAgreeTc1Stack: {
    width: wp('58.05%'),
    flex: 1
  },
  iAgreeTc1: {
    top: 19,
    left: 57,
    width: wp('42.22%'),
    height: hp('5.46%'),
    color: "rgba(70,31,0,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-700"
  },
  materialCheckbox2: {
    top: 0,
    left: 0,
    width: wp('18.61%'),
    position: "absolute",
    bottom: 0
  },
  backRow: {
    top : 330,
    height: hp('7.81%'),
    flexDirection: "row",
    marginLeft: 43,
    marginRight: 42
  },
  back: {
    width: wp('38.33%'),
    height: hp('7.65%'),
    marginTop: 1
  },
  rect4: {
    width: wp('36.66%'),
    height: hp('7.18%'),
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
    width: wp('38.33%'),
    height: hp('7.65%'),
    marginLeft: 14
  },
  rect3: {
    width: wp('36.66%'),
    height: hp('7.18%'),
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