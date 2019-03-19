import { StyleSheet, Dimensions } from 'react-native';
import {
  center,
  container,
  row,
  h1,
  h2,
  Subtitle1,
  Subtitle2
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...center,
    width: '100%',
    margin: 10,
    marginTop: 20
  },
  slide: {
    ...center
  },

  title: { ...h1, ...center },
  subtitle: {
    ...Subtitle1,
    textTransform: 'capitalize'
  },
  beerContainer: {
    ...row,
    justifyContent: 'space-between',
    padding: 20,
    width: Dimensions.get('window').width * 0.7
  }
});

export default styles;
