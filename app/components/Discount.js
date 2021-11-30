import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Component } from "react";

export default class Discount extends Component {

constructor(){
	super();
	this.state = {
		balance: '',
		disc: 0.1,
	};
}

Discount(){

	let bal = this.state.balance;
	var day = new Date();
	var hour = day.getHour();
	var disc = 0.1;
	var amt;

	if (hour >= 12 && hr < 14)
		amt = bal-(bal*disc);

	else if (hour >= 20 && hr < 22)
		amt = bal-(bal*disc);

	else
		amt = bal;

	this.setState({
		totalamt = amt
	});
}

render(){
    return(
        <>
        <View>
          <Text style={styles.title}>WORD ANALYZER</Text>
        </View>
        <View>
          <AppTextInput
            placeholder="Enter a word"
            placeholderTextColor={colors.grey}
            value={this.state.word}
            onChangeText={(word) => this.setState({ word })}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={this.calculate}>
            <Text style={styles.buttonTitle}>Calculate</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.result}>Your Word: </Text>
          <Text style={styles.word}>{this.state.word}</Text>
          <Text style={styles.result}>
            Number of Vowels: {this.state.vowel}
          </Text>
          <Text style={styles.result}>
            Number of Consonants: {this.state.consonant}
          </Text>
          <Text style={styles.result}>
            Number of Alphabets: {this.state.alphabet}
          </Text>
        </View>
      </>
     );
    }
  }

  export default Discount;