import gql from 'graphql-tag';

export const BEER_QUERY = gql`
  query($id: ID) {
    allBeers(filter: { id: $id }) {
      id
      title
      subtitle
      description
      style
      ibu
      abv
      releaseDate
      users {
        id
        email
        name
      }
    }
  }
`;

export const ALL_BEERS_QUERY = gql`
  query {
    allBeers {
      id
      title
      subtitle
      style
      ibu
      abv
      releaseDate
    }
  }
`;

export const ALL_EVENTS_QUERY = gql`
  query {
    allEvents {
      id
      date
      title
      subtitle
      location
      time
    }
  }
`;

export const EVENT_QUERY = gql`
  query($id: ID!) {
    allEvents(filter: { id: $id }) {
      id
      title
      subtitle
      location
      time
      date
      description
      users {
        id
        email
        name
      }
    }
  }
`;

export const ALL_STORES_QUERY = gql`
  query {
    allStores {
      id
      name
      long
      lat
      phone
      hours
      address
      city
      province
      postalCode
    }
  }
`;

export const STORE_QUERY = gql`
  query($id: ID!) {
    allStores(filter: { id: $id }) {
      id
      name
      long
      lat
      phone
      hours
      address
      city
      province
      postalCode
    }
  }
`;

export const ALL_REWARDS_QUERY = gql`
  query {
    allRewards {
      id
      title
      points
    }
  }
`;

export const REWARD_QUERY = gql`
  query($id: ID!) {
    allRewards {
      id
      title
      points
    }
  }
`;

export const USER_QUERY = gql`
  query($id: ID) {
    allUsers(filter: { id: $id }) {
      id
      email
      dateOfBirth
      points
      name
      profilePicture {
        id
        url
      }
      favouriteBeers {
        id
        title
        subtitle
      }
      favouriteEvents {
        id
        title
        subtitle
        location
        time
        date
        description
      }
    }
  }
`;

export const HISTORY_QUERY = gql`
  query($id: ID) {
    allUsers(filter: { id: $id }) {
      id
      points
      pointsHistory {
        id
        date
        stamps
        beer {
          id
          title
          abv
          subtitle
          description
          ibu
          rating
          releaseDate
          style
        }
      }
    }
  }
`;

//----------------- MUTATIONS------------------>

export const ADD_TO_USER_BEERS = gql`
  mutation($favouriteBeersBeerId: ID!, $usersUserId: ID!) {
    addToUserBeers(
      favouriteBeersBeerId: $favouriteBeersBeerId
      usersUserId: $usersUserId
    ) {
      favouriteBeersBeer {
        id
        title
      }
      usersUser {
        id
        name
      }
    }
  }
`;

export const ADD_TO_USER_EVENTS = gql`
  mutation($favouriteEventsEventId: ID!, $usersUserId: ID!) {
    addToUserEvents(
      favouriteEventsEventId: $favouriteEventsEventId
      usersUserId: $usersUserId
    ) {
      favouriteEventsEvent {
        id
        title
        time
        date
        description
      }
    }
  }
`;

export const SET_USER_POINTS = gql`
  mutation($id: ID!, $points: Int!) {
    updateUser(id: $id, points: $points) {
      id
      email
      dateOfBirth
      points
      favouriteBeers {
        id
        title
        subtitle
      }
      favouriteEvents {
        id
        title
      }
    }
  }
`;

export const ADD_TO_USER_POINT_HISTORY = gql`
  mutation($date: DateTime!, $stamps: Int!, $beerId: ID!, $userId: ID!) {
    createPoint(
      date: $date
      stamps: $stamps
      beerId: $beerId
      userId: $userId
    ) {
      id
      date
      stamps
      beer {
        id
        title
        subtitle
        description
      }
    }
  }
`;

export const ADD_TO_USER_REDEEMS = gql`
  mutation($date: DateTime!, $rewardId: ID!, $userId: ID!) {
    createRedeem(date: $date, rewardId: $rewardId, userId: $userId) {
      id
      date
      reward {
        id
        title
      }
      user {
        id
        name
        email
      }
    }
  }
`;

export const REMOVE_FROM_USER_BEERS = gql`
  mutation($favouriteBeersBeerId: ID!, $usersUserId: ID!) {
    removeFromUserBeers(
      favouriteBeersBeerId: $favouriteBeersBeerId
      usersUserId: $usersUserId
    ) {
      favouriteBeersBeer {
        id
      }
    }
  }
`;

export const REMOVE_FROM_USER_EVENTS = gql`
  mutation($favouriteEventsEventId: ID!, $usersUserId: ID!) {
    removeFromUserEvents(
      favouriteEventsEventId: $favouriteEventsEventId
      usersUserId: $usersUserId
    ) {
      favouriteEventsEvent {
        id
      }
    }
  }
`;

export const UPDATE_USER_EMAIL = gql`
  mutation($id: ID!, $email: String!) {
    updateUser(id: $id, email: $email) {
      id
      name
      email
    }
  }
`;

export const UPDATE_USER_NAME = gql`
  mutation($id: ID!, $name: String!) {
    updateUser(id: $id, name: $name) {
      id
      name
    }
  }
`;

export const UPDATE_USER_PROFILE_IMAGE = gql`
  mutation($userId: ID!, $url: String!, $contentType: String!, $name: String!) {
    createFile(
      userId: $userId
      url: $url
      contentType: $contentType
      name: $name
    ) {
      id
      name
      url
      contentType
      user {
        id
        email
      }
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation(
    $email: String!
    $password: String!
    $dateOfBirth: DateTime!
    $name: String!
  ) {
    signupUser(
      email: $email
      password: $password
      dateOfBirth: $dateOfBirth
      name: $name
    ) {
      id
      token
    }
  }
`;

export const SIGNIN_MUTATION = gql`
  mutation($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;
