import { StyleSheet } from 'react-native';

import {
  container,
  dimensions,
  shadow2,
  subtitle2,
  body1,
  pv0,
  padding
} from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container, justifyContent: 'flex-start' },
  mapWrapper: { ...shadow2 },
  map: {
    height: dimensions.fullHeight * 0.3,
    width: dimensions.fullWidth
  },
  markerTitle: { ...subtitle2, textAlign: 'center' },
  storesWrapper: {
    width: '100%',
    paddingVertical: padding.sm,
    paddingHorizontal: padding.md
  },

  bold: { ...subtitle2, ...pv0 },
  body: { ...body1, ...pv0 }
});

export default styles;
