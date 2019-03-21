import { Dimensions, StyleSheet } from 'react-native';
import { center, container } from '../../../config/styles';

const styles = StyleSheet.create({
  container: { ...container },
  carouselWrapper: {
    ...center,
    justifyContent: 'space-between',
    paddingTop: 10,
    height: '65%',
    width: Dimensions.get('window').width
  }
});

export default styles;
