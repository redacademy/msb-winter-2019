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
  margin
} from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container, justifyContent: 'flex-start' },
  img: { width: dimensions.fullWidth },
  contactWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    padding: padding.md
  },
  msbInfo: { ...row, justifyContent: 'space-between' },
  msbTitle: {
    ...button,
    color: colors.black,
    paddingVertical: 0,
    paddingHorizontal: 0
  },
  msbAddress: { ...body1, paddingVertical: 0 },
  msbHours: { ...subtitle2, paddingVertical: 0 },
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
