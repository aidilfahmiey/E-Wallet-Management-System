import React, { Component, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SectionList,
} from "react-native";

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
        {/* <View style={styles.button}>
          <Button title="Back" onPress={() => navigation.navigate("@main")} />
        </View> */}
        <Text style={styles.title}>Transaction Report</Text>
        <View style={styles.box}>
          <Text style={styles.year}>2021</Text>
          <Text style={styles.spend}>Total Spend</Text>
          <Text style={styles.spend}>{"RM " + this.state.totalSpend}</Text>
        </View>
        <View style={styles.spend}>
          <Text style={styles.month}>December</Text>
          <Text style={styles.money}>RM 0</Text>

          <Text style={styles.month}>November</Text>
          <Text style={styles.money}>{"RM " + this.state.totalSpend}</Text>

          <Text style={styles.month}>October</Text>
          <Text style={styles.money}>{"RM " + this.state.totalSpend}</Text>

          <Text style={styles.month}>September</Text>
          <Text style={styles.money}>{"RM " + this.state.totalSpend}</Text>

          <Text style={styles.month}>August</Text>
          <Text style={styles.money}>RM 0</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    color: "black",
  },
  container2: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  topInfo: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  history: {
    fontSize: 25,
    color: "black",
  },

  month: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#21618C",
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 15,
  },
  money: {
    fontSize: 20,
    color: "black",
    backgroundColor: "#7FB3D5",
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 15,
  },
  info: {
    fontSize: 25,
  },
  itemContainer: {
    fontSize: 25,
  },
  listItem: {
    fontSize: 25,
  },
  box: {
    fontSize: 30,
    alignItems: "center",
    borderColor: "#f9c2ff",
    marginLeft: 100,
    marginRight: 100,
    backgroundColor: "#f9c2ff",
    borderRadius: 20,
    margin: 20,
    padding: 30,
  },
  button: {
    paddingRight: 340,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    margin: 20,
  },
  year: {
    fontSize: 25,
  },
  spend: {
    fontSize: 30,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
});

export default History;
