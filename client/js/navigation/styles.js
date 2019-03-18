import { StyleSheet } from 'react-native';
import { container } from '../config/styles';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#fff'
    ...container
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  menuItem: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  }
});

export default styles;
