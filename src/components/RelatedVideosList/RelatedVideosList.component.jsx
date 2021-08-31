import React, { useLayoutEffect } from 'react';
import RelatedVideoCard from '../RelatedVideoCard';
import { List } from './RelatedVideosListStyled';
import useYouTubeApi from '../../utils/hooks/useYoutubeApi';

const RelatedVideosList = ({ videoId }) => {
  const { relatedVideos, fetchRelatedVideos } = useYouTubeApi();

  useLayoutEffect(() => {
    fetchRelatedVideos(videoId);
  });

  return (
    <List>
      {relatedVideos.items[0] &&
        relatedVideos.items.map((video) => {
          return (
            <RelatedVideoCard key={video.snippet.thumbnails.default.url} video={video} />
          );
        })}
    </List>
  );
};

export default RelatedVideosList;
