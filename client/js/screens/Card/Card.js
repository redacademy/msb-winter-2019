import React from 'react';
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';
import PropTypes from 'prop-types';

// import CardTab from '../../components/CardTab';
// import HistoryTab from '../../components/HistoryTab';
// import RewardsTab from '../../components/RewardsTab';
import {
  dimensions,
  colors,
  underline,
  h3,
  shadow2
} from '../../config/styles';

// const TabScreen = createAppContainer(
//   createMaterialTopTabNavigator(
//     {
//       Card: CardTab,
//       History: HistoryTab,
//       Rewards: RewardsTab
//     },
//     {
//       tabBarOptions: {
//         activeTintColor: colors.black,
//         inactiveTintColor: colors.neutralLight,
//         indicatorStyle: {
//           ...underline,
//           borderBottomWidth: 3,
//           backgroundColor: colors.brand,
//           marginBottom: 10,
//           marginLeft: 15,
//           maxWidth: dimensions.fullWidth / 3 - 30,
//           width: '100%'
//         },
//         labelStyle: {
//           ...h3,
//           marginTop: 0
//         },
//         style: {
//           backgroundColor: 'white',
//           ...shadow2,
//           height: 50
//         }
//       }
//     }
//   )
// );

const Card = ({ navigation }) => {
  navigation.navigate('TabScreens');
  return null;
};

Card.propTypes = {};

export default Card;
