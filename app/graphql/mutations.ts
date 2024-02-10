import { gql, useQuery } from '@apollo/client';

export const REGISTER_USER = gql`
mutation RegisterUser($name: String!, $email: String!, $password: String!)  {
    signup(loginUserInput:{ name: $name, email: $email, password: $password } ) {
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    signin(loginUserInput: { email: $email, password: $password }) {
      email
      access_token
    }
  }
`;