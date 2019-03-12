import React from 'react';
import { Header } from 'react-navigation';

export const sharedNavigationOptions = navigation => ({
  header: props => <Header {...props} />,
  headerStyle: { backgroundCOlor: 'transparent' }
});
