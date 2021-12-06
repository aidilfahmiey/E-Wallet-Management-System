
//Nur Farah Atiqah binti Mohd Zahid 1817356//
import { Platform } from "react-native";
import { StyleSheet } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    // color: colors.,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};

const styles = StyleSheet.create({
  info: {
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  pageTitle: {
    color: colors.silver,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginVertical: 10,
    justifyContent: "center",
    lineHeight: 19,
  },  
  
  balanceNumber: {
    margin: 20,
    color: colors.white,
    fontSize: 60,
    fontWeight: "bold",
    justifyContent: "center",
  },

  label: {
    color: colors.silver,
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    justifyContent: "flex-start",
    lineHeight: 19,
  },

  buttonView:{
    flexDirection:"row",
    justifyContent: "center",
  },

  buttonStyle: {
    backgroundColor: colors.green,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
  },

  buttonText:{
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  box: {
    margin:20,
  },

  displayRows:{
    flexDirection: "row",
    margin: 20,
    marginBottom: 0,
    borderWidth: 0.5,
    borderColor: colors.white,
  },

  tableHeader:{
    backgroundColor: colors.solidpurple,
    width: "100%",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: colors.white,
  },

  tableHeaderText:{
    paddingVertical:10,
    paddingHorizontal: 5,
    color: colors.white,
    fontSize: 15,
    fontWeight: "bold",
    fontSize: 16,
  },

  tableCol1: {
    borderWidth: 0.5,
    borderColor: colors.white,
    alignItems:"flex-start",
    justifyContent: "flex-start",
    backgroundColor: colors.silver,
  },

  tableCol: {
    borderWidth: 0.5,
    borderColor: colors.white,
    alignItems:"center",
    justifyContent: "center",
    backgroundColor: colors.silver,
  },

  desc: {
    margin: 10,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 16
  },

  heading2: {
    color: colors.silver,
    fontSize: 12,
    fontWeight: "bold",
    marginVertical: 5,
  },

  heading3: {
    marginTop:20,
    color: colors.silver,
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 5,
  },

  report: {
    margin:5,
  },

  statementHeader:{
    flexDirection: "row",
    marginTop:10,
    marginHorizontal:15,
    paddingVertical: 5,
    paddingHorizontal:15,
    backgroundColor: colors.blackrussian,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  
  oddMonth:{
    marginHorizontal:15,
    paddingHorizontal:10,
    paddingVertical: 10,
    flexDirection:"row",
    backgroundColor: colors.green
  },

  evenMonth:{
    marginHorizontal:15,
    paddingHorizontal:10,
    paddingVertical: 10,
    flexDirection:"row",
    backgroundColor: colors.silver
  },

  leftCol: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  
  rightCol: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  month: {
    fontSize: 17,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },

  money: {
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  }
});

export {styles}
//Nur Farah Atiqah binti Mohd Zahid 1817356//
