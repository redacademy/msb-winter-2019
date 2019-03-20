import { StyleSheet, Dimensions } from 'react-native';
import {
  center,
  colors,
  fonts,
  h1,
  hr,
  row,
  subtitle1
} from '../../config/styles';

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
    shadowOffset: { width: 1, height: 3.5 },
    shadowColor: colors.neutralDark,
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: '#fff'
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
  },
  border: { ...hr, width: '100%', maxWidth: 250 }
});

export default styles;
