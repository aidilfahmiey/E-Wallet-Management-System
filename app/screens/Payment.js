
//Nur Sabrina Fasha binti Zaidi Sham 1813526//
//Ayunni Jasmine binti Abdul Aziz @ Muhiyiddin 1816714//
import React from "react";
import {
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
} from "react-native";

import colors from "../config/colors";
import BalanceDeduction from "../components/BalanceDeduction";
import Discount from "../components/Discount";

function Payment() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.darkpurple,
        flex: 1,
      }}
    >
      <ScrollView
      style={{
        backgroundColor: colors.darkpurple,
        flex: 1,
      }}
      >
        {/* <BalanceDeduction /> */}
        <Discount />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Payment;
//Nur Sabrina Fasha binti Zaidi Sham 1813526//
//Ayunni Jasmine binti Abdul Aziz @ Muhiyiddin 1816714//
