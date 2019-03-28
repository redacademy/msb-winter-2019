import { Dimensions, StyleSheet } from 'react-native';
import {
  center,
  colors,
  fonts,
  row,
  shadow2,
  contain,
  w100,
  jusBtwn,
  margin,
  body1,
  dimensions,
  h100,
  capitalize,
  iteCntr,
  jusBtwnRow,
  jusArnd,
  subtitle1,
  pv0,
  subtitle2,
  vl,
  jusStrt,
  padding
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    width: dimensions.fullWidth,
    ...h100,
    ...jusBtwn
  },
  bannerWrapper: {
    ...shadow2,
    zIndex: 0,
    height: '40%'
  },
  bannerImg: {
    ...w100,
    resizeMode: 'cover'
    // ...contain,
    // transform: [{ scaleX: 1.1 }]
  },
  backIcon: {
    position: 'absolute',
    top: 20,
    left: 8
  },

  /**
   *  Beer
   **/

  beerContainer: {
    ...iteCntr,
    ...jusBtwn,
    paddingBottom: padding.md,
    // ...jusArnd,
    height: '55%'
  },
  beerWrapper: {
    ...iteCntr,
    ...jusStrt,
    width: '85%'
    // paddingVertical: padding.md
  },
  beerGrid: {
    // ...jusBtwnRow
    // ...iteCntr
    // width: '85%'
    ...row,
    ...jusBtwn
  },
  beerType: { ...jusBtwn },
  title: {
    fontFamily: fonts.primaryBold,
    fontSize: fonts.lg,
    ...capitalize
  },
  subtitle: {
    ...subtitle1,
    color: colors.neutralDark,
    ...pv0
  },
  rating: {
    marginTop: 15,
    marginBottom: 5
  },

  /**
   *  Beer Data
   **/
  beerDataWrapper: { ...vl, width: '25%' },
  beerDataContainer: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    paddingLeft: 15,
    maxWidth: 150
  },
  beerData: {
    ...body1,
    ...pv0
  },
  infoBold: {
    ...subtitle2,
    color: colors.black,
    ...pv0
  },
  description: {
    // width: '90%',
    ...body1,
    lineHeight: 20
  },

  /**  Buttons  **/
  btnContainer: {
    ...center,
    ...row
  },
  socialIconsWrapper: {
    ...center
  },
  socialbtn: { marginHorizontal: margin.xs }
});

export default styles;
