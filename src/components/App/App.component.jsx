import React, { useState, useReducer } from 'react';
import HomePage from '../../pages/Home.page';
import NavBar from '../NavBar';
import useVideoApi from '../../hooks/useVideosAPI';
import DetailsView from '../../pages/DetailsView.page';
import GlobalContext from '../../state/GlobalContext';
import GlobalReducer from '../../reducers/GlobalReducer';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core';
import { ListItemText, List, ListItem } from '@material-ui/core';

const initialState = {
  theme: 'light',
  searchText: 'wizeline',
  drawerOpen: false,
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
  });

  const classes = useStyles();

  const handleSearchButton = () => {
    fetchVideos(state.searchText);
    setDisplayDetailView(false);
  };

  const handleDrawerButton = () => {
    dispatch({
      type: 'OPEN_OR_CLOSE_DRAWER',
    });
  }

  const showDetailView = (url, title, description) => {
    setVideotoPlay({ url: url, title: title, description: description });
    setDisplayDetailView(true);
  };

  const showRelatedVideo = (url, title, description) => {
    setVideotoPlay({ url: url, title: title, description: description });
  }

  if (displayDetailView) {
    return (
      <>
        <GlobalContext.Provider value={{ state, dispatch }}>
          {/** Header */}
          <NavBar.LightNavBar handleSearchButton={handleSearchButton} handleDrawerButton={handleDrawerButton} />
          {/** Drawer */}
          <Drawer open={state.drawerOpen} className={classes.drawer} anchor="left" onClose={handleDrawerButton} >
            <List>
              <ListItem button>
                <ListItemText primary="Home" />
              </ListItem>
            </List>
          </Drawer>
          {/** Page main content */}
          <main
            style={{
              color: state.theme === 'light' ? 'black' : 'white',
              backgroundColor: state.theme === 'light' ? 'white' : '#303030',
            }}
          >
            <DetailsView video={videotoPlay} relatedVideos={videos} showRelatedVideo={showRelatedVideo} />
          </main>
        </GlobalContext.Provider>
      </>
    );
  }

  return (
    <>
      <GlobalContext.Provider value={{ state, dispatch }}>
        {/** Header */}
        <NavBar.LightNavBar handleSearchButton={handleSearchButton} handleDrawerButton={handleDrawerButton} />
        {/** Drawer */}
        <Drawer open={state.drawerOpen} className={classes.drawer} anchor="left" onClose={handleDrawerButton} >
          <List>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
          </List>
        </Drawer>
        {/** Page main content */}
        <main
          style={{
            color: state.theme === 'light' ? 'black' : 'white',
            backgroundColor: state.theme === 'light' ? 'white' : '#303030',
          }}
        >
          {!loading && videos ? (
            <HomePage videos={videos} showDetailView={showDetailView} />
          ) : !loading && error ? (
            <div>An error has ocurred</div>
          ) : (
            <div>Loading...</div>
          )}
        </main>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
