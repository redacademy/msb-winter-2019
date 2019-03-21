import { StyleSheet, Dimensions } from 'react-native';
import { center, colors, fonts, h2, hr, subtitle1 } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingBottom: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Dimensions.get('window').height
  },
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15
  },
  imgWrapper: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.neutralDark,
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: '#fff'
  },
  img: {
    width: 215,
    height: 215
  },
  title: { ...h2, ...center, paddingBottom: 0 },
  subtitle: {
    color: colors.neutralDark,
    fontSize: fonts.sm,
    paddingBottom: 0
  },

  infoWrapper: { ...center, paddingBottom: 10 },
  dataWrapper: {
    width: Dimensions.get('window').width * 0.8,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingLeft: 24,
    paddingRight: 15
  },
  eventData: {
    ...subtitle1,
    fontSize: 14,
    fontFamily: fonts.primary,
    paddingTop: 3,
    paddingBottom: 3
  },
  boldData: {
    ...subtitle1
  },
  border: { ...hr, width: 270 }
});

export default styles;
