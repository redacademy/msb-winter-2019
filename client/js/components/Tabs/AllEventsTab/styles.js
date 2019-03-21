import { Dimensions, StyleSheet } from 'react-native';
import { center } from '../../../config/styles';

const styles = StyleSheet.create({
  carouselWrapper: {
    ...center,
    height: 500,
    width: Dimensions.get('window').width
  }
});

export default styles;
