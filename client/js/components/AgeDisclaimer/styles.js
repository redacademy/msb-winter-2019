import { StyleSheet } from "react-native";
import { fonts, colors } from "../../config/styles";

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },
  image: {
    marginBottom: 20
  },
  text: {
    color: colors.white,
    fontFamily: fonts.primarySemi,
    textAlign: "center",
    fontSize: fonts.md,
    marginTop: 20,
    marginBottom: 20
  },
  button: {
    backgroundColor: colors.white,
    margin: 20,
    borderRadius: 10
  },
  buttonText: {
    fontFamily: fonts.primaryBold,
    fontSize: fonts.lg,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50
  }
});

export default styles;
