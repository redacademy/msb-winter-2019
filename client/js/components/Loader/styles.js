import { StyleSheet } from 'react-native';
import { colors, container, margin, body2 } from '../../config/styles';

const styles = StyleSheet.create({
  loader: {
    ...container,
    backgroundColor: colors.black,
    height: '100%'
  },
  gif: { height: 150 },
  text: { ...body2, color: colors.white }
});

export default styles;
