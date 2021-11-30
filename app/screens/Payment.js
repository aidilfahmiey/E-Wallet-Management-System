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
      <BalanceDeduction />
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

// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { Button, StyleSheet, Text, View } from "react-native";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import PaymentAuthorizationScreen from "./paymentauthorization/screens";

// const MainStack = createStackNavigator();
// const RootStack = createStackNavigator();

// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.home}>
//       <Text
//         style={{
//           fontSize: 24,
//         }}
//       >
//         Welcome to FancyBank
//       </Text>
//       <Text style={{ textAlign: "center" }}>
//         Make sure to enroll a biometric factor on device to try the
//         authorization flow.
//       </Text>
//       <Button
//         title="Start payment authorization flow"
//         onPress={() => navigation.navigate("PaymentAuthorization")}
//       />
//     </View>
//   );
// }

// function MainStackScreen() {
//   return (
//     <MainStack.Navigator>
//       <MainStack.Screen name="Home" component={HomeScreen} />
//     </MainStack.Navigator>
//   );
// }

// function Payment() {
//   return (
//     <SafeAreaProvider>
//       <StatusBar style="auto" />
//       <NavigationContainer>
//         <RootStack.Navigator mode="modal">
//           <RootStack.Screen
//             name="Main"
//             component={MainStackScreen}
//             options={{ headerShown: false }}
//           />
//           <RootStack.Screen
//             name="PaymentAuthorization"
//             component={PaymentAuthorizationScreen}
//             options={{ headerShown: false }}
//           />
//         </RootStack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

// export default Payment;

// const styles = StyleSheet.create({
//   home: { flex: 1, alignItems: "center", justifyContent: "center" },
// });
