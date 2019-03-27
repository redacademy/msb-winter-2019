import { StyleSheet } from 'react-native';
import { margin, row, padding } from '../../../config/styles';

const styles = StyleSheet.create({
  closeContainer: {
    flex: 1,
    marginTop: margin.xl,
    ...row,
    paddingHorizontal: padding.sm
  },
  flex: { flex: 1 }
});

export default styles;
