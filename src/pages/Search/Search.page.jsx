import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../../utils/hooks/useFetch';
import { useDebounce } from '../../utils/hooks/useDebounce';

import { FlexContainer, ListItemImg, ListItemBody, ListItem } from './Search.styles';
import { Loader } from '../../components/Loader/Loader.styles';

function SearchPage({ match }) {
  const { data, loading, error, fetchVideos } = useFetch();
  const history = useHistory();

  useDebounce(
    () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      fetchVideos('getByName', match.params.query);
    },
    [match.params.query],
    300
  );

  const handleClick = (event) => {
    console.log(event.target.value);
    history.push(`/videoDetails/${event.target.value}`);
  };

  if (error) return <></>;
  return (
    <FlexContainer>
      {loading ? (
        <Loader />
      ) : (
        data.map((item) => {
          return (
            <ListItem key={item.id.videoId} type="button" onClick={handleClick}>
              <ListItemImg
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
              />
              <ListItemBody>
                <h5>{item.snippet.title}</h5>
                <h6>{item.snippet.channelTitle}</h6>
                <p>{item.snippet.description}</p>
              </ListItemBody>
            </ListItem>
          );
        })
      )}
    </FlexContainer>
  );
}

export default SearchPage;
