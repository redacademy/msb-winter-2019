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
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  headerImg: {
    maxHeight: 180,
    width: Dimensions.get('window').width
  },

  /** Events Info **/

  infoWrapper: {
    padding: 20,
    paddingHorizontal: 25
  },
  titlesWrapper: { alignSelf: 'flex-start' },
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
    // paddingBottom: 0
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
  border: { ...hr, marginVertical: margin.xs, width: 295 },
  description: {
    width: Dimensions.get('window').width * 0.8,
    lineHeight: 22
  },

  /** Buttons */

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
