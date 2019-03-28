import { StyleSheet } from 'react-native';
import {
  center,
  colors,
  hr,
  margin,
  row,
  subtitle1,
  padding,
  jusArnd,
  dimensions,
  h2,
  pv0,
  pb0,
  jusBtwn,
  iteStrt
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    paddingTop: padding.md
  },

  /**
   * Carousel
   **/
  carouselWrapper: {
    height: dimensions.fullHeight * 0.38
  },
  carouselContainer: {
    ...center
  },
  imgWrapper: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.neutralDark,
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: colors.white
  },
  img: {
    maxWidth: 210,
    maxHeight: 210
  },
  title: {
    ...h2,
    ...pb0
  },
  subtitle: {
    color: colors.neutralDark,
    ...subtitle1,
    ...pv0
  },

  /**
   * Info
   **/
  nonCarousel: {
    ...center,
    ...jusBtwn
  },
  dataWrapper: {
    ...row,
    ...center,
    ...jusArnd,
    width: dimensions.fullWidth * 0.8,
    paddingVertical: padding.xxs
  },
  infoSpacing: {
    ...iteStrt
  },
  beerData: {
    color: colors.neutralDark
  },
  boldData: {
    ...subtitle1,
    color: colors.black
  },
  border: {
    ...hr,
    marginVertical: margin.xs,
    width: '70%'
  }
});

export default styles;
