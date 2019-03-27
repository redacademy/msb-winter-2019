import { StyleSheet } from 'react-native';
import { body1, iteCenterRow, jusBtwn, padding } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    width: '75%',
    paddingVertical: padding.xs
  },
  toggleWrapper: {
    ...iteCenterRow,
    ...jusBtwn
  },
  toggle: {
    width: 45,
    height: 25,
    borderRadius: 16,
    padding: 0
  },
  toggleCircle: {
    width: 25,
    height: 25,
    borderRadius: 12.5
  },
  text: { ...body1 }
});

export default styles;
