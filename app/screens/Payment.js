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

import routes from "../navigation/routes";
import colors from "../config/colors";
import AppTextInput from "../components/AppTextInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import BalanceDeduction from "../components/BalanceDeduction";
import BalanceDeduction2 from "../components/BalanceDeduction2";
import Discount from "./Discount";
import PaymentCode from "./PaymentCode";

function Payment({ navigation }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.lightPurple,
        flex: 1,
      }}
    >
      {/* <PaymentCode /> */}
      {/* <BalanceDeduction /> */}
      <Discount />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
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
export default Payment;
