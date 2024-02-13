'use client'

import Container from '../components/Container';
import PropertyCard from '../components/property/PropertyCard';
import EmptyState from '../components/EmptyState';
import { GET_PROPERTIES_BY_USER } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const MyProperties = () => {
    const { data, loading, error } = useQuery(GET_PROPERTIES_BY_USER);
    console.log(data)
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Some error occurred: {error.message}</p>;
    }
  
    if (!data || !data.getAllPropertiesByUser || data.getAllPropertiesByUser.length === 0) {
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
          {data.getAllPropertiesByUser.map((item: any) => (
            <PropertyCard 
              key={item.id}
              data={item}
              disabled 
            />
          ))}
        </div>
      </Container>
    );
}

export default MyProperties;
