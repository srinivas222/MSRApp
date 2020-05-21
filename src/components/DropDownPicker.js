import React, { Component  } from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Picker
} from "react-native";

export default class DropDownPicker extends Component {
    render(){
        return(
            <View>
                <View style={styles.btdropdown1}>
                <DropDownPicker1 />
                </View>
                <View style={styles.btdropdown2}>
                <DropDownPicker2 />
                </View>
                <View style={styles.btdropdown3}>
                <DropDownPicker3 />
                </View>
                <View style={styles.btdropdown4}>
                <DropDownPicker4 />
                </View>
            </View>
        );
    }

}

class  DropDownPicker1 extends Component {
    //const [selectedValue1, setSelectedValue1] = useState("dropdown1");
    state = {
        selectedValue1 : "dropdown1"
    }
    render(){
       // console.log(selectedValue1);
       var myloop = [];
       for(let i = 0; i < 15; i++){
        myloop.push(
        <Picker.Item key={i} label={"Dropdown"+i.toString()} value={"dropdown"+i} />
        );
          }
    return (
       
            <Picker
        selectedValue={this.state.selectedValue1}
        style = {{color: "white"}}
        onValueChange={(itemValue, itemIndex) => this.setState({selectedValue1 :itemValue})}
      >
        {myloop}
        
        </Picker>
       
    );
}
}

class DropDownPicker2 extends Component {
    //const [selectedValue2, setSelectedValue2] = useState("dropdown2");
    state = {
        selectedValue2 : "dropdown2"
    }
    render(){
      var myloop = [];
       for(let i = 0; i < 15; i++){
        myloop.push(
        <Picker.Item key={i} label={"Dropdown"+i.toString()} value={"dropdown"+i} />
        );
          }
    return (
       
            <Picker
        selectedValue={this.state.selectedValue2}
        style = {{color: "white"}}
        onValueChange={(itemValue, itemIndex) => this.setState({selectedValue2:itemValue})}
      >
        {myloop}
        
        </Picker>
       
    );
}
}

class DropDownPicker3 extends Component  {
    //const [selectedValue3, setSelectedValue3] = useState("dropdown3");
    state = {
        selectedValue3 : "dropdown3"
    }
    render(){
      var myloop = [];
       for(let i = 0; i < 15; i++){
        myloop.push(
        <Picker.Item key={i} label={"Dropdown"+i.toString()} value={"dropdown"+i} />
        );
          }
    return (
       
            <Picker
        selectedValue={this.state.selectedValue3}
        style = {{color: "white"}}
        onValueChange={(itemValue, itemIndex) => this.setState({selectedValue3:itemValue})}
      >
        {myloop}
        
        </Picker>
        
    );
}
}

class DropDownPicker4 extends Component {
    //const [selectedValue4, setSelectedValue4] = useState("dropdown4");
    state = {
        selectedValue4 : "dropdown4"
    }
    render(){
      var myloop = [];
       for(let i = 0; i < 15; i++){
        myloop.push(
        <Picker.Item key={i} label={"Dropdown"+i.toString()} value={"dropdown"+i} />
        );
          }
    return (
        
        <Picker
        selectedValue={this.state.selectedValue4}
        style = {{color: "white"}}
        onValueChange={(itemValue, itemIndex) => this.setState({selectedValue4 : itemValue})}
      >
        {myloop}
        
        </Picker>
        
    );
}
}

 const styles = StyleSheet.create({
    btdropdown1: {
        flex: 1,
        top: hp('4.68%'),
        left: wp('0.8888%'),
        width: wp('55.55%'),
        height: hp('7.8125%'),
        color: "white",
        position: "absolute",
        transform: [
          { scaleX: 1.0 }, 
          { scaleY: 1.0 },
       ]
      },
      btdropdown2: {
        flex: 1,
        top: hp('10.9375%'),
        left: wp('0.8888%'),
        width: wp('55.55%'),
        height:  hp('7.8125%'),
        color: "white",
        position: "absolute",
        transform: [
          { scaleX: 1.0 }, 
          { scaleY: 1.0 },
       ]
      },
      btdropdown3: {
        flex: 1,
        top: hp('17.1875%'),
        left: wp('0.8888%'),
        width: wp('55.55%'),
        height:  hp('7.8125%'),
        color: "white",
        position: "absolute",
        transform: [
          { scaleX: 1.0 }, 
          { scaleY: 1.0 },
       ]
      },
      btdropdown4: {
        flex: 1,
        top: hp('23.4375%'),
        left: wp('0.8888%'),
        width: wp('55.55%'),
        height:  hp('7.8125%'),
        color: "white",
        position: "absolute",
        transform: [
          { scaleX: 1.0 }, 
          { scaleY: 1.0 },
       ]
      },
 })