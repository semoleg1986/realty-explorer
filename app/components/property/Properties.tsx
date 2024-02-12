'use client'

import { useQuery } from '@apollo/client';
import EmptyState from '../EmptyState';
import { GET_PROPERTIES } from '@/app/graphql/queries';
import PropertyCard from './PropertyCard';
import Container from '../Container';

const Properties = () => {
  const { data, loading, error } = useQuery(GET_PROPERTIES);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>some error</p>;
  }

  if (!data || !data.getProperties || data.getProperties.length === 0) {
    return <EmptyState showReset />;
  }
  

  return (
    <Container>
      <div className="
        pt-24
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
      ">
        <div>
          {data.getProperties.map((item: any) => {
            return (
              <PropertyCard 
                key={item.id}
                data={item}
                disabled 
                />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Properties;
