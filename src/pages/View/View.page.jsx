import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import HorizontalCard from '../../components/HorizontalCard';
import useYoutubeApi from '../../components/helpers/useYoutubeApi';

import {
  Viewpage,
  InputSearch,
  MainContent,
  SideSection,
  SideVideo,
  Title,
  Video,
} from './View.styled';

function ViewPage() {
  const { videoId } = useParams();
  const [value, setValue] = useState('');
  const { video, loading, listVideoRelated, error, fetchVideo, fetchRelation } =
    useYoutubeApi();

  useEffect(() => {
    fetchRelation(videoId);
    fetchVideo(videoId);
    if (error !== null) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const parseString = (string) => {
    const parser = new DOMParser();
    return parser.parseFromString(string, 'text/html').body.innerHTML;
  };

  return (
    <Viewpage>
      <Header>
        <InputSearch
          placeholder="Search..."
          type="text"
          value={value}
          onChange={handleChange}
        />
      </Header>
      {!loading && (
        <MainContent>
          <SideVideo>
            <Video
              title="{video.snippet.title}"
              allowFullScreen
              src={`https://www.youtube.com/embed/${videoId}`}
            />
            <Title>{parseString(video?.snippet?.title)}</Title>
            <hr />
            <p>{parseString(video?.snippet?.description)}</p>
          </SideVideo>
          <SideSection>
            {listVideoRelated.map((card) => (
              <HorizontalCard
                title={card.snippet.title}
                image={card.snippet.thumbnails.medium.url}
                videoId={card.id.videoId}
                key={card.id.videoId}
              />
            ))}
          </SideSection>
        </MainContent>
      )}
    </Viewpage>
  );
}

export default ViewPage;
