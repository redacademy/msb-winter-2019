import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import PropTypes from 'prop-types';

import CustomText from '../../components/CustomText';
import CardTab from '../../components/CardTab';
import HistoryTab from '../../components/HistoryTab';
import RewardsTab from '../../components/RewardsTab';
import { dimensions } from '../../config/styles';
import styles from './styles';

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
            indicatorStyle={styles.indicator}
            style={styles.tabbar}
            renderLabel={this.renderLabel(props)}
          />
        )}
      />
    );
  }
}

Card.propTypes = {};

export default Card;
