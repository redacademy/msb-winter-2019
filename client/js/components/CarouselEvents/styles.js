import { StyleSheet, Dimensions } from 'react-native';
import {
  center,
  colors,
  fonts,
  h2,
  hr,
  margin,
  row,
  subtitle1
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    paddingTop: 25,
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  /**
   * Carousel
   **/
  carousel: {
    height: Dimensions.get('window').height * 0.43
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
    maxWidth: 215,
    maxHeight: 215
  },
  title: {
    ...h2,
    ...center,
    fontSize: 36,
    paddingTop: 12,
    paddingBottom: 5
  },
  subtitle: {
    color: colors.neutralDark,
    fontSize: 15,
    fontFamily: fonts.primarySemi
  },

  /**
   * Info
   **/
  infoWrapper: {
    flex: 1,
    ...center
  },
  dataWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingVertical: 3,
    paddingLeft: 28,
    paddingRight: 16,
    width: Dimensions.get('window').width * 0.85
  },
  eventData: {
    ...subtitle1,
    fontSize: 14,
    fontFamily: fonts.primary
    // paddingVertical: 10
  },
  boldData: {
    ...subtitle1
  },
  border: {
    ...hr,
    width: 290
    // marginVertical: margin.sm
  },

  /**
   * Buttons
   **/
  btnContainer: {
    flex: 1,
    ...center,
    ...row,
    paddingTop: 15
  },

  outerBtnContainer: { width: 80 }
});

export default styles;
