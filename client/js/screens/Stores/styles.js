import { StyleSheet } from 'react-native';

import {
  container,
  dimensions,
  shadow3,
  subtitle2,
  body1,
  pv0
} from '../../config/styles';

const styles = StyleSheet.create({
  container: { ...container, justifyContent: 'flex-start' },
  map: {
    height: dimensions.fullHeight * 0.3,
    width: dimensions.fullWidth
  },
  storesWrapper: {
    ...shadow3,
    width: '100%'
  },
  bold: { ...subtitle2, ...pv0 },
  body: { ...body1, ...pv0 },
  // Kyle's
  // listContainer: {
  //   height: '100%',
  //   width: '100%'
  // },
  storeItem: {
    height: 100,
    flex: 1,
    justifyContent: 'center'
  }
});

export default styles;
