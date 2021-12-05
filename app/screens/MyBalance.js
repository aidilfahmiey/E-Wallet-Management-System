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
import Mainpage from "../components/MainPage";
function MyBalance({ navigation }) {
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
        <Mainpage />
        
      </ScrollView>
    </SafeAreaView>
  );
}

export default MyBalance;
