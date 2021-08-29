import React, { useState, useReducer } from 'react';
import HomePage from '../../pages/Home.page';
import NavBar from '../NavBar';
import useVideoApi from '../../hooks/useVideosAPI';
import DetailsView from '../../pages/DetailsView.page';
import Favorites from '../../pages/Favorites.page';
import Login from '../../pages/Login.page';
import FavoriteDetailsView from '../../pages/FavoriteDetailsView.page';
import GlobalContext from '../../state/GlobalContext';
import GlobalReducer from '../../reducers/GlobalReducer';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core';
import { List, ListItem, Modal } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

const initialState = {
  theme: 'light',
  searchText: 'wizeline',
  drawerOpen: false,
  user: {
    id: '',
    name: '',
    loggedIn: false,
    avatarUrl: '',
  },
  favouriteVideos: [],
};

const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
  },
});

function App() {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  const { videos, loading, error, fetchVideos } = useVideoApi();
  const [displayDetailView, setDisplayDetailView] = useState(false);
  const [videotoPlay, setVideotoPlay] = useState({
    url: '',
    title: '',
    description: '',
    picture: '',
  });
  const [openLogin, setOpenLogin] = useState(false);

  const classes = useStyles();

  const handleSearchButton = (history) => {
    fetchVideos(state.searchText);
    //setDisplayDetailView(false);
    history.push('/');
  };

  const handleDrawerButton = () => {
    dispatch({
      type: 'OPEN_OR_CLOSE_DRAWER',
    });
  };

  const handleFormLoginButton = () => {
    setOpenLogin(true);
  }

  const closeLoginModal = () => {
    setOpenLogin(false);
  }

  const showDetailView = (url, title, description, picture) => {
    setVideotoPlay({ url: url, title: title, description: description, picture: picture });
    //setDisplayDetailView(true);
  };

  const showRelatedVideo = (url, title, description, picture) => {
    setVideotoPlay({ url: url, title: title, description: description, picture: picture });
  };

  const renderCommon = () => {
    return (
      <Drawer
      open={state.drawerOpen}
      className={classes.drawer}
      anchor="left"
      onClose={handleDrawerButton}
      >
      <List>
        <ListItem>
          <Link to='/'>Home</Link>
        </ListItem>
        <ListItem>
          {(state.user.loggedIn) ? (<Link to='/favourites'>Favourites</Link>): null}
        </ListItem>
      </List>
    </Drawer>
    )
  }

  return (
    <>
      <Router>
        <GlobalContext.Provider value={{ state, dispatch }}>
        
          {/** Header */}
          <NavBar.LightNavBar
            handleSearchButton={handleSearchButton}
            handleDrawerButton={handleDrawerButton}
            handleFormLoginButton={handleFormLoginButton}
          />
          {/** Page main content */}
          <main
            style={{
              color: state.theme === 'light' ? 'black' : 'white',
              backgroundColor: state.theme === 'light' ? 'white' : '#303030',
            }}
          >
            <Switch>
              <Route path="/watchvideo">
                {renderCommon()}
                <DetailsView
                  video={videotoPlay}
                  relatedVideos={videos}
                  showRelatedVideo={showRelatedVideo}
                />
              </Route>
              <Route path="/favourites">
                {renderCommon()}
                {state.user.loggedIn ? <Favorites /> : <Redirect to='/' />}
              </Route>

              <Route path="/watchfavourite">
                {renderCommon()}
                {state.user.loggedIn ? (<FavoriteDetailsView 
                video={videotoPlay} 
                favouriteVideos={state.favouriteVideos}
                showRelatedVideo={showRelatedVideo} /> )
                : <Redirect to='/' />}
              </Route>

              <Route path="/">
                {renderCommon()}
                {!loading && videos ? (
                  <HomePage videos={videos} showDetailView={showDetailView} />
                ) : !loading && error ? (
                  <div>An error has ocurred</div>
                ) : (
                  <div>Loading...</div>
                )}
              </Route>
              </Switch>
          </main>
          
          <Modal 
            open={openLogin}
            onClose={() => setOpenLogin(false)}
          >
            <Login closeLoginModal={closeLoginModal} />
          </Modal>
        </GlobalContext.Provider>
      </Router>
    </>
  );
}

export default App;
