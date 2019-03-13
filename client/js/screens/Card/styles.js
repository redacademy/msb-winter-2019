import { StyleSheet } from 'react-native';

import { container, center, shadow, contain } from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container, backgroundColor: 'transparent' },
  imgBg: {
    width: '100%',
    height: '100%'
  },
  cardWrapper: { ...center, ...shadow, width: '85%', height: '50%' },
  card: { ...contain, height: '50%' }
});

export default styles;
