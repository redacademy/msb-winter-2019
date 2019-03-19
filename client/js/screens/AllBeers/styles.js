import { StyleSheet, Dimensions } from 'react-native';
import {
  center,
  colors,
  container,
  fonts,
  h1,
  h2,
  row,
  Subtitle1,
  Subtitle2,
  shadow1
} from '../../config/styles';

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

  //   availability: {
  //     color: colors.neutralDark,
  //     fontFamily: fonts.primarySemi,
  //     fontSize: fonts.sm,
  //     paddingBottom: 10
  //   },
  //   availImg: {
  //     resizeMode: 'contain',
  //     marginRight: 5
  //   },
  //   availSize: {
  //     fontSize: 12
  //   }
});

export default styles;
