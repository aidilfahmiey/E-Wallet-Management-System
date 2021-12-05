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
