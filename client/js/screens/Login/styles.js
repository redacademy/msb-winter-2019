import { StyleSheet } from "react-native";
import { container, body1 } from "../../config/styles";

const styles = StyleSheet.create({
  container: { ...container },
  body1: { ...body1 },
  textInput: {
    width: "50%",
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderRadius: 4,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 5
  }
});

export default styles;
