import { StyleSheet } from 'react-native';
import { colors, fonts, row } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderColor: colors.brand,
    borderWidth: 2,
    position: 'absolute',

    width: 100,
    zIndex: 5,
    bottom: 31
  },
  infoWrapper: {
    alignItems: 'center',
    ...row,
    borderColor: colors.brand,
    borderBottomWidth: 2,
    height: 39,
    width: 98
  },
  availImg: {
    resizeMode: 'contain',
    height: 26,
    marginRight: 5,
    marginLeft: 5,
    width: 16
  },

  canWrapper: {
    alignItems: 'center',
    ...row,
    height: 39
  },
  canImg: {
    resizeMode: 'contain',
    height: 20,
    marginRight: 5,
    marginLeft: 5,
    width: 16
  },
  availSize: {
    color: fonts.neutralDark,
    fontSize: 10,
    fontFamily: fonts.primarySemi
  }
});

export default styles;
