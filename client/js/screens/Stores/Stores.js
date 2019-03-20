import React, { Component } from 'react';

import ChangeRegion from '../../components/ChangeRegion';
import styles from './styles';

const Stores = ({ stores }) => {
  return <ChangeRegion styles={styles} stores={stores} />;
};

Stores.propTypes = {};

export default Stores;
