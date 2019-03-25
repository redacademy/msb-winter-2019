import { StyleSheet } from 'react-native';
import { colors, body2, container } from '../../config/styles';

const styles = StyleSheet.create({
  loader: {
    ...container,
    height: '100%',
    backgroundColor: colors.black
  },
  gif: {
    height: 150
  },
  text: {
    color: colors.white,
    ...body2
  }
});

export default styles;
