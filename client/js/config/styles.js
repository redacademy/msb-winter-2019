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

export const underline = {
  borderBottomColor: colors.brand,
  borderBottomWidth: 4
};

export const shadow1 = {
  backgroundColor: colors.white,
  borderWidth: 0.5,
  borderColor: colors.neutralLight,
  shadowOffset: { width: 0, height: 1 },
  shadowColor: colors.neutralDark,
  shadowOpacity: 1,
  shadowRadius: 2
};

export const shadow2 = {
  backgroundColor: colors.white,
  borderWidth: 0.5,
  borderColor: colors.neutralLight,
  shadowOffset: { width: 0, height: 3.5 },
  shadowColor: colors.neutralDark,
  shadowOpacity: 0.5,
  shadowRadius: 4
};

export const shadow3 = {
  backgroundColor: colors.white,
  borderWidth: 0.5,
  borderColor: colors.neutralLight,
  shadowOffset: { width: 0, height: -3 },
  shadowColor: colors.neutralLight,
  shadowOpacity: 1,
  shadowRadius: 3
};

export const contain = { resizeMode: 'contain' };

export const center = { justifyContent: 'center', alignItems: 'center' };

export const row = { flexDirection: 'row' };

export const jusCenterRow = {
  ...row,
  justifyContent: 'center'
};

export const jusBetweenRow = {
  ...row,
  justifyContent: 'space-between'
};

export const iteCenterRow = {
  ...row,
  alignItems: 'center'
};

export const margin = {
  xs: 5,
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
};

export const mv0 = {
  marginVertical: 0
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

export const pv0 = { paddingVertical: 0 };

// Typography
export const fonts = {
  xxxs: 9,
  xxs: 12,
  xs: 14,
  sm: 16,
  md: 18,
  lg: 26,
  xl: 34,
  xxl: 46,
  bold: '600',
  primary: 'OpenSans-Regular',
  primaryBold: 'OpenSans-Bold',
  primarySemi: 'OpenSans-SemiBold',
  secondary: 'Franchise Free'
};

export const h1 = {
  paddingVertical: padding.sm,
  fontFamily: fonts.secondary,
  fontSize: fonts.xxl,
  textTransform: 'uppercase'
};

export const h2 = {
  paddingVertical: padding.xs,
  fontFamily: fonts.secondary,
  fontSize: fonts.xl,
  textTransform: 'uppercase'
};

export const h3 = {
  paddingVertical: padding.xxxs,
  fontFamily: fonts.secondary,
  fontSize: fonts.lg,
  textTransform: 'uppercase'
};

export const h4 = {
  paddingVertical: padding.xxxs,
  fontFamily: fonts.secondary,
  fontSize: fonts.md,
  textTransform: 'uppercase'
};

export const subtitle1 = {
  fontSize: fonts.xs,
  paddingVertical: padding.xs,
  fontFamily: fonts.primarySemi
};

export const subtitle2 = {
  fontSize: fonts.xxs,
  paddingVertical: padding.xs,
  fontWeight: fonts.bold
};

export const subtitle3 = {
  color: colors.neutralDark,
  fontSize: fonts.xxxs,
  paddingVertical: padding.xxxs,
  fontFamily: fonts.primarySemi,
  textTransform: 'capitalize'
};

export const body1 = {
  fontSize: fonts.xxs,
  paddingVertical: padding.xs,
  color: colors.neutralDark
};

export const body2 = {
  fontSize: fonts.sm,
  fontFamily: fonts.primarySemi
};

export const button = {
  color: colors.white,
  textAlign: 'center',
  fontSize: fonts.md,
  fontFamily: 'OpenSans-Bold',
  paddingVertical: padding.xs,
  paddingHorizontal: padding.lg
};

// components
export const loader = {
  flex: 1,
  justifyContent: 'center'
};

export const container = {
  backgroundColor: colors.white,
  flex: 1,
  ...center
};

export const hr = {
  height: 2,
  backgroundColor: colors.neutralLight,
  marginVertical: margin.sm * 1.7,
  width: '100%'
};

export const vl = {
  marginHorizontal: margin.sm * 1.7,
  height: '100%',
  borderLeftColor: colors.neutralLight,
  borderLeftWidth: 4
};
