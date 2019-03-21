import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts } from '../../config/styles';

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    backgroundColor: colors.black
  },
  gif: {
    height: 150
  },
  text: {
    color: colors.white,
    fontFamily: fonts.primarySemi
  }
});

export default styles;
