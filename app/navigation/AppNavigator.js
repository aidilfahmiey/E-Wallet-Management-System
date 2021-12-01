import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Payment from "../screens/Payment";
import MonthlyStatement from "../screens/MonthlyStatement";
import MyBalance from "../screens/MyBalance";
import TopUp from "../screens/TopUp";
import TransactionDetails from "../screens/TransactionDetails";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Balance"
      component={MyBalance}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="account-cash"
            color={color}
            size={size}
          />
        ),
        //headerShown: false,
      }}
    />
    <Tab.Screen
      name="Pay"
      component={Payment}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="payment" color={color} size={size} />
        ),
        //headerShown: false,
      }}
    />

    <Tab.Screen
      name="Top Up"
      component={TopUp}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="wallet-plus-outline"
            color={color}
            size={size}
          />
        ),
        //headerShown: false,
      }}
    />
    <Tab.Screen
      name="Statement"
      component={MonthlyStatement}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="file-document-outline"
            color={color}
            size={size}
          />
        ),
        //headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
