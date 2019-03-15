import { StyleSheet } from "react-native";
import { colors } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  imgBg: {
    height: 150
  },
  loadingText: {
    color: colors.white
  }
});

export default styles;
