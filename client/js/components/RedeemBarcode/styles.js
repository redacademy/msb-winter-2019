import { StyleSheet } from "react-native";
import { h1, colors, container, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  closeContainer: {
    padding: 10
  },
  close: {
    alignSelf: "flex-end"
  },
  text: {
    fontFamily: fonts.primarySemi,
    fontSize: fonts.sm,
    textAlign: "center",
    marginBottom: 20
  }
});

export default styles;
