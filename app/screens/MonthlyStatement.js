
//Normunawwarah binti Sanaludin 1810070//
import React from "react";
import {
  ScrollView,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import History from "../components/History";
function MonthlyStatement({ navigation }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.white,
        flex: 1,
      }}
    >
      {/* Content */}
      <ScrollView
        style={{
          backgroundColor: colors.darkpurple,
          flex: 1,
        }}
      >
        <History />
      </ScrollView>
    </SafeAreaView>
  );
}

export default MonthlyStatement;
//Normunawwarah binti Sanaludin 1810070//
