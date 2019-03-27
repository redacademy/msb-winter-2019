import { Dimensions, StyleSheet } from 'react-native';
import { center, colors, fonts, hr, row, subtitle1 } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  headerImg: {
    maxHeight: 200,
    width: Dimensions.get('window').width
  },

  /** Events Info **/

  infoWrapper: {
    padding: 20,
    paddingHorizontal: 25
  },
  title: {
    fontFamily: fonts.primaryBold,
    fontSize: fonts.lg,
    ...center,
    width: Dimensions.get('window').width
  },
  subtitle: {
    color: colors.neutralDark,
    fontFamily: fonts.primary,
    fontSize: fonts.sm,
    paddingBottom: 0
  },

  dataWrapper: {
    width: Dimensions.get('window').width * 0.8
  },
  eventData: {
    ...subtitle1,
    fontFamily: fonts.primary,
    paddingVertical: 3
  },
  boldData: {
    fontFamily: fonts.primaryBold
  },
  border: { ...hr, width: 295 },
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
  socialbtn: { marginHorizontal: 2 }
});

export default styles;
