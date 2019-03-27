import { Dimensions, StyleSheet } from 'react-native';
import { center, colors, fonts, row, shadow2 } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: '100%'
  },
  bannerWrapper: {
    ...shadow2,
    zIndex: 0
  },
  bannerImg: {
    transform: [{ scale: 1.05 }]
  },
  backIcon: {
    position: 'absolute',
    top: 20,
    left: 8
  },

  /**
   *  Beer
   **/

  beerContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingTop: 15,
    paddingBottom: 0,
    height: '55%'
  },
  beerWrapper: {
    marginTop: 12,
    marginBottom: 12
  },
  beerGrid: {
    ...row,
    justifyContent: 'space-between',
    paddingBottom: 20,
    maxHeight: 250,
    maxWidth: 350
  },
  title: {
    fontFamily: fonts.primaryBold,
    fontSize: 24,
    textTransform: 'capitalize',
    maxWidth: 200
  },
  subtitle: {
    color: colors.neutralDark,
    fontFamily: fonts.primary,
    fontSize: fonts.sm
  },
  rating: {
    marginTop: 15,
    marginBottom: 5
  },

  /**
   *  Beer Data
   **/
  beerDataContainer: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    paddingLeft: 15,
    maxWidth: 150
  },
  beerData: {
    fontFamily: fonts.primary
  },
  infoBold: {
    fontFamily: fonts.primaryBold
  },
  released: {
    fontFamily: fonts.primary,
    maxWidth: 90
  },

  description: {
    fontFamily: fonts.primary,
    lineHeight: 22,
    paddingBottom: 5,
    maxWidth: 350
  },

  /**  Buttons  **/
  btnContainer: {
    ...center,
    ...row
  },
  socialIconsWrapper: {
    ...center
  },
  socialbtn: { marginHorizontal: 5 }
});

export default styles;
