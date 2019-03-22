import React, { Component } from 'react';
import { View, Image, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Query } from 'react-apollo';
import moment from 'moment';

import { HISTORY_QUERY } from '../../../apollo/queries';
import { getLoggedInUser } from '../../../config/models';
import Loader from '../../Loader';
import CustomText from '../../CustomText';
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

          // const { pointsHistory } = this.props.;
          const { pointsHistory } = user;
          console.log('>>>>>>HISTORY USER', pointsHistory);

          return (
            <View style={styles.container}>
              <View style={[styles.container, styles.rewardsWrapper]}>
                <View style={styles.container}>
                  <CustomText>rewards indicator</CustomText>
                </View>
                <View style={styles.rewards}>
                  <View style={styles.container}>
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
                        <Image
                          source={require('../../../assets/images/Card/your_card.png')}
                          style={[styles.img, { maxWidth: 25 }]}
                        />
                        <View style={styles.beerInfo}>
                          <CustomText style={styles.beerText}>
                            {item.beer.title}
                          </CustomText>
                          <CustomText style={[styles.beerText, styles.grey]}>
                            {item.beer.subtitle}
                          </CustomText>
                        </View>
                      </View>
                      <View style={styles.row}>
                        <View>
                          <Image
                            source={require('../../../assets/images/Card/your_card.png')}
                            style={[styles.img, { maxWidth: 25 }]}
                          />
                          <CustomText style={styles.beerStamps}>
                            {item.stamps} Stamps
                          </CustomText>
                        </View>
                        <View>
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
