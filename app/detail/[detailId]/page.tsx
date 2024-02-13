'use client'

import PropertyDetail from '@/app/components/detail/PropertyDetail';
import { GET_PROPERTY } from '@/app/graphql/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';

const DetailPage = () => {
    const params = useParams();
    const { loading, error, data } = useQuery(GET_PROPERTY, {
        variables: {
            id: params.detailId || 'default-property-id'
        }
    });
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const property = data?.getPropertyWithId[0]

    return (
      <div className='p-4'>
        <PropertyDetail
          property={property}
        />
      </div>
    );
}

export default DetailPage;
