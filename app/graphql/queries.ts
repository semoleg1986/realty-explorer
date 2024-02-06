import { gql, useQuery } from '@apollo/client';

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