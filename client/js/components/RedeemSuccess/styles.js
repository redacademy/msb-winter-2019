import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brand,
    alignItems: "center"
  },
  closeContainer: {
    padding: 20,
    alignSelf: "flex-end"
  },

  title: {
    fontFamily: fonts.secondary,
    fontSize: fonts.xxl,
    color: colors.white,
    marginBottom: 20
  },

  content: {
    alignItems: "center"
  },

  image: {
    marginBottom: 20
  },
  description: {
    fontFamily: fonts.primaryBold,
    fontSize: fonts.md
  }
});

export default styles;
