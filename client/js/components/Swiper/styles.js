import { StyleSheet } from 'react-native';
import {
  dimensions,
  jusCenterRow,
  colors,
  margin,
  container
} from '../../config/styles';

const styles = StyleSheet.create({
  // Set width and height to the screen size
  fullScreen: {
    width: dimensions.fullWidth,
    height: dimensions.fullHeight
  },
  // Main container
  container: {
    backgroundColor: 'transparent',
    position: 'relative'
  },
  // Slide
  slide: {
    backgroundColor: 'transparent',
    ...container
  },
  // Pagination indicators
  pagination: {
    position: 'absolute',
    bottom: 110,
    left: 0,
    right: 0,
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    ...jusCenterRow,
    alignItems: 'flex-end',
    backgroundColor: 'transparent'
  },
  // Pagination dot
  dot: {
    backgroundColor: colors.white,
    width: 8,
    height: 8,
    borderRadius: 4,
    // marginLeft: 3,
    // marginRight: 3,
    marginHorizontal: margin.xxs,
    marginVertical: margin.xxs
    // marginTop: 3,
    // marginBottom: 3
  },
  // Active dot
  activeDot: {
    backgroundColor: colors.brand
  }
  // wrapper: { flex: 1 }
});

export default styles;
