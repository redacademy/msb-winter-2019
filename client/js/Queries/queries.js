import gql from "graphql-tag";

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
  query allBeers {
    id
    title
    subtitle
  }
`;

export const ALL_EVENTS_QUERY = gql`
  query allEvents {
    id
    date
    title
    subtitle
    location
    time
  }
`;

export const EVENTS_QUERY = gql`
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
  query allStores {
    id
    name
    long
    lat
    phone
    hours
    address
  }
`;

export const STORES_QUERY = gql`
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
  query allRewards {
    id
    title
    points
  }
`;

export const REWARDS_QUERY = gql`
  query($id: ID!) {
    allRewards {
      id
      title
      points
    }
  }
`;

//----------------- MUTATIONS------------------>

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
