import { StyleSheet } from 'react-native';
import { container } from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container },
  textInput: {
    width: '50%',
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 5
  }
});

export default styles;
