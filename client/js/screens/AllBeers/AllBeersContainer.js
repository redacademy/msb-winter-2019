import React, { Component } from 'react';
import { View } from 'react-native';

import AllBeers from './AllBeers';
import styles from './styles';

const items = [
  {
    title: 'Fruit Bomb',
    subtitle: 'kettlesour',
    description: 'beer1 description',
    image: '../../assets/images/Beers/squre_fruit_bomb.png'
  },
  {
    title: 'Pilsner',
    subtitle: 'Pilsner',
    description: 'Pilsner description',
    image: '../../assets/images/Beers/squre_fruit_bomb.png'
  },
  {
    title: 'IPA',
    subtitle: 'IPA',
    description: 'IPA description',
    image: '../../assets/images/Beers/squre_fruit_bomb.png'
  }
];

class AllBeersContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        {items.map(item => {
          <AllBeers item={item} />;
        })}
      </View>
    );
  }
}

export default AllBeersContainer;
