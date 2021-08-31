/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import VideoCard from '../VideoCard';
import VideoDetailsView from '../VideoDetailsView';

import { useFetchVideos } from '../../utils/hooks/useFetchVideos';
import { StateContext } from '../../context/State/state';

const CardListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 70px 70px 70px;
`;

const VideoList = () => {
  const stateContext = useContext(StateContext);
  const { location } = useHistory();
  const {
    video: { search, openedDetails },
    handleVideosList,
    handleSelectVideo,
    toggleOpenedDetails,
  } = stateContext;
  const { data } = useFetchVideos(search);

  const handleOpenDetails = (item) => {
    handleSelectVideo(item);
    toggleOpenedDetails(openedDetails);
  };

  const getVideoPath = (item) => {
    if (location.pathname.includes('favorites')) {
      return `/favorites/${item.id.videoId}`;
    }
    return `/${item.id.videoId}`;
  };

  useEffect(() => {
    handleVideosList(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    handleVideosList(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return openedDetails ? (
    <VideoDetailsView getVideoPath={getVideoPath} />
  ) : (
    <>
      {location.pathname.includes('favorites') ? (
        <h1 style={{ textAlign: 'center' }}>Favorites!</h1>
      ) : (
        <h1>Welcome to the Challenge!</h1>
      )}
      <CardListContainer>
        {data ? (
          data.error ? (
            <div>Error Fetching data...</div>
          ) : (
            data.items.map((item, idx) => (
              <VideoCard
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                description={item.snippet.description}
                title={item.snippet.title}
                image={item.snippet.thumbnails.medium.url}
                handleOpenDetails={handleOpenDetails}
                item={item}
                getVideoPath={getVideoPath}
              />
            ))
          )
        ) : (
          <div>Loading...</div>
        )}
      </CardListContainer>
    </>
  );
};

export default VideoList;
