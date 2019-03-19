import { StyleSheet, Dimensions } from 'react-native';
import {
  center,
  colors,
  fonts,
  h1,
  row,
  shadow1,
  subtitle2
} from '../../config/styles';

const styles = StyleSheet.create({
  slide: {
    ...center
  },

  beerImg: {
    ...shadow1
  },
  title: { ...h1, ...center, paddingBottom: 0 },
  subtitle: {
    color: colors.neutralDark,
    fontSize: fonts.sm
  },

  beerContainer: {
    ...row,
    ...center,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    width: Dimensions.get('window').width * 0.7
  },
  infoSpacing: {
    alignItems: 'flex-start'
  },
  beerData: {
    ...subtitle2
  },
  boldData: {
    color: colors.black,
    fontFamily: fonts.primaryBold
  }
});

export default styles;
