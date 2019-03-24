import { StyleSheet } from 'react-native';
import {
  container,
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

  availableReward: {
    ...h4,
    color: colors.neutralDark
  },
  unavailableReward: {
    ...h4,
    color: colors.neutralLight
  },
  unavailableImg: {
    // marginTop: margin.sm,
    // height: 50,
    // ...contain,
    opacity: 0.1
  },
  availableImg: {
    // marginTop: margin.sm,
    // height: 50,
    // ...contain,
    opacity: 1
  },
  img: { marginTop: margin.sm, height: 50, ...contain },
  rewardTitle: {
    ...subtitle2,
    paddingHorizontal: padding.lg,
    ...center,
    ...pb0,
    textAlign: 'center'
  }
});

export default styles;
