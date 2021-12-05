import React from "react";
import {
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import CreditCard from "../components/CreditCard";
function TopUp(props) {
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
        <CreditCard />
        
      </ScrollView>
    </SafeAreaView>
  );
}

export default TopUp;
