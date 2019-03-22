import { StyleSheet } from "react-native";
import { h1, colors, container, h2, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    ...container,
    height: "100%"
  },
  heading: {
    ...h2,
    color: colors.neutralLight
  },
  redeem: {
    ...h1
  },
  rewardTitle: {
    fontFamily: fonts.primaryBold,
    fontSize: fonts.md,
    marginBottom: 20
  },

  redeemButton: {
    padding: 20,
    backgroundColor: colors.brand,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20
  },

  redeemText: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: fonts.lg
  },

  cancel: {
    fontFamily: fonts.primarySemi,
    fontSize: fonts.md,
    color: colors.neutralDark
  },

  cancelContainer: {
    borderBottomWidth: 2,
    borderBottomColor: colors.neutralLight
  }
});

export default styles;
