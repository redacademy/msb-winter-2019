import { StyleSheet, Dimensions } from 'react-native';
import {
  center,
  colors,
  fonts,
  h1,
  hr,
  margin,
  row,
  subtitle1
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    // alignItems: 'center',
    justifyContent: 'space-around'
  },

  /**
   * Carousel
   **/
  carouselWrapper: {
    height: Dimensions.get('window').height * 0.38
  },
  carouselContainer: {
    ...center
  },
  imgWrapper: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.neutralDark,
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: '#fff'
  },
  img: {
    maxWidth: 210,
    maxHeight: 210
  },
  title: {
    ...h1,
    ...center,
    fontSize: 38,
    paddingTop: 10,
    paddingBottom: 3
  },
  subtitle: {
    color: colors.neutralDark,
    fontSize: fonts.sm
  },

  /**
   * Info
   **/
  nonCarousel: {
    ...center,
    justifyContent: 'space-between'
  },
  dataWrapper: {
    ...row,
    ...center,
    justifyContent: 'space-around',
    width: Dimensions.get('window').width * 0.8,
    paddingVertical: 5
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
  border: {
    ...hr,
    marginVertical: margin.sm,
    width: '100%',
    maxWidth: 270
  }
});

export default styles;
