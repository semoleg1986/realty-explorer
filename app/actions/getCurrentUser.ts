import { useQuery } from '@apollo/client';
import { GET_EMAIL } from '../graphql/queries';

const useCurrentUserEmail = () => {
    const { data } = useQuery(GET_EMAIL);

    if (!data) {
        return null;
    }

    return data.me.email;
}

export default useCurrentUserEmail;
