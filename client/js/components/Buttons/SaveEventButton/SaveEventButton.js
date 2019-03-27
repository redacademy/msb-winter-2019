import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ADD_TO_USER_EVENTS,
  REMOVE_FROM_USER_EVENTS,
  USER_QUERY
} from '../../../apollo/queries';
import { graphql, compose } from 'react-apollo';
import CustomIcon from '../../CustomIcon';
import styles from './styles';

class SaveEventButton extends Component {
  toggleFavouriteEvent = async () => {
    const {
      user,
      event,
      addToFavouriteEvents,
      removeFromFavouriteEvents
    } = this.props;
    if (this.isEventFavourited()) {
      await removeFromFavouriteEvents({
        variables: { usersUserId: user.id, favouriteEventsEventId: event.id }
      });
    } else {
      await addToFavouriteEvents({
        variables: { usersUserId: user.id, favouriteEventsEventId: event.id }
      });
    }
  };

  isEventFavourited = () => {
    const { user, event } = this.props;
    return user.favouriteEvents.some(favEvent => favEvent.id === event.id);
  };

  render() {
    return (
      <CustomIcon
        style={styles.save}
        onPress={() => {
          this.toggleFavouriteEvent();
        }}
        source={
          this.isEventFavourited()
            ? require('../../../assets/images/Buttons/save_button_active.png')
            : require('../../../assets/images/Buttons/save_button_inactive.png')
        }
      />
    );
  }
}

SaveEventButton.propTypes = {
  event: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  addToFavouriteEvents: PropTypes.func.isRequired,
  removeFromFavouriteEvents: PropTypes.func.isRequired
};

export default compose(
  graphql(ADD_TO_USER_EVENTS, {
    name: 'addToFavouriteEvents',
    options: () => ({
      refetchQueries: [
        {
          query: USER_QUERY
        }
      ]
    })
  }),
  graphql(REMOVE_FROM_USER_EVENTS, {
    name: 'removeFromFavouriteEvents',
    options: () => ({
      refetchQueries: [
        {
          query: USER_QUERY
        }
      ]
    })
  })
)(SaveEventButton);
