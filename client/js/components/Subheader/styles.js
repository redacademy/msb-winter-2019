import { StyleSheet } from 'react-native';
import { h3, underline, shadow2, padding, center } from '../../config/styles';

const styles = StyleSheet.create({
  subheaderContainer: {
    ...shadow2,
    width: '100%',
    paddingVertical: padding.xs,
    ...center
  },
  subheaderWrapper: {
    ...center,
    ...underline
  },
  subheader: {
    ...h3
  }
});

export default styles;
