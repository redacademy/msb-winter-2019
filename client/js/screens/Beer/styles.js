import { Dimensions, StyleSheet } from 'react-native';
import { center, colors, fonts, h2, row, vl } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: '100%'
  },
  bannerWrapper: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.neutralLight,
    shadowOpacity: 10,
    shadowRadius: 2,
    backgroundColor: colors.neutralLight,
    marginLeft: -10
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
    padding: 25,
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
    paddingBottom: 25,
    maxHeight: 250,
    maxWidth: 350
  },
  beerType: {},
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
    paddingBottom: 10,
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
