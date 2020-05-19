import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import MaterialCheckbox from "../components/MaterialCheckbox";
import MaterialCheckbox1 from "../components/MaterialCheckbox1";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import styles from "../styles/Cautiondeposite_styles";

function Cautiondeposite(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image7Stack}>
        <ImageBackground
          source={require("../assets/images/logo5.png")}
          resizeMode="contain"
          style={styles.image7}
          imageStyle={styles.image7_imageStyle}>
        </ImageBackground>
        <View style={styles.header}>
          <View style={styles.rect5}>
            <Text style={styles.text4}>Caution Deposite</Text>
          </View>
        </View>
        <View style={styles.sadhakasIdBlock}>
          <Text style={styles.sadhakasId}>Sadhaka&#39;s ID :</Text>
          <TextInput placeholder="" style={styles.sadhakastextinput1}></TextInput>
        </View>
        <View style={styles.amountPaidBlock}>
          <Text style={styles.amountPaid1}>Amount Paid :</Text>
          <TextInput
            placeholder="Amount Paid"
            style={styles.amountpaidtextinput1}
          ></TextInput>
        </View>
        <View style={styles.balanceAndStatementBlock}>
          <View>
            <Text style={styles.balance1}>Balance :</Text>
            <TextInput placeholder="" style={styles.balancetextinput1}></TextInput>
          </View>
          <View>
            <Text style={styles.viewStatement1}>View Statement :</Text>
            <TouchableOpacity style={styles.statement1}>
              <FeatherIcon name="file" style={styles.icon3}></FeatherIcon>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.depositeBlock}>
          <Text style={styles.depositeMoney}>Deposite Money :</Text>
          <TouchableOpacity style={styles.payment1}>
            <FontAwesomeIcon
              name="credit-card"
              style={styles.icon4}
            ></FontAwesomeIcon>
          </TouchableOpacity>
        </View>
        <View style={styles.dischargegroup}>
          <View style={styles.materialCheckbox1Stack}>
            <MaterialCheckbox1
              style={styles.materialCheckbox1}
            ></MaterialCheckbox1>
            <Text style={styles.loremIpsum}>Start Discharge Formalites</Text>
          </View>
        </View>
        <View style={styles.tandC}>
          <View style={styles.iAgreeTc1Stack}>
            <Text style={styles.iAgreeTc1}>I Agree T &amp; C</Text>
            <MaterialCheckbox
              button1="Cautiondeposite"
              style={styles.materialCheckbox2}
            ></MaterialCheckbox>
          </View>
        </View>
        <View style={styles.backRow}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Homepage")}
          style={styles.back}
        >
          <View style={styles.rect4}>
            <Text style={styles.back1}>Back</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Homepage")}
          style={styles.confirm}
        >
          <View style={styles.rect3}>
            <Text style={styles.confirm1}>Confirm</Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
      


    </View>
  );
}



export default Cautiondeposite;