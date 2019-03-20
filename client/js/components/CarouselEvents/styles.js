import { StyleSheet, Dimensions } from 'react-native';
import { center, colors, fonts, h1, row, subtitle1 } from '../../config/styles';

const styles = StyleSheet.create({
  carouselContainer: {
    padding: 15,
    ...center
  },
  slide: {
    ...center
  },

  eventImg: {
    flex: 1,
    maxHeight: 215,
    maxWidth: 215,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.neutralDark,
    shadowOpacity: 1,
    shadowRadius: 2
  },
  title: { ...h1, ...center, paddingBottom: 0 },
  subtitle: {
    color: colors.neutralDark,
    fontSize: fonts.sm
  },

  eventContainer: {
    ...row,
    ...center,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    width: Dimensions.get('window').width * 0.6
  },
  dataWrapper: {
    width: Dimensions.get('window').width * 0.7,

    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15
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
  }
});

export default styles;
