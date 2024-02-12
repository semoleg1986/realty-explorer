import { useQuery } from '@apollo/client';
import { GET_EMAIL } from '../graphql/queries';
import { useEffect } from 'react';

const useCurrentUserEmail = () => {
    const { data } = useQuery(GET_EMAIL);
    
    useEffect(() => {
        if (data && data.me && data.me.favoriteIds) {
            localStorage.setItem('favoriteIds', JSON.stringify(data.me.favoriteIds));
        }
    }, [data]);

    if (!data) {
        return null;
    }

    return data.me.email;
}

export default useCurrentUserEmail;
