import { Dimensions, StyleSheet } from 'react-native';
import { center } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.6,
    width: Dimensions.get('window').width
  },
  carouselWrapper: {
    ...center,
    justifyContent: 'space-evenly',
    marginVertical: 10
  }
});

export default styles;
