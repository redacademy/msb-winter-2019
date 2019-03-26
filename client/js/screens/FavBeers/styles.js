import { StyleSheet } from 'react-native';
import {
  container,
  hr,
  mv0,
  colors,
  contain,
  jusStrt,
  padding
} from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container, ...jusStrt },
  list: { paddingHorizontal: padding.md },
  hr: { ...hr, ...mv0, backgroundColor: colors.white },
  beer: { ...contain }
});

export default styles;
