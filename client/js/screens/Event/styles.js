import { Dimensions, StyleSheet } from 'react-native';
import {
  center,
  colors,
  fonts,
  hr,
  margin,
  row,
  subtitle1
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.75,
    width: Dimensions.get('window').width,
    justifyContent: 'space-between'
  },
  headerImg: {
    maxHeight: 180,
    width: Dimensions.get('window').width
  },

  /** Events Info **/

  infoWrapper: {
    paddingTop: 20,
    paddingHorizontal: 25,
    justifyContent: 'space-around'
  },
  titlesWrapper: { alignSelf: 'flex-start', paddingBottom: 10 },
  title: {
    fontFamily: fonts.primaryBold,
    fontSize: 24,
    ...center,
    width: Dimensions.get('window').width
  },
  subtitle: {
    color: colors.neutralDark,
    fontFamily: fonts.primary,
    fontSize: fonts.sm
  },

  dataWrapper: {
    width: Dimensions.get('window').width * 0.8
  },
  eventData: {
    ...subtitle1,
    fontFamily: fonts.primary,
    paddingVertical: 1
  },
  boldData: {
    fontFamily: fonts.primaryBold
  },
  border: { ...hr, marginVertical: margin.sm, width: 295 },
  description: {
    width: Dimensions.get('window').width * 0.88,
    lineHeight: 22
  },

  /** Buttons */

  btnContainer: {
    ...center,
    ...row,
    flex: 1
  },
  outerBtnContainer: {
    width: 80
  },
  socialIconsWrapper: {
    ...center
  },
  socialbtn: { marginHorizontal: 2 }
});

export default styles;
