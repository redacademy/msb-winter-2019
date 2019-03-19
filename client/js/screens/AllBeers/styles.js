import { StyleSheet, Dimensions } from 'react-native';
import { center, colors, fonts, h1, row, shadow1 } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...center,
    width: '100%',
    margin: 10,
    marginTop: 20
  },
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
    justifyContent: 'space-between',

    paddingLeft: 20,
    paddingRight: 20,
    width: Dimensions.get('window').width * 0.7
  }
});

export default styles;
