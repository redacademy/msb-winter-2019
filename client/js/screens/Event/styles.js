import { Dimensions, StyleSheet } from 'react-native';
import { center, colors, fonts, h1, hr, subtitle1 } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width
  },
  headerImg: {
    maxHeight: 200,
    width: Dimensions.get('window').width
  },

  infoWrapper: { padding: 20, paddingHorizontal: 25 },
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
  border: { ...hr, width: 300 },
  description: {
    width: Dimensions.get('window').width * 0.8
  }
});

export default styles;
