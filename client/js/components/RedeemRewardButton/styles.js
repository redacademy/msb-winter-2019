import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

const styles = StyleSheet.create({
  redeemButton: {
    width: '50%'
  },
  availableReward: {
    color: colors.neutralDark
  },
  unavailableReward: {
    color: colors.neutralLight
  }
});

export default styles;
