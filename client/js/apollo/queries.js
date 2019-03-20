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

//----------------- MUTATIONS------------------>

export const ADD_TO_USER_BEERS = gql`
  mutation($favouriteBeersBeerId: ID!, $usersUserId: ID!) {
    addToUserBeer(
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
      userUser {
        id
        name
      }
    }
  }
`;

export const ADD_TO_USER_POINTS = gql`
  mutation($pointsHistoryPointId: ID!, $userUserId: ID!) {
    addToUserPoint(
      pointsHistoryPointId: $pointsHistoryPointsId
      userUserId: $userUserId
    )
    pointsHistoryPoint {
      id
      beer {
        id
        point {
          id
          stamps
        }
        title
        subtitle
      }
    }
    userUser {
      id
      name
      points
    }
  }
`;

export const ADD_TO_USER_REDEEMS = gql`
  mutation($redeemHistory: ID, $usersUserId: ID) {
    addToUserRedeems(redeemHistory: $redeemHistory, usersUserId: $usersUserId) {
      redeemHistoryRedeem {
        id
        reward {
          title
          id
          points
        }
      }
      userUser {
        id
        name
        points
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
      favouriteBeersBeerId {
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
      favouriteEventsEventId {
        id
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