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

export const CREATE_PROPERTY = gql`
  mutation CreateProperty(
    $title: String!,
    $description: String!,
    $imageSrc: String!,
    $category: String!,
    $roomCount: Float!,
    $bathroomCount: Float!,
    $guestCount: Float!,
    $locationValue: String!,
    $price: Float!,
  ) {
    createProperty(createPropertyInput: {
      title: $title,
      description: $description,
      imageSrc: $imageSrc,
      category: $category,
      roomCount: $roomCount,
      bathroomCount: $bathroomCount,
      guestCount: $guestCount,
      locationValue: $locationValue,
      price: $price
    }) {
      title
      description
      imageSrc
      category
      roomCount
      bathroomCount
      guestCount
      locationValue
      status
    }
  }
`;

export const ADD_FAVS = gql`
  mutation AddtoFavorites($id: String!){
    addToFavorites(id: $id){
      favoriteIds
    }
  }
`

export const REMOVE_FAVS = gql`
  mutation RemoveFromFavorites($id: String!){
    removeFromFavorites(id: $id){
      favoriteIds
    }
  }
`