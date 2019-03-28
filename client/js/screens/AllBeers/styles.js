import { StyleSheet } from 'react-native';
import { center, dimensions, jusBtwn, h100 } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    height: dimensions.fullHeight * 0.6,
    width: dimensions.fullWidth
  },
  content: { ...center, ...jusBtwn, ...h100 }
});

export default styles;
