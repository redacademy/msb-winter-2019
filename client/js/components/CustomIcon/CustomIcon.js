import React from 'react';
import { Image } from 'react-native';

import styles from './styles';

export default props => <Image {...props} style={[styles.img, props.style]} />;
