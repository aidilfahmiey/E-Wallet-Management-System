import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import routes from "../navigation/routes";

function PaymentCode({ navigation }) {
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
        <Text style={styles.balanceTitle}>YOUR PAYMENT QR CODE:</Text>
        <Text style={styles.info}>
          (Authorize your identity to get your Payment QR Code)
        </Text>
      </View>
      <View
        style={{
          marginVertical: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          // onPress={() =>
          //   Alert.alert("Payment Successful!", "Check your balance")
          // }
          onPress={() => navigation.navigate(routes.CONFIRM_PAYMENT)}
          style={{
            backgroundColor: colors.darkGrey,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
            padding: 15,
            width: "50%",
            marginVertical: -10,
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
              SHOW QR CODE
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
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

  info: {
    color: colors.grey,
    fontSize: 14,
    // fontWeight: "bold",
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

export default PaymentCode;
