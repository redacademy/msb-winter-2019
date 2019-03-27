import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CustomIcon from '../../CustomIcon';
import SocialIconsPopout from '../../SocialIconsPopout';

import styles from './styles';

class ShareButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideIcons: true
    };
    this.buttonTimeout = null;
  }

  clearButtonTimeout = () => {
    if (this.buttonTimeout) {
      clearTimeout(this.buttonTimeout);
      this.buttonTimeout = null;
    }
  };

  componentWillUnmount = () => {
    this.clearButtonTimeout();
  };

  toggleIcons = () => {
    this.clearButtonTimeout();
    this.setState(
      {
        hideIcons: !this.state.hideIcons
      },
      () => {
        if (!this.state.hideIcons) {
          const timeout = setTimeout(() => {
            this.toggleIcons();
          }, 2000);
          this.buttonTimeout = timeout;
        }
      }
    );
  };

  render() {
    return (
      <View style={styles.socialIconsWrapper}>
        {!this.state.hideIcons && <SocialIconsPopout />}
        <CustomIcon
          onPress={() => {
            this.toggleIcons();
          }}
          source={require('../../../assets/images/Icons/social_media_button.png')}
          style={styles.socialbtn}
        />
      </View>
    );
  }
}

export default ShareButton;
