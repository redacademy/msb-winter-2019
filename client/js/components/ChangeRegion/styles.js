import { StyleSheet } from "react-native";
import { fonts, colors, margin } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
  },
  mapContainer: {
    height: "50%",
    width: "100%"
  },
  map: {
    height: "100%",
    width: "100%"
  },
  listContainer: {
    height: "100%",
    width: "100%"
  },
  storeItem: {
    height: 100,
    flex: 1,
    justifyContent: "center",
    marginLeft: margin.md,
    marginRight: margin.md,
    borderBottomWidth: 2,
    borderBottomColor: colors.neutralLight
  },
  bold: {
    fontFamily: fonts.primaryBold,
    lineHeight: 30,
    fontSize: fonts.xs
  },
  description: {
    fontFamily: fonts.primary,
    fontSize: fonts.sm,
    color: colors.neutralDark
  }
});

export default styles;
