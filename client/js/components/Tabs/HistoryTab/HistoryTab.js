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

import { HISTORY_QUERY } from '../../../apollo/queries';
import { getLoggedInUser } from '../../../config/models';
import Loader from '../../Loader';
import CustomText from '../../CustomText';
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
    return (points / 240) * dimensions.fullWidth * 0.5;
  };

  renderSeparator = () => {
    return <View style={styles.hr} />;
  };

  render() {
    return (
      <Query
        query={HISTORY_QUERY}
        variables={{ id: this.state.viewerId }}
        fetchPolicy='network-only'
      >
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <CustomText>Error</CustomText>;
          const user = data.allUsers && data.allUsers[0];
          if (!user) return <Loader />;

          const { pointsHistory, points } = user;

          return (
            <View style={styles.container}>
              <View style={[styles.container, styles.rewardsWrapper]}>
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
                        style={{ height: 30, resizeMode: 'contain' }}
                      />
                      <View style={styles.progressPt} />
                      <CustomText style={styles.endPtsText}>
                        {points}
                      </CustomText>
                    </View>
                    <View style={styles.endPts} />
                    {Platform.OS === 'android' ? (
                      <ProgressBarAndroid
                        progress={progressBarProgress}
                        styleAttr='Horizontal'
                        indeterminate={false}
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
                <View style={styles.rewards}>
                  <View style={[styles.container, styles.prevReward]}>
                    <CustomText style={styles.rewardsTitle}>
                      Previous Reward
                    </CustomText>
                    <CustomText style={styles.stamps}>Stamps</CustomText>
                    <Image
                      source={require('../../../assets/images/Icons/growler_icon.png')}
                      style={styles.rewardsImg}
                    />
                    <CustomText style={styles.reward}>
                      16oz Beer in Tasting Room
                    </CustomText>
                  </View>
                  <View style={[styles.container, styles.nextReward]}>
                    <CustomText style={styles.rewardsTitle}>
                      next reward
                    </CustomText>
                    <CustomText style={styles.stamps}>Stamps</CustomText>
                    <Image
                      source={require('../../../assets/images/Icons/growler_icon.png')}
                      style={styles.rewardsImg}
                    />
                    <CustomText style={styles.reward}>
                      Growler Refill
                    </CustomText>
                  </View>
                </View>
              </View>
              <View style={[styles.container, styles.historyWrapper]}>
                <FlatList
                  data={user.pointsHistory}
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
                        <View style={[styles.row, styles.beerInfoWrapper]}>
                          <View style={styles.center}>
                            <Image source={beerLogo} style={styles.beerImg} />
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
                        <View style={[styles.row, styles.beerRewardsWrapper]}>
                          <View style={styles.center}>
                            <Image
                              source={require('../../../assets/images/Card/star_2_stamps.png')}
                              style={styles.img}
                            />
                            <CustomText style={styles.beerStamps}>
                              {item.stamps} Stamps
                            </CustomText>
                          </View>
                          {/* <View style={[styles.flex, { width: '10%' }]} /> */}
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
  }
}

export default withNavigation(HistoryTab);
