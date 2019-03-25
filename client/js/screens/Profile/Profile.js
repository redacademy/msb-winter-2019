import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import PropTypes from "prop-types";
import Subheader from "../../components/Subheader";
import ToggleSwitch from "../../components/ToggleSwitch";

import styles from "./styles";

const Profile = ({ user }) => {
  return user ? (
    <ScrollView>
      <View style={styles.container}>
        <Subheader>About You</Subheader>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.profilePic}
            source={require("../../assets/images/Beers/squre_fruit_bomb.png")}
          />
          <Text style={styles.name}>{user.name}</Text>
        </View>

        <View style={styles.emailContainer}>
          <Text style={styles.heading}>Email: </Text>
          <View style={styles.userEmailContainer}>
            <Text style={styles.userEmail}>{user.email}</Text>
          </View>
        </View>

        <View style={styles.divider}>
          <Text style={styles.heading}>Notifications</Text>
        </View>
        <View>
          <ToggleSwitch />
        </View>
      </View>
    </ScrollView>
  ) : (
    <View />
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired
};

export default Profile;
