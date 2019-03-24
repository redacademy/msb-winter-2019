import { StyleSheet } from 'react-native';
import {
  colors,
  h4,
  margin,
  contain,
  subtitle2,
  padding,
  center,
  pb0,
  hr
} from '../../config/styles';

const styles = StyleSheet.create({
  redeemButton: {
    width: '44%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: padding.xs,
    paddingHorizontal: padding.xs,
    borderBottomColor: colors.neutralLight,
    borderBottomWidth: 2,
    marginHorizontal: margin.sm
  },
  available: { color: colors.black },
  unavailable: { color: colors.neutralLight },
  stamps: { ...h4 },
  unavailableImg: {
    opacity: 0.1
  },
  availableImg: {
    opacity: 1
  },
  img: { marginTop: margin.sm, height: 50, ...contain },
  rewardTitle: {
    ...subtitle2,
    ...center,
    ...pb0,
    textAlign: 'center'
  }
});

export default styles;
