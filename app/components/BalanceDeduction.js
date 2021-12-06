
//Nur Sabrina Fasha binti Zaidi Sham 1813526//
import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AppTextInput from "./AppTextInput";
import colors from "../config/colors";
import { styles } from "../config/styles";

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
        <View style={styles.info}>

          <Text style={styles.pageTitle}>CURRENT BALANCE (RM):</Text>
          <Text style={styles.balanceNumber}>{balance}</Text>

        </View>
        
        <View style={ styles.box }>
          <Text style={ styles.label }>ITEM</Text>
          <AppTextInput
            placeholder="Item Description"
            placeholderTextColor={colors.grey}
            width="100%"
            //value={this.state.balance}
            //onChangeText={(balance) => this.setState({ balance })}
          />

          <Text style= { styles.label }>PRICE</Text>
          <AppTextInput
            placeholder="Price"
            placeholderTextColor={ colors.grey }
            width="100%"
            keyboardType="numbers-and-punctuation"
            maxLength={8}
            //value={this.state.word}
            //onChangeText={(word) => this.setState({ word })}
          />

          <Text style={ styles.label }>CURRENT TIME (in hours)</Text>
          <AppTextInput
            placeholder="Hour"
            placeholderTextColor="grey"
            width="100%"
            keyboardType="numbers-and-punctuation"
            maxLength={4}
            value={this.state.hour}
            onChangeText={(hour) => this.setState({ hour })}
          />

          <View style={{ flexDirection: "row" }}>

            <View style={{ flex:1 }}>
                <Text style={styles.label}>PRICE AFTER DISCOUNT:</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{
                fontSize: 15,
                fontWeight: "bold",
                color: colors.white,
                marginVertical: 10,
              }}>
                {this.state.payment}
              </Text>

            </View>

          </View>
 
          <View
            style={{
              flexDirection:"row",
              justifyContent: "center",
              marginVertical: 20
            }}
          >
            <TouchableOpacity
              onPress={() =>
                Alert.alert("Payment Successful!", "Check your balance")
              }
              onPress={this.setDeduct}
              style={{
                backgroundColor: colors.green,
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                padding: 15,
                borderRadius: 25
              }}
              >
              <View>
                <Text style={ styles.buttonText}>CONFIRM PAYMENT</Text>
              </View>
              
            </TouchableOpacity>

          </View> 

        </View>

      </>
    );
  }
}

export default BalanceDeduction;
//Nur Sabrina Fasha binti Zaidi Sham 1813526//
