import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardContainer = ({ navigation }) => <Card navigation={navigation} />;

CardContainer.propTypes = { navigation: PropTypes.object.isRequired };

export default CardContainer;
