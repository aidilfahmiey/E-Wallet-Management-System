
//Normunawwarah binti Sanaludin 1810070//
import React, { Component, useEffect } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { styles } from "../config/styles";
import colors from "../config/colors";


class History extends Component {
  constructor() {
    super();
    var initDate = new Date(),
      dateInit =
        initDate.getDate() +
        "/" +
        initDate.getMonth() +
        "/" +
        initDate.getFullYear();

    this.state = {
      balance: 100,
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
    this.state.balance -= this.state.valueInput;
    this.state.totalSpend += this.state.valueInput;
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={{
                alignItems: "center",
                justifyContent: "center",
                marginHorizontal: 20,
                marginVertical: 20,
        }}>

          <Text style={styles.pageTitle}>TRANSACTION REPORT</Text>

          <View style={{
                marginHorizontal: 20,
                marginVertical: 20,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.blackrussian,
                borderRadius: 25,
                width: "75%"
          }}>

            <Text style={styles.heading3}>2021</Text>

            <Text style={styles.heading2}>TOTAL SPENT (RM)</Text>

            <Text style={{
                  color: colors.white,
                  marginBottom:20,
                  fontSize: 60,
                  fontWeight: "bold",
                  justifyContent: "center",
            }}>
              {this.state.totalSpend}</Text>

          </View>

        </View>
        
        <View style={styles.report}>
          
          <View style={ styles.statementHeader }>

            <View style={{ 
              flex: 2,
              justifyContent: "center",
              alignItems: "center"
              }}>
              <Text style={styles.tableHeaderText}>MONTH</Text>
            </View>

            <View style={styles.oddMonthAmnt}>
              <Text style={styles.tableHeaderText}>AMOUNT (RM)</Text>
            </View>

          </View>

          <View style={styles.evenMonth}>

            <View style={styles.leftCol}>
              <Text style={styles.month}>December</Text>
            </View>

            <View style={styles.rightCol}>
              <Text style={styles.money}>0</Text>
            </View>

          </View>
          
          <View style={styles.oddMonth}>
            
            <View style={styles.leftCol}>
              <Text style={styles.month}>November</Text>

            </View>

            <View style={styles.rightCol}>
              <Text style={styles.money}>{this.state.totalSpend}</Text>
            </View>

          </View>

          <View style={styles.evenMonth}>
            <View style={styles.leftCol}>
              <Text style={styles.month}>October</Text>
            </View>

            <View style={styles.rightCol}>
              <Text style={styles.money}>{this.state.totalSpend}</Text>
            </View>
          </View>

          <View style={styles.oddMonth}>

            <View style={styles.leftCol}>
              <Text style={styles.month}>September</Text>
            </View>

            <View style={styles.rightCol}>
              <Text style={styles.money}>{this.state.totalSpend}</Text>
            </View>
          </View>

          <View style={styles.evenMonth}>

            <View style={styles.leftCol}>
              <Text style={styles.month}>August</Text>
            </View>

            <View style={styles.rightCol}>
              <Text style={styles.money}>0</Text>
            </View>
          </View>

        </View>
      </SafeAreaView>
    );
  }
}

export default History;
//Normunawwarah binti Sanaludin 1810070//
