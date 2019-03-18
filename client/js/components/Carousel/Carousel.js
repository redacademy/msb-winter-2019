import React from 'react';
import { Dimensions, Image, Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import { hr, center, h2, h3, Subtitle1 } from '../../config/styles';
import Carousel from 'react-native-snap-carousel';

export class MyCarousel extends Component {
  _renderItem({ item, index }) {
    console.log('ITEM:', item);
    console.log('INDEX:', index);
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
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
