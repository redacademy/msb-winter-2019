import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { graphql, compose } from 'react-apollo';
import PropTypes from 'prop-types';
import Subheader from '../../components/Subheader';
import ToggleSwitch from '../../components/ToggleSwitch';
import BlackButton from '../../components/Buttons/BlackButton';
import {
  UPDATE_USER_EMAIL,
  USER_QUERY,
  UPDATE_USER_PROFILE_IMAGE
} from '../../apollo/queries';

import styles from './styles';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      avatarSource: null,
      text: null
    };
    this.selectImageOptions = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
  }

  getAvatarImageSource = () => {
    let uri = 'https://via.placeholder.com/200x200?text=No+image+available';
    const { user } = this.props;
    const { editing, avatarSource } = this.state;
    if (editing && avatarSource) {
      uri = avatarSource.uri;
    } else if (user.profilePicture && user.profilePicture.url) {
      uri = user.profilePicture.url;
    }
    return { uri };
  };

  handleImagePickerResponse = response => {
    if (response.didCancel || response.error) {
      return;
    }
    const source = { uri: response.uri };
    this.setState({
      avatarSource: source,
      editing: true
    });
  };

  handleButtonPress = async () => {
    const { editing, avatarSource, text } = this.state;
    const { user, updateUserProfileImage, updateUserEmail } = this.props;
    if (editing) {
      if (text) {
        await updateUserEmail({
          variables: { id: user.id, email: text }
        });
      }
      if (avatarSource && avatarSource.uri) {
        await updateUserProfileImage({
          variables: {
            userId: user.id,
            url: avatarSource.uri,
            contentType: 'image/png',
            name: 'profile_image'
          }
        });
      }
    }
    this.setState({ editing: !editing, avatarSource: null, text: null });
  };

  render() {
    const { user } = this.props;
    const { editing } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Subheader>About You</Subheader>
          <View style={styles.imageWrapper}>
            <TouchableOpacity
              onPress={() => {
                ImagePicker.showImagePicker(
                  this.selectImageOptions,
                  this.handleImagePickerResponse
                );
              }}
            >
              <Image
                style={styles.profilePic}
                source={this.getAvatarImageSource()}
              />
            </TouchableOpacity>
            <Text style={styles.name}>{user.name}</Text>
          </View>

          <View style={styles.emailContainer}>
            <Text style={styles.heading}>Email: </Text>
            <View style={styles.userEmailContainer}>
              {editing ? (
                <TextInput
                  autoCapitalize="none"
                  style={styles.userEmail}
                  onChangeText={text => this.setState({ text })}
                >
                  {user.email}
                </TextInput>
              ) : (
                <Text style={styles.userEmail}>{user.email}</Text>
              )}
            </View>
          </View>

          <View style={styles.divider}>
            <Text style={styles.heading}>Notifications</Text>
          </View>
          <View>
            <ToggleSwitch />
          </View>
          <View style={styles.buttonSaveContainer}>
            <BlackButton
              style={editing ? styles.buttonSave : styles.button}
              onPress={() => this.handleButtonPress()}
            >
              {editing ? 'Save Changes' : 'Edit'}
            </BlackButton>
          </View>
        </View>
      </ScrollView>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object.isRequired
};

export default compose(
  graphql(UPDATE_USER_EMAIL, {
    name: 'updateUserEmail',
    options: () => ({
      refetchQueries: [
        {
          query: USER_QUERY
        }
      ]
    })
  }),
  graphql(UPDATE_USER_PROFILE_IMAGE, {
    name: 'updateUserProfileImage',
    options: () => ({
      refetchQueries: [
        {
          query: USER_QUERY
        }
      ]
    })
  })
)(Profile);
