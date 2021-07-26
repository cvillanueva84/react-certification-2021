import React from 'react';

import Header from '../Header';
import Videos from '../Videos/Videos.component';
import result from '../../mock/youtube-videos-mock';

import './App.styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = { toggleStatus: false };
  }

  handleToggle() {
    this.setState((prevState) => ({
      toggleStatus: !prevState.toggleStatus,
    }));
  }

  render() {
    if (this.state.toggleStatus) {
      return (
        <div className="dark-mode">
          <Header
            onHandleToggle={this.handleToggle}
            toggleStatus={this.state.toggleStatus}
          />
          <Videos videoList={result.items} />
        </div>
      );
    }
    return (
      <div>
        <Header
          onHandleToggle={this.handleToggle}
          toggleStatus={this.state.toggleStatus}
        />
        <Videos videoList={result.items} />
      </div>
    );
  }
}

export default App;
