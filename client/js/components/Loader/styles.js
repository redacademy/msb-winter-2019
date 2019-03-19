import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

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
    color: colors.white
  }
});

export default styles;
