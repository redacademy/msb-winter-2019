import { StyleSheet } from 'react-native';
import {
  container,
  colors,
  fonts,
  h3,
  capitalize,
  subtitle2,
  row,
  hr,
  w100,
  mv0,
  pv0,
  jusBtwn,
  iteCenterRow,
  jusCntr,
  jusArnd,
  iteStrt
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...container,
    ...jusArnd
  },
  imageWrapper: {
    ...jusBtwn
  },
  profilePic: {
    resizeMode: 'cover',
    borderRadius: 65,
    borderWidth: 6,
    width: 130,
    height: 130,
    borderColor: colors.brand
  },
  name: {
    ...h3,
    ...capitalize,
    fontFamily: fonts.primaryBold
  },
  hr: { ...hr, ...mv0, width: '90%' },
  underline: { ...hr, ...mv0 },
  emailWrapper: {
    width: '65%',
    ...iteCenterRow,
    ...jusCntr
  },
  heading: {
    ...subtitle2,
    ...pv0
  },
  userEmail: {
    ...subtitle2,
    color: colors.neutralDark,
    ...pv0
  },
  userEmailWrapper: {
    ...w100
  },
  notifications: {
    ...row,
    ...iteStrt,
    width: '75%'
  },
  button: {
    width: 120
  },
  buttonSave: {
    color: colors.white,
    backgroundColor: colors.brand
  }
});

export default styles;
