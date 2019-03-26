import { StyleSheet, Dimensions } from 'react-native';
import {
  center,
  colors,
  fonts,
  h2,
  hr,
  margin,
  row,
  subtitle1
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.6,
    flex: 1,
    padding: 20,
    paddingTop: 35,
    alignItems: 'center'
  },
  imgWrapper: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.neutralDark,
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: '#fff'
  },
  img: {
    width: 215,
    height: 215
  },
  title: { ...h2, ...center, fontSize: 38, paddingTop: 12, paddingBottom: 2 },
  subtitle: {
    color: colors.neutralDark,
    fontSize: 15,
    fontFamily: fonts.primarySemi
  },

  infoWrapper: {
    ...center,
    paddingBottom: 15,
    width: Dimensions.get('window').width
  },
  dataWrapper: {
    width: Dimensions.get('window').width * 0.8,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingLeft: 22,
    paddingRight: 16
  },
  eventData: {
    ...subtitle1,
    fontSize: 14,
    fontFamily: fonts.primary,
    paddingTop: 3,
    paddingBottom: 3
  },
  boldData: {
    ...subtitle1
  },
  border: { ...hr, width: 295, marginVertical: margin.sm },

  /** -------- Buttons -------- **/
  btnContainer: {
    ...center,
    ...row,
    width: Dimensions.get('window').width,
    position: 'relative'
  },
  socialBtnWrapper: {
    // width: Dimensions.get('window').width * 0.5,
    maxWidth: Dimensions.get('window').width
  },
  socialBtn: {
    position: 'absolute',
    left: Dimensions.get('window').width * 0.5
  },
  saveBtn: { alignSelf: 'flex-end' }
});

export default styles;
