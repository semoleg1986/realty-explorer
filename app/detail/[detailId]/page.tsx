'use client'

import PropertyDetail from '@/app/components/detail/PropertyDetail';
import { GET_PROPERTY } from '@/app/graphql/queries';
import useCountries from '@/app/hooks/useCountries';
import { Property } from '@/app/interfaces/Property.props';
import { useQuery } from '@apollo/client';

interface paramsProps {
  detailId: string;
}

const DetailPage = ({params}: {params:paramsProps}) => {
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
