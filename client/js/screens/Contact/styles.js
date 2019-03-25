import { StyleSheet } from 'react-native';
import {
  container,
  dimensions,
  padding,
  subtitle2,
  button,
  body1,
  colors,
  row,
  h4,
  hr,
  margin,
  jusBtwn,
  jusStrt,
  pv0,
  ph0
} from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container, ...jusStrt },
  img: { width: dimensions.fullWidth },
  contactWrapper: {
    flex: 1,
    ...jusBtwn,
    padding: padding.md
  },
  msbInfo: { ...row, ...jusBtwn },
  msbTitle: {
    ...button,
    color: colors.black,
    ...pv0,
    ...ph0
  },
  msbAddress: { ...body1, ...pv0 },
  msbHours: { ...subtitle2, ...pv0 },
  msbContact: { ...row, paddingLeft: padding.md },
  socialWrapper: { height: '40%' },
  socialTitle: {
    ...h4
  },
  socialIconsWrapper: {
    ...row,
    ...hr,
    width: '50%',
    marginVertical: margin.sm
  },
  socialIcon: { marginVertical: margin.xs },
  ml0: { marginLeft: 0 }
});

export default styles;
