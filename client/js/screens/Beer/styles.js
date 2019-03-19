import { Dimensions, StyleSheet } from 'react-native';
import {
  center,
  colors,
  fonts,
  h3,
  shadow1,
  row,
  vl
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width
  },
  bannerWrapper: {
    // ...shadow1
  },
  beerContainer: {
    marginTop: 25,
    marginLeft: 30,
    marginRight: 30
  },
  beerInfoContainer: {
    ...row,
    justifyContent: 'space-between'
  },
  title: {
    ...h3,
    ...center,
    paddingTop: 0,
    paddingBottom: 0,
    textTransform: 'capitalize'
    // fontFamily: fonts.primary
  },
  subtitle: {
    color: colors.neutralDark,
    fontFamily: fonts.primary,
    fontSize: fonts.sm
  },

  description: {
    fontFamily: fonts.primary,
    paddingTop: 15
    // lineHeight: 6
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
  }
});

export default styles;
