import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";

import colors from "../config/colors";

class Discount extends Component {
  constructor() {
    super();
    this.state = {
      discount: 0.1,
      balance: 50,
      hour: 0,
      payment: 0,
    };
  }

  setDiscount = () => {
    let discount = this.state.discount;
    let balance = this.state.balance;
    let payment = this.state.payment;
    let hour = this.state.hour;

    if (hour >= 12 && hour < 14) {
      balance = balance - payment * discount;
    } else if (hour >= 20 && hour < 22) {
      balance = balance - payment * discount;
    } else {
      balance = this.state.balance;
    }
    this.setState({ balance: balance });
  };

  render() {
    return (
      <>
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.balanceTitle}>CURRENT BALANCE:</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.balanceNumber}>RM{this.state.balance}</Text>
        </View>

        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
          <Text style={styles.about}>ITEM</Text>
          <TextInput
            placeholder="Item Description"
            placeholderTextColor="grey"
            width="100%"
            value={this.state.word}
            onChangeText={(word) => this.setState({ word })}
          />

          <Text style={styles.about}>TOTAL PAYMENT</Text>
          <TextInput
            placeholder="Price"
            placeholderTextColor="grey"
            width="50%"
            keyboardType="numbers-and-punctuation"
            maxLength={8}
            value={this.state.payment}
            onChangeText={(payment) => this.setState({ payment })}
          />

          <Text style={styles.about}>CURRENT TIME (in hours)</Text>
          <TextInput
            placeholder="Hour"
            placeholderTextColor="grey"
            width="50%"
            keyboardType="numbers-and-punctuation"
            maxLength={2}
            value={this.state.hour}
            onChangeText={(hour) => this.setState({ hour })}
          />

          <View
            style={{
              marginVertical: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() =>
                Alert.alert("Eligible for 10% discount!", "Check your balance")
              }
              onPress={this.setDiscount}
              style={{
                backgroundColor: "grey",
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
                padding: 15,
                width: "100%",
                marginVertical: 10,
              }}
            >
              <View>
                <Text
                  style={{
                    // color: "",
                    fontSize: 18,
                    textTransform: "uppercase",
                    //fontWeight: "bold",
                  }}
                >
                  CONFIRM PAYMENT
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  balanceTitle: {
    fontWeight: "bold",
    fontSize: 15,
  },

  about: {
    color: colors.grey,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginVertical: 10,
    justifyContent: "flex-start",
    // textAlign: "justify",
    lineHeight: 19,
  },

  balanceNumber: {
    color: colors.black,
    fontSize: 60,
    fontWeight: "bold",
    justifyContent: "center",
  },

  balanceTitle: {
    color: colors.grey,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginVertical: 10,
    justifyContent: "center",
    //textAlign: "justify",
    lineHeight: 19,
  },

  about: {
    color: colors.grey,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginVertical: 10,
    justifyContent: "flex-start",
    // textAlign: "justify",
    lineHeight: 19,
  },
});

export default Discount;
