
//Nor Aliah binti Noor Azman 1814422//
import React, { Component } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import colors from "../config/colors";
import { styles } from "../config/styles";
import AppTextInput from "./AppTextInput";

export default class CreditCard extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      total: 0,
      method: "",
    };

    this.calculate = () => {
      let amount_count = parseFloat(this.state.amount);
      let total_count = 0;
      let str = this.state.method;
      let cashback = 0.5;

      if (str == "Credit card") {
        total_count = amount_count + cashback;
      } else if (str == "Online banking") {
        total_count = amount_count;
      }

      this.setState({ total_count: total_count});

      alert("You have top up RM" + total_count);
    };
  }

  render() {
    return (

        <View style={styles.box}>
          <Text style={styles.label}>AMOUNT (RM)</Text>
          <AppTextInput
            placeholder="Amount"
            placeholderTextColor="grey"
            width="100%"
            onChangeText={(amount) => this.setState({ amount })}
            keyboardType="numeric"
          />

          <Text style={styles.label}>PAYMENT METHOD (Online banking/Credit card)</Text>
          <AppTextInput
            placeholder="Method"
            placeholderTextColor="grey"
            width="100%"
            onChangeText={(method) => this.setState({ method })}
          />

          <View style={{ flexDirection: "row" }}>

            <View style={{ flex:1 }}>
                <Text style={styles.label}>TOP UP AMOUNT (RM): </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{
                fontSize: 16,
                fontWeight: "bold",
                color: colors.white,
                marginVertical: 10,
                fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
              }}>
                {this.state.amount}
              </Text>

            </View>

          </View>
          
          <View style={{
            flexDirection:"row",
            justifyContent: "center",
            marginVertical: 20
          }}>

            <TouchableOpacity
              onPress={this.calculate}
              style={{
                backgroundColor: colors.green,
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                padding: 15,
                borderRadius: 25
              }}
            >
              <Text style={ styles.buttonText }>TOP UP</Text>
            </TouchableOpacity>

          </View>

        </View>
        
    );
  }
}
//Nor Aliah binti Noor Azman 1814422//
