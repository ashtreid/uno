import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token 
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_GAMES = gql`
  mutation updateGames($games: Int!) {
    updateGames(games: $games) {
      _id
      username
      email
      games
      wins
    }
  }
`;

export const UPDATE_WINS = gql`
  mutation updateWins($wins: Int!) {
    updateWins(wins: $wins) {
      _id
      username
      email
      games
      wins
    }
  }
`;


