import { StyleSheet, Dimensions } from 'react-native';
import { center, colors, fonts, h1, row, subtitle1 } from '../../config/styles';

const styles = StyleSheet.create({
  carouselContainer: {
    padding: 15,
    paddingBottom: 0
  },
  slide: {
    ...center
  },

  imgWrapper: {
    flex: 1,
    maxHeight: 215,
    maxWidth: 215,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.neutralDark,
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: 'white'
  },
  img: {
    resizeMode: 'contain'
  },
  title: { ...h1, ...center, paddingBottom: 3 },
  subtitle: {
    color: colors.neutralDark,
    fontSize: fonts.sm
  },

  dataWrapper: {
    width: Dimensions.get('window').width * 0.8,
    ...row,
    ...center,
    justifyContent: 'space-evenly',
    paddingLeft: 15,
    paddingRight: 15
  },
  infoSpacing: {
    alignItems: 'flex-start'
  },
  beerData: {
    ...subtitle1,
    fontSize: 14,
    fontFamily: fonts.primary,
    paddingTop: 2,
    paddingBottom: 2
  },
  boldData: {
    ...subtitle1
  }
});

export default styles;
