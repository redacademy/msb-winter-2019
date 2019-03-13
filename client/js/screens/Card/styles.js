import { StyleSheet } from 'react-native';

import { container, center, shadow, contain } from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container },
  cardWrapper: { ...center, ...shadow, width: '85%', height: '30%' },
  card: { ...contain, height: '55%' }
});

export default styles;
