import { StyleSheet } from 'react-native';
import {
  center,
  colors,
  row,
  subtitle1,
  jusArnd,
  margin,
  jusCenterRow,
  subtitle2,
  contain,
  h100
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...center
  },
  availTitle: {
    ...subtitle1,
    color: colors.neutralDark
  },
  infoContainer: {
    ...row,
    ...center,
    ...jusArnd,
    width: '70%',
    maxHeight: 30
  },
  infoWrapper: {
    alignItems: 'flex-end',
    ...jusCenterRow,
    ...h100
  },
  availImg: {
    ...contain,
    maxHeight: 25,
    marginRight: margin.xs
  },
  availSize: {
    ...subtitle2
  }
});

export default styles;
