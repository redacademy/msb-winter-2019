import React, { Component } from 'react';
import {
  View,
  Image,
  FlatList,
  Platform,
  ProgressBarAndroid,
  ProgressViewIOS
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Query } from 'react-apollo';
import moment from 'moment';
import PropTypes from 'prop-types';

import { HISTORY_QUERY, ALL_REWARDS_QUERY } from '../../../apollo/queries';
import { getLoggedInUser } from '../../../config/models';
import Loader from '../../Loader';
import CustomText from '../../CustomText';
import HistoryRewards from '../../HistoryRewards';
import { colors, dimensions } from '../../../config/styles';
import styles from './styles';

class HistoryTab extends Component {
  constructor(props) {
    super(props);
    this.state = { viewerId: null };
  }

  componentDidMount = async () => {
    const viewerId = await getLoggedInUser();
    this.setState({ viewerId });
  };

  getProgress = points => {
    return points / 240;
  };

  updateProgress = points => {
    let percent = 0;

    if (points <= 10) {
      percent = 0.5;
    } else if (points <= 30) {
      percent = 0.52;
    } else if (points <= 50) {
      percent = 0.6;
    } else if (points <= 60) {
      percent = 0.62;
    } else if (points <= 100) {
      percent = 0.65;
    } else if (points <= 140) {
      percent = 0.66;
    } else if (points <= 180) {
      percent = 0.67;
    } else if (points <= 240) {
      percent = 0.69;
    } else if (points > 240) {
      percent = 0;
    }

    return (points / 240) * dimensions.fullWidth * percent;
  };

  renderSeparator = () => {
    return <View style={styles.hr} />;
  };

  render() {
    const { navigation } = this.props;

    return (
      <Query query={ALL_REWARDS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <ErrorMessage>Error</ErrorMessage>;
          const allRewards = data.allRewards;

          return (
            <Query
              query={HISTORY_QUERY}
              variables={{ id: this.state.viewerId }}
              fetchPolicy='network-only'
            >
              {({ loading, error, data }) => {
                if (loading) return <Loader />;
                if (error) return <ErrorMessage>Error</ErrorMessage>;
                const user = data.allUsers && data.allUsers[0];
                if (!user) return <Loader />;

                const { pointsHistory, points } = user;

                return (
                  <View style={styles.container}>
                    <View style={styles.rewardsWrapper}>
                      <View style={styles.container}>
                        <View style={styles.pointsWrapper}>
                          <View
                            style={[
                              styles.currentProgress,
                              { left: this.updateProgress(points) }
                            ]}
                          >
                            <Image
                              source={require('../../../assets/images/Card/point_location.png')}
                              style={styles.progressIcon}
                            />
                            <View style={styles.progressPt} />
                            <CustomText style={styles.endPtsText}>
                              {points}
                            </CustomText>
                          </View>
                          <View style={styles.endPts} />
                          {Platform.OS === 'android' ? (
                            <ProgressBarAndroid
                              styleAttr='Horizontal'
                              indeterminate={false}
                              progress={this.getProgress(points)}
                              progressTintColor={colors.brand}
                              trackTintColor={colors.neutralLight}
                              style={styles.progressBar}
                            />
                          ) : (
                            <ProgressViewIOS
                              progress={this.getProgress(points)}
                              progressTintColor={colors.brand}
                              trackTintColor={colors.neutralLight}
                              style={styles.progressBar}
                            />
                          )}
                          <View style={styles.endPts} />
                        </View>
                        <View style={styles.endPtsWrapper}>
                          <CustomText style={styles.endPtsText}>0</CustomText>
                          <View style={styles.flex} />
                          <CustomText style={styles.endPtsText}>240</CustomText>
                        </View>
                      </View>
                      <HistoryRewards
                        allRewards={allRewards}
                        points={points}
                        navigation={navigation}
                      />
                    </View>
                    <View style={styles.container}>
                      <FlatList
                        data={pointsHistory}
                        renderItem={({ item }) => {
                          let beerLogo;

                          if (item.beer.title === 'FRUIT BOMB') {
                            beerLogo = require('../../../assets/images/Beers/squre_fruit_bomb.png');
                          } else if (item.beer.title === 'NAKED FOX') {
                            beerLogo = require('../../../assets/images/Beers/squre_naked_fox.png');
                          } else if (item.beer.title === 'GIMME SOME MO’') {
                            beerLogo = require('../../../assets/images/Beers/squre_gimme_some_mo.png');
                          } else if (item.beer.title === 'MAIN STREET') {
                            beerLogo = require('../../../assets/images/Beers/squre_main_street.png');
                          } else if (item.beer.title === 'WESTMINSTER') {
                            beerLogo = require('../../../assets/images/Beers/squre_westminster.png');
                          } else if (item.beer.title === 'AUSTRALIAN') {
                            beerLogo = require('../../../assets/images/Beers/squre_australian_saison.png');
                          } else if (item.beer.title === 'SLAUGHTERHOUSE') {
                            beerLogo = require('../../../assets/images/Beers/squre_slaughterhouse.png');
                          } else if (item.beer.title === 'BARKING MAD') {
                            beerLogo = require('../../../assets/images/Beers/squre_barking_mad.png');
                          }

                          return (
                            <View style={[styles.row, styles.pointsHistory]}>
                              <View
                                style={[styles.row, styles.beerInfoWrapper]}
                              >
                                <View style={styles.center}>
                                  <Image
                                    source={beerLogo}
                                    style={styles.beerImg}
                                  />
                                </View>
                                <View style={styles.beerInfo}>
                                  <CustomText style={styles.beerText}>
                                    {item.beer.title}
                                  </CustomText>
                                  <CustomText style={styles.beerType}>
                                    {item.beer.subtitle}
                                  </CustomText>
                                </View>
                              </View>
                              <View
                                style={[styles.row, styles.beerRewardsWrapper]}
                              >
                                <View style={styles.center}>
                                  <Image
                                    source={require('../../../assets/images/Card/star_2_stamps.png')}
                                    style={styles.stampsImg}
                                  />
                                  <CustomText style={styles.beerStamps}>
                                    {item.stamps} Stamps
                                  </CustomText>
                                </View>
                                <View style={styles.center}>
                                  <CustomText style={styles.beerText}>
                                    {moment(item.date).format('D MMM')}
                                  </CustomText>
                                </View>
                              </View>
                            </View>
                          );
                        }}
                        keyExtractor={item => item.id + ''}
                        ItemSeparatorComponent={this.renderSeparator}
                      />
                    </View>
                  </View>
                );
              }}
            </Query>
          );
        }}
      </Query>
    );
  }
}

HistoryTab.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default withNavigation(HistoryTab);
