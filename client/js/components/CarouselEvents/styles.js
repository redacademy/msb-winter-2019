import { StyleSheet } from 'react-native';
import {
  center,
  colors,
  h2,
  hr,
  row,
  subtitle1,
  jusArnd,
  h100,
  dimensions,
  iteStrt,
  container,
  pv0,
  padding,
  pb0,
  shadow1
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...container,
    ...h100,
    ...jusArnd
  },

  /**
   * Carousel
   **/
  carousel: {
    height: dimensions.fullHeight * 0.4,
    paddingTop: padding.xl
  },
  carouselContainer: {
    ...center
  },
  imgWrapper: {
    ...shadow1
  },
  img: {
    maxWidth: 215,
    maxHeight: 215
  },
  titleWrapper: { ...center },
  title: {
    ...h2,
    ...pb0
  },
  subtitle: {
    ...subtitle1,
    color: colors.neutralDark,
    ...pv0
  },

  /**
   * Info
   **/
  infoWrapper: {
    flex: 1,
    ...center
  },
  dataWrapper: {
    ...iteStrt,
    ...jusArnd,
    width: '70%'
  },
  eventData: {
    color: colors.neutralDark,
    ...pv0
  },
  boldData: {
    ...subtitle1,
    color: colors.black,
    ...pv0
  },
  border: {
    ...hr,
    width: dimensions.fullWidth * 0.75
  },

  /**
   * Buttons
   **/
  btnContainer: {
    flex: 1,
    ...center,
    ...row,
    paddingTop: padding.sm
  },

  outerBtnContainer: { width: 80 }
});

export default styles;
