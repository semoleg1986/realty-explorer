import { gql, useQuery } from '@apollo/client';

export const GET_EMAIL =gql`
  query {
    me {
      email
      favoriteIds
    }
  }
`

export const GET_PROPERTIES = gql`
  query {
    getProperties {
        id
        title
        description
        imageSrc
        createdAt
        updatedAt
        category
        roomCount
        bathroomCount
        guestCount
        locationValue
        price
    }
  }
`;

export const GET_PROPERTY = gql`
  query getProperty($id: String!) {
    getPropertyWithId(id: $id) {
      id
      title
      description
      imageSrc
      createdAt
      updatedAt
      category
      roomCount
      bathroomCount
      guestCount
      locationValue
      price
    }
  }
`;