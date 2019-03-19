import { StyleSheet } from 'react-native';
import { center, colors, fonts, row } from '../../config/styles';

const styles = StyleSheet.create({
  container: {},
  availTitle: {
    color: colors.neutralDark,
    fontFamily: fonts.primarySemi,
    fontSize: fonts.sm,
    paddingBottom: 10,
    alignSelf: 'center'
  },
  imgWrapper: {
    ...row,
    ...center,
    justifyContent: 'space-between',
    width: 250
  },
  availImg: {
    resizeMode: 'contain',
    marginRight: 5
  },
  availSize: {
    fontSize: 12
  }
});

export default styles;
