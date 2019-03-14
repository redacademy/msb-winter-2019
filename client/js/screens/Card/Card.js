import React, { Component } from 'react';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import PropTypes from 'prop-types';
import Barcode from 'react-native-barcode-builder';

import CustomText from '../../components/CustomText';
import styles from './styles';
import { dimensions, underline, colors, shadow2 } from '../../config/styles';

const CardTab = () => (
  <View style={styles.container}>
    <View elevation={3} style={styles.cardWrapper}>
      <Image
        source={require('../../assets/images/Card/your_card.png')}
        style={styles.card}
      />
      <Barcode value='Test Card' format='CODE128' height={40} />
      <CustomText>This is Card.</CustomText>
    </View>
  </View>
);
const HistoryTab = () => <View style={styles.scene} />;
const RewardsTab = () => <View style={styles.scene} />;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'Card', accessibilityLabel: 'Card Tab' },
        { key: 'second', title: 'History', accessibilityLabel: 'History Tab' },
        { key: 'third', title: 'Rewards', accessibilityLabel: 'Rewards Tab' }
      ]
    };
  }

  renderLabel(props) {
    return ({ route }) => {
      const indexOfRoute = this.state.routes.findIndex(
        obj => obj.key === route.key
      );
      const focused = indexOfRoute === props.navigationState.index;
      return (
        <View>
          <CustomText
            style={[
              styles.labelStyle,
              focused ? styles.labelSelectedStyle : null
            ]}
          >
            {route.title}
          </CustomText>
        </View>
      );
    };
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/Card/logo_bg.png')}
        style={styles.imgBg}
      >
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: CardTab,
            second: HistoryTab,
            third: RewardsTab
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: dimensions.fullWidth }}
          renderTabBar={props => (
            <TabBar
              {...props}
              indicatorStyle={{
                ...underline,
                marginBottom: 5,
                height: 5
              }}
              style={{ backgroundColor: colors.white, ...shadow2 }}
              // labelStyle={{ ...h3, color: colors.black }}
              renderLabel={this.renderLabel(props)}
            />
          )}
        />
      </ImageBackground>
    );
  }
}

Card.propTypes = {};

export default Card;
