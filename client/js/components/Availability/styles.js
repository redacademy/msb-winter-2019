import { StyleSheet } from 'react-native';
import { center, colors, fonts, row } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...center,
    paddingTop: 10
  },
  availTitle: {
    color: colors.neutralDark,
    fontFamily: fonts.primarySemi,
    fontSize: fonts.sm,
    paddingBottom: 8,
    alignSelf: 'center'
  },
  infoContainer: {
    ...row,
    ...center,
    justifyContent: 'space-around',
    width: 275,
    maxHeight: 30
  },
  infoWrapper: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    ...row,
    height: '100%'
  },
  availImg: {
    resizeMode: 'contain',
    maxHeight: 25,
    marginRight: 5
  },
  availSize: {
    fontSize: 12,
    fontFamily: fonts.primarySemi,
    paddingBottom: 3,
    alignSelf: 'flex-end'
  }
});

export default styles;
