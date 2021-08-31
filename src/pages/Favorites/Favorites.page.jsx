import React from 'react';
import { Link } from 'react-router-dom';

import VideoList from '../../components/VideoList';

import { useAuth } from '../../providers/Auth';

import './Favorites.styles.css';

function FavoritesPage() {
  const { authenticated } = useAuth();

  const getVideoPath = (video) => `/favorites/${video.id}`;

  return (
    <section className="favorites">
      {authenticated ? (
        <VideoList getVideoPath={getVideoPath} />
      ) : (
        <Link style={{ color: 'black' }} to="/login">
          NO
        </Link>
      )}
    </section>
  );
}

export default FavoritesPage;
