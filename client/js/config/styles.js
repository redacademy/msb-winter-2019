import { Dimensions } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
};

export const colors = {
  neutralLight: '#dddddd', // light grey
  neutralDark: '#636363', // med grey
  brand: '#eea922', // gold
  white: '#ffffff',
  black: '#000000'
};

export const center = { justifyContent: 'center', alignItems: 'center' };

export const row = { flexDirection: 'row' };

export const jusCenterRow = {
  ...row,
  justifyContent: 'center'
};

export const iteCenterRow = {
  ...row,
  alignItems: 'center'
};

export const margin = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
};

export const padding = {
  xxxs: 2,
  xxs: 6,
  xs: 10,
  sm: 15,
  md: 20,
  lg: 30,
  xl: 40
};

export const pb = {
  paddingBottom: padding.xs
};

export const pb0 = {
  paddingBottom: 0
};

export const pt0 = {
  paddingTop: 0
};

export const fonts = {
  xxxs: 10,
  xxs: 12,
  xs: 14,
  sm: 16,
  md: 18,
  lg: 26,
  xl: 28,
  bold: '600',
  primary: 'OpenSans-Regular',
  secondary: 'Franchise Free'
};

// Typography
export const h1 = {
  paddingVertical: padding.md,
  fontFamily: fonts.secondary,
  fontSize: fonts.xl
};

export const h2 = {
  paddingVertical: padding.md,
  fontFamily: fonts.secondary,
  fontSize: fonts.lg
};

export const h3 = {
  paddingVertical: padding.md,
  fontFamily: fonts.secondary,
  fontSize: fonts.md
};

export const title = {
  color: colors.white,
  paddingVertical: padding.sm,
  fontFamily: fonts.secondary,
  fontSize: fonts.sm
};

export const subtitle = {
  color: colors.neutralDark,
  fontSize: fonts.sm,
  paddingVertical: padding.xs,
  fontWeight: fonts.bold
};

export const subtitle2 = {
  color: colors.neutralDark,
  fontSize: fonts.xxs,
  paddingVertical: padding.xs,
  fontWeight: fonts.bold
};

export const subtitle3 = {
  fontSize: fonts.xxxs,
  paddingVertical: padding.xs,
  fontWeight: fonts.bold
};

export const body1 = {
  fontSize: fonts.xs,
  color: colors.neutralDark
};

export const button = {
  color: colors.white,
  textAlign: 'center',
  fontSize: fonts.md,
  fontFamily: 'OpenSans-Bold',
  paddingVertical: padding.xs
};

// components
export const loader = {
  flex: 1,
  justifyContent: 'center'
};

export const container = {
  flex: 1,
  backgroundColor: colors.white
};

export const hr = {
  height: 1,
  backgroundColor: colors.neutralLight,
  marginVertical: margin.sm * 1.7
};

export const verticalLine = {
  backgroundColor: colors.neutralLight
};

// export const brandButton = {
//   color: colors.white,
//   backgroundColor: colors.brand,
//   textAlign: 'center',
//   fontSize: fonts.sm,
//   fontWeight: fonts.bold,
//   paddingVertical: padding.sm
// };

// export const lightButton = {
//   color: colors.black,
//   backgroundColor: colors.white,
//   textAlign: 'center',
//   fontSize: fonts.sm,
//   fontWeight: fonts.bold,
//   paddingVertical: padding.sm
// };

// export const darkButton = {

//   backgroundColor: colors.black
//   // textAlign: 'center',
//   // fontSize: fonts.sm,
//   // fontWeight: fonts.bold,
//   // paddingVertical: padding.sm
// };
