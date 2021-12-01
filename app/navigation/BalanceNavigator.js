import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "../config/colors";

import MainPage from "../screens/MainPage";
import MyBalance from "../screens/MyBalance";
import MonthlyStatement from "../screens/MonthlyStatement";

const Stack = createNativeStackNavigator();

const BalanceNavigator = () => (
  <Stack.Navigator presentation="modal" animationTypeForReplace="pop">
    <Stack.Screen
      name="MyBalance"
      component={MyBalance}
      options={{
        title: "MY BALANCE",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="MainPage"
      component={MainPage}
      options={{
        title: "MAIN PAGE",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerBackVisible: false,
      }}
    />
    <Stack.Screen
      name="MonthlyStatement"
      component={MonthlyStatement}
      options={{
        title: "MONTHLY STATEMENT",
        headerTintColor: colors.olive,
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerBackVisible: false,
      }}
    />
  </Stack.Navigator>
);

export default BalanceNavigator;
