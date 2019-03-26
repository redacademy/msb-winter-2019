import { Dimensions, StyleSheet } from 'react-native';
import { center, colors, container, fonts } from '../../../config/styles';

const styles = StyleSheet.create({
  container: { ...container },
  noEventsWrapper: { ...center, height: Dimensions.get('window').height * 0.5 },
  noEvents: {
    color: colors.neutralDark,
    fontFamily: fonts.primary,
    fontSize: fonts.sm
  }
});

export default styles;
