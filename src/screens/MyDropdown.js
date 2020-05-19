/*This is an Example of Searchable Dropdown*/
import React, { Component } from 'react';
//import react in our project
import { View, Text } from 'react-native';
//import basic react native components
import SearchableDropdown from 'react-native-searchable-dropdown';
//import SearchableDropdown component

//Item array for the dropdown
var items = [
  //name key is must.It is to show the text in front
  { id: 1, name: 'angellist' },
  { id: 2, name: 'codepen' },
  { id: 3, name: 'envelope' },
  { id: 4, name: 'etsy' },
  { id: 5, name: 'facebook' },
  { id: 6, name: 'foursquare' },
  { id: 7, name: 'github-alt' },
  { id: 8, name: 'github' },
  { id: 9, name: 'gitlab' },
  { id: 10, name: 'instagram' },
];
export default class App extends Component {
  constructor() {
    super();
    state : {
        itemName : ""
    };
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: 30 }}>
        <Text style={{ marginLeft: 10 }}>
          Searchable Dropdown from Static Array
        </Text>
        <SearchableDropdown
         // onTextChange={text => console.log(text)}
         onValueChange={(item, itemIndex) => setState(item)}
          //On text change listner on the searchable input
          onItemSelect={item => console.log(JSON.stringify(item.name))}
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 5 }}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
            fontSize : 50
          }}
          itemStyle={{
            //single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            //single dropdown item's text style
            color: '#222',
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            maxHeight: '60%',
          }}
          items={items}
          //mapping of item array
          defaultIndex={1}
          //default selected item index
          //placeholder="placeholder"
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
        />
        
      </View>
    );
  }
}
