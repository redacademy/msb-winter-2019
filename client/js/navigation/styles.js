import { StyleSheet } from 'react-native';
import {
  jusBtwnRow,
  padding,
  h3,
  margin,
  dimensions,
  hr,
  jusCenterRow,
  contain,
  subtitle1
} from '../config/styles';

const styles = StyleSheet.create({
  // DrawerScreen
  drawerContainer: { flex: 1 },
  drawerItemWrapper: {
    ...jusBtwnRow,
    paddingVertical: padding.md,
    paddingHorizontal: padding.xl
  },
  drawerItem: { ...h3 },
  signOutWrapper: {
    paddingHorizontal: padding.xl,
    paddingVertical: padding.lg
  },
  hr: {
    ...hr,
    marginVertical: 0,
    marginLeft: margin.md,
    maxWidth: dimensions.fullWidth - 40
  },
  igFeedImg: { width: dimensions.fullWidth },
  igWrapper: { ...jusCenterRow },
  igLogo: { width: 30, ...contain, marginRight: margin.xs },
  igHashtag: { ...subtitle1 }
});

export default styles;
