import { StyleSheet } from 'react-native';
import {
  h1,
  colors,
  container,
  h3,
  button,
  subtitle1,
  jusArnd,
  iteCntr,
  contain,
  dimensions
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...container
  },
  content: { ...jusArnd, height: '60%', ...iteCntr },
  heading: {
    ...h3,
    color: colors.neutralDark
  },
  redeem: {
    ...h1
  },
  rewardTitle: {
    ...button,
    color: colors.black
  },
  rewardImg: { height: dimensions.fullHeight * 0.13, ...contain },
  cancel: {
    ...subtitle1,
    color: colors.neutralDark,
    textDecorationLine: 'underline'
  }
});

export default styles;
