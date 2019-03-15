import { StyleSheet } from 'react-native';
import {
  container,
  jusCenterRow,
  h1,
  h2,
  h3,
  h4,
  subtitle1,
  subtitle2,
  subtitle3,
  body1,
  body2,
  body3,
  button,
  underline,
  hr,
  vl
} from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container },
  body1: { ...body1 },
  textInput: {
    height: 36,
    width: '50%',
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 5
  }
});

export default styles;
