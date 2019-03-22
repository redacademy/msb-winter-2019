import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleContainer: {
    flexDirection: "row"
  },
  exitButton: {
    justifyContent: "flex-end"
  },
  title: {
    color: colors.white,
    fontFamily: fonts.secondary,
    fontSize: fonts.xxl
  },
  textContainer: {
    alignSelf: "center",
    justifyContent: "center"
  },
  text: {
    color: colors.white,
    fontFamily: fonts.primarySemi,
    fontSize: fonts.md
  }
});

export default styles;
