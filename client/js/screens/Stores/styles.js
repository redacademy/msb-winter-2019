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
  jusStrt,
  h100,
  w100
} from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container, ...jusStrt },
  mapWrapper: { ...shadow2 },
  map: {
    height: dimensions.fullHeight * 0.3,
    width: dimensions.fullWidth
  },
  mapIconWrapper: {
    justifyContent: 'flex-end',
    ...h100,
    ...w100
  },
  mapIcon: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: padding.xxxs
  },
  markerLabel: {
    height: 30,
    top: -5,
    left: 26,
    zIndex: 2,
    position: 'absolute'
  },
  markerTitle: { ...subtitle2, textAlign: 'center' },
  storesWrapper: {
    ...w100,
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
