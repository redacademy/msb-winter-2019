import { StyleSheet } from 'react-native';
import { h1, colors, container } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...container,
    height: '100%',
    backgroundColor: colors.brand
  },
  cheersMessage: {
    ...h1,
    color: colors.white
  },
  icon: {
    position: 'absolute',
    top: 20,
    right: 10
  }
});

export default styles;
