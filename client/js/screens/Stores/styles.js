import { StyleSheet } from 'react-native';

import {
  container,
  dimensions,
  shadow2,
  subtitle2,
  body1,
  pv0,
  padding,
  jusBtwnRow,
  h3,
  center,
  row,
  jusStrt
} from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container, ...jusStrt },
  mapWrapper: { ...shadow2 },
  map: {
    height: dimensions.fullHeight * 0.3,
    width: dimensions.fullWidth
  },
  mapIcon: { width: 37, ...center },
  markerTitle: { ...subtitle2, textAlign: 'center' },
  storesWrapper: {
    width: '100%',
    paddingVertical: padding.sm,
    paddingHorizontal: padding.md
  },
  storeItem: { ...jusBtwnRow },
  distanceWrapper: { ...row, ...center },
  distance: { ...h3 },
  bold: { ...subtitle2, ...pv0 },
  body: { ...body1, ...pv0 }
});

export default styles;
