<<<<<<< HEAD
import React, { Component } from "react";
import { View } from "react-native";

import Card from "./Card";
import styles from "./styles";
=======
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
>>>>>>> develop

class CardContainer extends Component {
  render() {
    return <Card navigation={this.props.navigation} />;
  }
}

CardContainer.propTypes = { navigation: PropTypes.object.isRequired };

export default CardContainer;
