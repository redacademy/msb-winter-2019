import { StyleSheet } from 'react-native';
import {
  container,
  jusStrt,
  colors,
  fonts,
  h3,
  capitalize,
  subtitle2,
  contain,
  center,
  row,
  hr,
  w100,
  mv0,
  pv0,
  jusBtwn,
  margin,
  iteCenterRow
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...container,
    ...jusBtwn
  },
  imageWrapper: {
    flex: 1,
    // marginTop: 20,
    justifyContent: 'space-evenly'
  },
  profilePic: {
    ...contain,
    borderRadius: 65,
    borderWidth: 5,
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
    ...iteCenterRow
  },
  heading: {
    ...subtitle2,
    ...pv0
  },
  userEmail: {
    // fontSize: fonts.xs
    ...subtitle2,
    color: colors.neutralDark,
    ...pv0
  },
  userEmailWrapper: {
    ...w100
    // borderBottomWidth: 2,
    // borderColor: colors.neutralLight,
    // width: '100%'
  },
  notifications: {
    ...row,
    width: '75%',
    alignContent: 'flex-start'
  },
  // divider: {
  //   flexDirection: 'row',
  //   alignSelf: 'flex-start',
  //   justifyContent: 'flex-start',
  //   width: '85%',
  //   marginLeft: 20,
  //   marginTop: 20,
  //   borderBottomColor: colors.neutralLight,
  //   borderBottomWidth: 2
  // },
  // toggleContainer: {
  //   marginLeft: 20,
  //   marginTop: 10,
  //   borderBottomColor: colors.neutralLight,
  //   borderBottomWidth: 2
  // },
  // toggleWrapper: {},
  button: {
    width: 120
  },
  buttonSave: {
    color: colors.white,
    backgroundColor: colors.brand
  },
  buttonSaveContainer: {
    alignItems: 'center',
    marginBottom: 20
  }
});

export default styles;
