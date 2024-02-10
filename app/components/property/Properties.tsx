'use client'

import { useQuery } from '@apollo/client';
import EmptyState from '../EmptyState';
import { GET_PROPERTIES } from '@/app/graphql/queries';
import PropertyCard from './PropertyCard';

const Properties = () => {
  const { data, loading, error } = useQuery(GET_PROPERTIES);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !data) {
    return <EmptyState showReset />;
  }

  return (
    <div>
      {data.getProperties.map((item: any) => {
        return (
          <PropertyCard 
            key={item.id}
            data={item} 
            />
        );
      })}
    </div>
  );
};

export default Properties;
