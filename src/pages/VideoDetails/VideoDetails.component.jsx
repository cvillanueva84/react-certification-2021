import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../../utils/hooks/useFetch';
import { useDebounce } from '../../utils/hooks/useDebounce';

import {
  FlexContainer,
  VideoList,
  ListItem,
  ListItemImg,
  ListItemBody,
  Text,
} from './VideoDetails.styles';
import { Loader } from '../../components/Loader/Loader.styles';

function VideoDetails({ match }) {
  const history = useHistory();
  const video = useFetch();
  const relatedVideos = useFetch();

  useDebounce(
    () => {
      video.fetchVideos('getById', match.params.query);
      relatedVideos.fetchVideos('getRelatedVideos', match.params.query);
    },
    [match.params.query],
    300
  );
  if (video.error) return <></>;
  if (video.loading)
    return (
      <>
        <Loader />
      </>
    );
  return (
    <>
      <FlexContainer>
        <div>
          <iframe
            // eslint-disable-next-line no-undef
            src={`https://www.youtube.com/embed/${match.params.query}`}
            frameBorder="0"
            title="match"
            width="100%"
            height="600px"
            allowFullScreen
          />
          <Text as="h2">{video.data[0].snippet.title}</Text>
          <p>{video.data[0].snippet.description}</p>
        </div>
        <VideoList>
          <Text as="h2">Related Videos</Text>
          {relatedVideos.loading ? (
            <Loader />
          ) : (
            relatedVideos.data.map((item) => {
              return (
                <ListItem
                  key={item.id.videoId}
                  onClick={() => history.push(`/videoDetails/${item.id.videoId}`)}
                >
                  <ListItemImg
                    src={item.snippet.thumbnails.default.url}
                    alt={item.snippet.title}
                  />
                  <ListItemBody>
                    <h5>{item.snippet.title}</h5>
                    <p>{item.snippet.channelTitle}</p>
                  </ListItemBody>
                </ListItem>
              );
            })
          )}
        </VideoList>
      </FlexContainer>
    </>
  );
}

export default VideoDetails;
