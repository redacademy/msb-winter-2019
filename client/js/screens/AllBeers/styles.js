import { Dimensions, StyleSheet } from 'react-native';
import { center } from '../../config/styles';

const styles = StyleSheet.create({
  carouselWrapper: {
    ...center,
    justifyContent: 'space-between',
    paddingTop: 10,
    height: '75%',
    width: Dimensions.get('window').width
  },
  subheader: {}
});

export default styles;
