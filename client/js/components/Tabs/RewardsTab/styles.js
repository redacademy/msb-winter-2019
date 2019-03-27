import { StyleSheet } from 'react-native';
import {
  container,
  dimensions,
  margin,
  colors,
  jusCenterRow
} from '../../../config/styles';

const styles = StyleSheet.create({
  container: { ...container },
  rewards: {
    flexWrap: 'wrap',
    ...jusCenterRow
  },
  vl: {
    marginHorizontal: 0,
    marginVertical: margin.sm,
    position: 'absolute',
    left: dimensions.fullWidth * 0.5,
    borderColor: colors.neutralLight,
    borderLeftWidth: 4,
    height: '73%'
  }
});

export default styles;
