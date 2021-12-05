import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import AppTextInput from "./AppTextInput";
import colors from "../config/colors";
import { styles } from "../config/styles";

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
    
    //condition discount
    if (hour >= 1200 && hour < 1400) {
      payment = payment - ( payment * discount );
      balance = balance - payment;
    } else if (hour >= 2000 && hour < 2200) {
      payment = payment - ( payment * discount );
      balance = balance - payment;
    } else {
      balance = balance - payment;
    }

    //return latest balance after discount
    this.setState({ balance : balance });
    this.setState({ payment : payment });
  };

  render() {
    return (
      <>
        <View style={ styles.info } >

          <Text style={ styles.pageTitle }>CURRENT BALANCE:</Text>
          <Text style={styles.balanceNumber}>RM{this.state.balance}</Text>

        </View>

        <View style={styles.box}>

          <Text style={styles.label}>ITEM</Text>
          <AppTextInput
            placeholder="Item Description"
            placeholderTextColor="grey"
            width="100%"
            value={this.state.word}
            onChangeText={(word) => this.setState({ word })}
          />

          <Text style={styles.label}>TOTAL PAYMENT</Text>
          <AppTextInput
            placeholder="Price"
            placeholderTextColor="grey"
            width="100%"
            keyboardType="numbers-and-punctuation"
            maxLength={8}
            value={this.state.payment}
            onChangeText={(payment) => this.setState({ payment })}
          />

          <Text style={styles.label}>CURRENT TIME (in hours)</Text>
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
                fontSize: 16,
                fontWeight: "bold",
                color: colors.white,
                marginVertical: 10,
                fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
              }}>
                {this.state.payment}
              </Text>

            </View>

          </View>
          
          <View style={{
            flexDirection:"row",
            justifyContent: "center",
            marginVertical: 20
          }}>

            <TouchableOpacity
              onPress={this.setDiscount}
              style={{
                backgroundColor: colors.green,
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                padding: 15,
                borderRadius: 25
              }}
            >
              <Text style={ styles.buttonText }>CONFIRM PAYMENT</Text>
            </TouchableOpacity>

          </View>

        </View>

      </>

    );
  }
}

export default Discount;
