import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AppTextInput from "./AppTextInput";
import colors from "../config/colors";

class BalanceDeduction extends Component {
  state = { balance: 60 };

  setDeduct = () =>
    this.setState((initialState) => ({
      ...initialState,
      balance: this.state.balance - 12,
    }));

  render() {
    const { balance } = this.state;

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
          <Text style={styles.balanceNumber}>RM{balance}</Text>
        </View>

        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
          <Text style={styles.about}>ITEM</Text>
          <AppTextInput
            placeholder="Item Description"
            placeholderTextColor={colors.grey}
            width="100%"
            value={this.state.balance}
            onChangeText={(balance) => this.setState({ balance })}
          />

          <Text style={styles.about}>TOTAL PAYMENT</Text>
          <AppTextInput
            placeholder="Price"
            placeholderTextColor={colors.grey}
            width="50%"
            keyboardType="numbers-and-punctuation"
            maxLength={8}
            //value={this.state.word}
            //onChangeText={(word) => this.setState({ word })}
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
                Alert.alert("Payment Successful!", "Check your balance")
              }
              onPress={this.setDeduct}
              style={{
                backgroundColor: colors.darkGrey,
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
                    color: colors.white,
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

  balanceNumber: {
    color: colors.black,
    fontSize: 60,
    fontWeight: "bold",
    justifyContent: "center",
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

export default BalanceDeduction;
