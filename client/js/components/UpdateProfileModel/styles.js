import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.neutralLight,
    flex: 1,
    marginTop: 40
  },
  closeContainer: {
    backgroundColor: colors.white,
    paddingTop: 10,
    padding: 10
  },
  close: {
    alignSelf: "flex-end",
    backgroundColor: colors.white
  },

  content: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    height: "40%"
  },
  title: {
    fontFamily: fonts.secondary,
    fontSize: fonts.xxl,
    marginBottom: 20
  },
  text: {
    fontFamily: fonts.primaryBold,
    fontSize: fonts.md,
    marginTop: 20
  },
  half: {
    backgroundColor: colors.neutralLight,
    height: "100%"
  }
});

export default styles;
