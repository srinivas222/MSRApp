import React, { Component  } from "react";
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


export default class  SadhakasHealthTrackInfoDropDown extends Component {
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

