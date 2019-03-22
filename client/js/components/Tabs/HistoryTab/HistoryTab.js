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
import { colors } from '../../../config/styles';
import styles from './styles';

class HistoryTab extends Component {
  constructor(props) {
    super(props);
    this.state = { viewerId: null, progressBarProgress: 0.0 };
  }

  componentDidMount = async () => {
    const viewerId = await getLoggedInUser();
    this.setState({ viewerId });
    this.changeProgress();
    // this.setState({ progressBarProgress: this.props.data / 240 });
  };

  changeProgress = () => {
    this.setState({
      // progressBarProgress: parseFloat(Math.random().toFixed(1))
      // progressBarProgress: data.allUsers[0].points / 240
      progressBarProgress: 50 / 240
    });
  };

  renderSeparator = () => {
    return <View style={styles.hr} />;
  };

  render() {
    // const { progressBarProgress } = this.state;

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

          // const rewardsProgress = this.setState({
          //   progressBarProgress: points / 240
          // });

          return (
            <View style={styles.container}>
              <View style={[styles.container, styles.rewardsWrapper]}>
                <View style={styles.container}>
                  <View style={styles.pointsWrapper}>
                    {/* <CustomText>rewards indicator</CustomText> */}
                    <View style={[styles.currentProgress]}>
                      <Image
                        source={require('../../../assets/images/Icons/exit_button.png')}
                        // style={styles.img}
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
                        // progress={progressBarProgress}
                        progress={this.state.progressBarProgress}
                        // progress={rewardsProgress}
                        progressTintColor={colors.brand}
                        // progressViewStyle
                        // trackImage={require('../../../assets/images/Card/stores_inactive.png')}
                        trackTintColor={colors.neutralLight}
                        // onChange={() =>
                        //   this.setState({ progressBarProgress: points / 240 })
                        // }
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
                      source={require('../../../assets/images/Card/your_card.png')}
                      style={styles.img}
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
                      source={require('../../../assets/images/Card/your_card.png')}
                      style={styles.img}
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
                  renderItem={({ item }) => (
                    <View style={[styles.row, styles.pointsHistory]}>
                      <View style={[styles.row, styles.beerInfoWrapper]}>
                        <View style={styles.center}>
                          <Image
                            source={require('../../../assets/images/Card/your_card.png')}
                            style={[styles.img, { maxWidth: 25 }]}
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
                      <View style={styles.row}>
                        <View style={styles.center}>
                          <Image
                            source={require('../../../assets/images/Card/your_card.png')}
                            style={[styles.img, { maxWidth: 25 }]}
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
                  )}
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
