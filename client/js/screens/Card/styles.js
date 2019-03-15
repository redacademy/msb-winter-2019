import { StyleSheet } from 'react-native';
import {
  h3,
  colors,
  underline,
  shadow2,
  dimensions
} from '../../config/styles';

const styles = StyleSheet.create({
  tabbar: { backgroundColor: colors.white, ...shadow2 },
  labelStyle: { ...h3, color: colors.neutralLight },
  labelSelectedStyle: { ...h3, color: colors.black },
  indicator: {
    ...underline,
    borderBottomWidth: 3,
    backgroundColor: colors.brand,
    marginBottom: 7,
    marginLeft: 15,
    maxWidth: dimensions.fullWidth / 3 - 30,
    width: '100%'
  }
});

export default styles;
