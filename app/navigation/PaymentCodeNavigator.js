import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "../config/colors";
import ConfirmPayment from "../screens/ConfirmPayment";
import PaymentCode from "../screens/PaymentCode";
import Payment from "../screens/Payment";

const Stack = createNativeStackNavigator();

const PaymentCodeNavigator = () => (
  <Stack.Navigator presentation="modal" animationTypeForReplace="pop">
    <Stack.Screen
      name="Payment"
      component={Payment}
      options={{
        title: "PAYMENT",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        //headerShadowVisible: false,
        headerBackVisible: false,
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="PaymentCode"
      component={PaymentCode}
      options={{
        title: "PAYMENT CODE",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        //headerShadowVisible: false,
        headerBackVisible: false,
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConfirmPayment"
      component={ConfirmPayment}
      options={{
        title: "CONFIRM PAYMENT",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        //headerShadowVisible: false,
        headerBackVisible: false,
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default PaymentCodeNavigator;
