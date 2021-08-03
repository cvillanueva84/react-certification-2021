import React from 'react';
import HomeCard from '../../components/HomeCard/HomeCard.component';
import { useFetch } from '../../utils/hooks/useFetch';
import { useDebounce } from '../../utils/hooks/useDebounce';

import { CardsGrid, Homepage } from './Home.styles';
import { Loader } from '../../components/Loader/Loader.styles';

function HomePage() {
  // eslint-disable-next-line no-unused-vars
  const { data, loading, error, fetchVideos } = useFetch();

  useDebounce(
    () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      fetchVideos('getByName', 'Wizeline');
    },
    [],
    300
  );

  if (error) return <></>;
  return (
    <Homepage>
      <h1>First React Mini-challenge</h1>
      {loading ? (
        <Loader />
      ) : (
        <CardsGrid>
          {data.map((item) => {
            return (
              <HomeCard
                key={item.etag}
                videoId={item.id.videoId}
                imgUrl={item.snippet.thumbnails.default.url}
                title={item.snippet.title}
                description={item.snippet.description}
              />
            );
          })}
        </CardsGrid>
      )}
    </Homepage>
  );
}

export default HomePage;
