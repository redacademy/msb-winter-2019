import { StyleSheet } from 'react-native';
import { container, center, shadow1, contain } from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container, backgroundColor: 'transparent' },
  cardWrapper: { ...center, ...shadow1, width: '85%', height: '50%' },
  card: { ...contain, height: '60%' },
  imgBg: {
    width: '100%',
    height: '100%'
  }
});

export default styles;
