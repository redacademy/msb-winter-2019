import { Dimensions, StyleSheet } from 'react-native';
import { center } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height
  },
  carouselWrapper: {
    ...center,
    justifyContent: 'space-between',
    paddingTop: 10,
    height: '65%',
    width: Dimensions.get('window').width
  }
});

export default styles;
