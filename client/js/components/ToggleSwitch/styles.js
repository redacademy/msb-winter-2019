import { StyleSheet } from "react-native";
import { colors } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },

  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    width: 300
  },
  buttonEditContainer: {
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.neutralLight
  },

  buttonSaveContainer: {
    alignItems: "center"
  },
  button: {
    width: 120
  },

  buttonSave: {
    color: colors.white,
    backgroundColor: colors.brand
  },

  toggle: {
    width: 58,
    height: 31,
    borderRadius: 16,
    padding: 5
  },
  toggleCircles: {
    width: 25,
    height: 25,
    borderRadius: 12.5
  }
});

export default styles;
