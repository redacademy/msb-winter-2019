import { Dimensions, StyleSheet } from 'react-native';
import { center, row } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between'
    // height: Dimensions.get('window').height
  },
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
