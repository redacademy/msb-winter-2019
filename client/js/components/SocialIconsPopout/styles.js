import { StyleSheet } from 'react-native';
import { row } from '../../config/styles';

const styles = StyleSheet.create({
  socialIcons: {
    ...row,
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
