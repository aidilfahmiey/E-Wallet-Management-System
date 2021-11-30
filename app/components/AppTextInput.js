import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";
import colors from "../config/colors";

function AppTextInput({ width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      <TextInput
        placeholderTextColor={defaultStyles.colors.grey}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.creme,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
});
export default AppTextInput;
