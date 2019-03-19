import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    backgroundColor: colors.black
  },
  imgBg: {
    height: 150
  },
  loadingText: {
    color: colors.white,
    fontFamily: fonts.primarySemi
  }
});

export default styles;
