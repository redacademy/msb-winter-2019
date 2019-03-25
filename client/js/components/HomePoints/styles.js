import { Dimensions, StyleSheet } from 'react-native';
import { center, colors, fonts, h4 } from '../../config/styles';

const styles = StyleSheet.create({
  singleGrid: {
    ...center,
    width: Dimensions.get('window').width * 0.5
  },
  growlerImg: {
    resizeMode: 'contain',
    width: 140
  },
  points: { ...h4, fontSize: 21, marginTop: -5 },
  toNextReward: {
    color: colors.neutralDark,
    fontSize: fonts.xs,
    fontFamily: fonts.primary
  }
});

export default styles;
