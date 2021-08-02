import React from 'react';
import HomeCard from '../../components/HomeCard/HomeCard.component';
import { useFetch } from '../../utils/hooks/useFetch';
import { useDebounce } from '../../utils/hooks/useDebounce';

import { CardsGrid, Homepage, Loader } from './Home.styles';

function HomePage() {
  const { data, loading, error, fetchVideos } = useFetch();

  useDebounce(
    () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      fetchVideos('Wizeline');
    },
    [data],
    5000
  );

  console.log(fetchVideos('Wizeline'));
  console.log(error);
  console.log(data);
  return (
    <Homepage>
      <h1>First React Mini-challenge</h1>
      <CardsGrid>
        {loading ? (
          <Loader />
        ) : (
          data.map((item) => {
            return (
              <HomeCard
                key={item.etag}
                videoId={item.id.videoId}
                imgUrl={item.snippet.thumbnails.default.url}
                title={item.snippet.title}
                description={item.snippet.description}
              />
            );
          })
        )}
      </CardsGrid>
    </Homepage>
  );
}

export default HomePage;
