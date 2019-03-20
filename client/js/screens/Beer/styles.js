import { Dimensions, StyleSheet } from 'react-native';
import { center, colors, fonts, h2, row, vl } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: '100%'
  },
  bannerWrapper: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.neutralDark,
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: '#000',
    marginLeft: -10
  },
  backIcon: {
    position: 'absolute',
    top: 20,
    left: 8
  },
  beerContainer: {
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25,
    height: '55%',
    justifyContent: 'space-between'
  },
  beerInfoContainer: {
    ...row,
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15
  },
  title: {
    ...h2,
    ...center,
    paddingTop: 0,
    paddingBottom: 0
  },
  subtitle: {
    color: colors.neutralDark,
    fontFamily: fonts.primary,
    fontSize: fonts.sm
  },

  description: {
    fontFamily: fonts.primary,
    paddingTop: 15,
    paddingBottom: 15
  },
  beerDataContainer: {
    ...vl,
    paddingLeft: 10
  },
  beerData: {
    fontFamily: fonts.primary
  },
  infoBold: {
    fontFamily: fonts.primaryBold
  },
  socialbtn: { ...center, marginBottom: 10 }
});

export default styles;
