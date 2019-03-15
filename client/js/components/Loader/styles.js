import { StyleSheet } from "react-native";
import { colors } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imgBg: {
    height: 400,
    width: 400
  },
  loadingText: {
    color: colors.white
  },
  textContainer: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    marginTop: 150
  }
});

export default styles;
