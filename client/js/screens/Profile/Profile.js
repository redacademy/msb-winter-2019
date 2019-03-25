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
import PropTypes from 'prop-types';
import Subheader from '../../components/Subheader';
import ToggleSwitch from '../../components/ToggleSwitch';
import BlackButton from '../../components/Buttons/BlackButton';

import styles from './styles';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true,
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

  render() {
    const { user } = this.props;
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
                source={
                  this.state.avatarSource || {
                    uri:
                      'https://via.placeholder.com/200x200?text=No+image+available'
                  }
                }
              />
            </TouchableOpacity>
            <Text style={styles.name}>{user.name}</Text>
          </View>

          <View style={styles.emailContainer}>
            <Text style={styles.heading}>Email: </Text>
            <View style={styles.userEmailContainer}>
              {this.state.editing ? (
                <TextInput
                  style={styles.userEmail}
                  placeholder={user.email}
                  onChangeText={text => this.setState({ text })}
                />
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
              style={this.state.editing ? styles.buttonSave : styles.button}
            >
              {this.state.editing ? 'Save Changes' : 'Edit'}
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

export default Profile;
