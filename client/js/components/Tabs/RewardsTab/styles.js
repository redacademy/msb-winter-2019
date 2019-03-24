import { StyleSheet } from 'react-native';
import {
  container,
  row,
  dimensions,
  margin,
  colors
} from '../../../config/styles';

const styles = StyleSheet.create({
  container: { ...container },
  rewards: { ...row, flexWrap: 'wrap', justifyContent: 'space-between' },
  vl: {
    marginHorizontal: 0,
    marginVertical: margin.sm,
    position: 'absolute',
    left: dimensions.fullWidth * 0.5,
    borderColor: colors.neutralLight,
    borderLeftWidth: 4,
    height: '97%'
  }
});

export default styles;
