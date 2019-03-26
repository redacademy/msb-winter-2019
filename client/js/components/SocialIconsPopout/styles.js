import { Dimensions, StyleSheet } from 'react-native';
import { row, center } from '../../config/styles';

const styles = StyleSheet.create({
  socialIcons: {
    ...row,
    // ...center,
    // justifyContent: 'center',
    position: 'absolute',
    height: 80,
    zIndex: 10,
    bottom: 45
  },
  socialIcon: {
    margin: 0,
    alignSelf: 'flex-end'
  },
  centerIcon: {
    alignSelf: 'flex-start',
    marginBottom: 10
  }
});

export default styles;
