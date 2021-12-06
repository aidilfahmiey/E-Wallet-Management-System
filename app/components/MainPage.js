
//Muhammad Aidil Fahmiey bin Osman 1819369//
import React, { Component } from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import AppTextInput from "./AppTextInput";
import { styles } from "../config/styles";
import colors from "../config/colors";

class MainPage extends Component {
  constructor() {
    super();
    var initDate = new Date(),
      dateInit =
        initDate.getDate() +
        "/" +
        (initDate.getMonth() + 1) +
        "/" +
        initDate.getFullYear();

    this.state = {
      balance: 3980,
      amount: [100, 20, 900],
      details: ["Lazada", "Shopee", "Nike"],
      initDate: ["20/9/2021", "25/10/2021", "29/11/2021"],
      valueInput: "",
      textInput: "",
      currentDate: dateInit,
      totalSpend: 1020,
    };
  }

  addDetails = () => {
    this.setState((prevState) => {
      return {
        valueInput: "",
        amount: [...prevState.amount, prevState.valueInput],
      };
    });
    this.setState((prevState) => {
      return {
        textInput: "",
        details: [...prevState.details, prevState.textInput],
      };
    });
    this.setState((prevState) => {
      return {
        initDate: [...prevState.initDate, this.state.currentDate],
      };
    });
    Alert.alert(
      "You have paid RM" +
        this.state.valueInput +
        " for " +
        this.state.textInput
    );
    // this.state.balance -= this.state.valueInput;
    this.state.balance -= this.state.valueInput;
    let numB = Number(this.state.totalSpend);
    let numV = Number(this.state.valueInput);
    this.state.totalSpend = numB + numV;
  };

  render() {
    return (
      <View style={styles.container}>
        
        {/* E-Wallet Balance */}
        <View style={styles.info}> 

          <Text style={styles.pageTitle}>MY BALANCE (RM):</Text>
          <Text style={styles.balanceNumber}>{this.state.balance}</Text>

        </View>

        {/* Button Topup and Pay */}
        <View style={styles.buttonView}>

          {/* Topup Button */}
          <TouchableOpacity
            onPress={this.countTotal}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Top Up</Text>
          </TouchableOpacity>

          {/* Pay Button */}
          <TouchableOpacity
            onPress={this.addDetails}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Pay</Text>
          </TouchableOpacity>

        </View>

        {/* e-Wallet Transactions */}
        <View style={styles.box}>

          {/* details input */}
          <Text style={styles.label}>DETAILS</Text>

          <AppTextInput
            placeholder="Enter Details Here"
            onChangeText={(textInput) => this.setState({ textInput })}
            underlineColorAndroid="transparent"
          />

          {/* amount input */}
          <Text style={styles.label}>AMOUNT</Text>

          <AppTextInput
            placeholder="Enter Value Here"
            onChangeText={(valueInput) => this.setState({ valueInput })}
            underlineColorAndroid="transparent"
            keyboardType="numeric"
          />

        </View>

        {/* Display transaction */}
        <View style={styles.displayRows}>

          {/* transaction details */}
          <View style={{flex: 3}}>
            
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>Details</Text>
            </View>

            <View style={styles.tableCol1}>
              {this.state.details.map((item) => (
                <Text style={styles.desc} key={item}>{item}</Text>
              ))}
            </View>
            
          </View>

          {/* transaction dates */}
          <View style={{flex: 2}}>

            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>Date</Text>
            </View>

            <View style={styles.tableCol}>
              {this.state.initDate.map((item) => (
                <Text style={styles.desc} key={item}>{item}</Text>
              ))}
            </View>
            
          </View>

          {/* transaction amount */}
          <View style={{flex: 2}}>

            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>Amount (RM)</Text>
            </View>
            
            <View style={styles.tableCol}>
              {this.state.amount.map((item) => (
                <Text style={styles.desc} key={item}>{item}</Text>
              ))}
            </View>
            
          </View>

        </View>
        
        {/* total transactions */}
        <View style={styles.displayRows}>
          
          <View style={{
            flex:2, 
            alignItems:"flex-end",
            padding:10,
            backgroundColor: colors.solidpurple,
            borderWidth: 0.5,
            borderColor: colors.white
            }}>
            <Text style={{
              fontWeight: "bold",
              color: colors.white,
              fontSize: 16
            }}>Total Amount (RM)</Text>
          </View>
          
          <View style={{
            flex:1, 
            alignItems:"center",
            padding:10,
            backgroundColor:colors.silver,
            borderWidth: 0.5,
            borderColor: colors.white
            }}>
            <Text style={{
              fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
              fontWeight: "bold",
              color:colors.blackrussian,
              fontSize:16
            }}>{this.state.totalSpend}</Text>  
          </View>

        </View>

      </View>
    );
  }
}

export default MainPage;
//Muhammad Aidil Fahmiey bin Osman 1819369//
