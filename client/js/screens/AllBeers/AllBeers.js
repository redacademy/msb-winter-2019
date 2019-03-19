import React from 'react';
import {
  Dimensions,
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';

import BeerCarousel from '../../components/BeerCarousel';
import CustomText from '../../components/CustomText';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import {
  hr,
  center,
  row,
  h2,
  h3,
  Subtitle1,
  Subtitle2,
  Body1
} from '../../config/styles';

const AllBeers = props => {
  return (
    <View
      style={styles.container}
      // onPress={() => {
      //   this._carousel.snapToNext();
      // }}
    >
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        data={props.data.allBeers}
        loop={true}
        loopClonesPerSide={2}
        renderItem={({ item }) => {
          return (
            <View style={styles.slide}>
              <TouchableHighlight
                underlayColor={'transparent'}
                onPress={() => {
                  console.log('pressed!'); // @TODO navigate to Beer screen
                }}
              >
                <>
                  <Image source={require('')} />
                  <Text style={{ ...h2 }}>{item.title}</Text>
                  <Text style={{ ...Subtitle1, ...center }}>
                    {item.subtitle}
                  </Text>
                </>
              </TouchableHighlight>

              <View style={{ ...hr }} />
              <View
                style={{
                  width: Dimensions.get('window').width * 0.7,
                  ...center,
                  ...row,
                  justifyContent: 'space-between'
                }}
              >
                <View>
                  <CustomText style={{ ...Subtitle2 }}>
                    Style: {item.style}
                  </CustomText>
                  <CustomText style={{ ...Subtitle2 }}>
                    Released: {moment(item.releaseDate).format('MMM YY')}
                  </CustomText>
                </View>

                <View>
                  <Text style={{ ...Subtitle2 }}>ABV: {item.abv}</Text>
                  <Text style={{ ...Subtitle2 }}>IBU: {item.ibu}</Text>
                </View>
              </View>
              <View style={{ ...hr }} />
            </View>
          );
        }}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={300}
      />
    </View>
  );
};

AllBeers.propTypes = {
  data: PropTypes.object.isRequired
};

export default AllBeers;
