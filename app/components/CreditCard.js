import React, { Component } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

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

      alert("You have top up RM" + total_count);
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Amount</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(amount) => this.setState({ amount })}
          keyboardType="numeric"
        />

        <Text>Payment Method (Online banking/Credit card)</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(method) => this.setState({ method })}
        />

        <Text>Top Up Amount: {this.state.amount}</Text>
        <Button onPress={this.calculate} title="Top up" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  header: {
    marginTop: 60,
    fontSize: 30,
    textAlign: "center",
    margin: 10,
  },
});
