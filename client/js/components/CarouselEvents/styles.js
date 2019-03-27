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
    flex: 1,
    height: Dimensions.get('window').height * 0.6,
    padding: 20,

    paddingBottom: 10,
    alignItems: 'center'
  },

  /**
   * Carousel
   **/
  imgWrapper: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.neutralDark,
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: '#fff'
  },
  img: {
    width: 200,
    maxWidth: 215,
    maxHeight: 215
  },
  title: {
    ...h2,
    ...center,
    fontSize: 38,
    paddingTop: 7,
    paddingBottom: 2
  },
  subtitle: {
    color: colors.neutralDark,
    fontSize: 15,
    fontFamily: fonts.primarySemi
  },

  /**
   * Info
   **/
  infoWrapper: {
    ...center,
    // paddingBottom: 15,
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
  border: {
    ...hr,
    width: 295,
    marginVertical: margin.xs * 1.5
  },

  /**
   * Buttons
   **/
  btnContainer: {
    ...center,
    ...row
  },
  socialIconsWrapper: {
    ...center
  },
  socialbtn: { marginHorizontal: 2 },
  outerBtnContainer: { width: 80 }
});

export default styles;
