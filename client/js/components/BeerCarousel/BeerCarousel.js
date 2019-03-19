import React, { Component } from 'react';
import { Dimensions, Image, Text, View, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import styles from './styles';
import { hr, center, h2, h3, Subtitle1 } from '../../config/styles';

export class BeerCarousel extends Component {
  _renderItem({ item, index }) {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  }

  render() {
    console.log('&&&&&&&&&&&&&&&&&');
    return (
      <View>
        <Text>WHATSUPPPPPP</Text>
        {/* <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        /> */}
      </View>
    );
  }
}

// const Carousel = props => {
//   return (
//     <TouchableOpacity {...props}>
//       {items.map(item => {
//         return (
//           <View style={{ ...center, width: '100%' }}>
//             {/* <Image source={item.image} /> */}
//             <View {...props} style={styles.blah}>
//               <Text style={{ ...h2 }}>{item.title}</Text>
//               <Text style={{ ...Subtitle1 }}>{item.subtitle}</Text>
//               {/* <View style={{ ...hr }} /> */}
//             </View>
//           </View>
//         );
//       })}
//     </TouchableOpacity>
//   );
// };

// export default Carousel;
