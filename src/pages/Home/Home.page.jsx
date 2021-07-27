import React from 'react';
// import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { Header, HeaderDiv } from '../../Atoms/HomeElements/MainHeader';
import { MyBtn } from '../../Atoms/HomeElements/MenuBtn';
import { MySearch } from '../../Atoms/HomeElements/SearchField';
import { MyDarkMode } from '../../Atoms/HomeElements/DarKMode';
import HomeContent from '../../Atoms/HomeElements/HomeContent';

// import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      content: null,
    };
  }
  /* 
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  
  deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }
  */

  componentDidMount() {
    fetch(
      'https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json'
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ content: data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // eslint-disable-next-line react/sort-comp
  BlankDiv = styled.div`
    flex-grow: 1;
  `;

  ContentDiv = styled.div`
    width: calc(100% + 24px);
    margin: -12px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
  `;

  TitleDiv = styled.div`
    padding: 12px;
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
    margin: 0;
    box-sizing: border-box;
  `;

  WelcomeTitle = styled.h2`
    font-size: 3.75rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: -0.00833em;
    margin: 0;
    text-align: center;
    padding-top: 30px;
  `;

  contDiv = styled.div`
    padding: 12px;
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
    margin: 0;
    box-sizing: border-box;
  `;

  contDivFst = styled.div`
    @media (min-width: 1135px) {
      width: 1135px;
      justify-content: center;
    }
    @media (max-width: 770px) {
      width: 770px;
      -webkit-box-pack: start;
      justify-content: flex-start;
    }
    width: 100%;
    padding: 20px;
    margin: 0px auto;
    flex: 1 1 0%;
    display: flex;
    flex-flow: row wrap;
    box-sizing: border-box;
    justify-content: center;
  `;

  MyHeader = () => {
    return React.createElement(
      Header,
      { className: 'Header' },
      React.createElement(
        HeaderDiv,
        { className: 'HeaderDiv' },
        React.createElement(MyBtn),
        React.createElement(MySearch),
        React.createElement(this.BlankDiv),
        React.createElement(MyDarkMode)
      )
    );
  };

  render() {
    const homeContent = () => {
      if (this.state.content != null) {
        return this.state.content.items.map((item) => (
          <HomeContent key={item.etag} item={item} />
        ));
      }
      return null;
    };

    return (
      <>
        {React.createElement(this.MyHeader)}
        <this.ContentDiv>
          <this.TitleDiv>
            <this.WelcomeTitle>Welcome to the Challenge!</this.WelcomeTitle>
          </this.TitleDiv>
          {React.createElement(
            this.contDiv,
            {},
            React.createElement(this.contDivFst, {}, React.createElement(homeContent))
          )}
        </this.ContentDiv>
      </>
    );
  }
}

export default HomePage;

/*
<section className="homepage" ref={sectionRef}>
          <h1>Hello stranger!</h1>
          {authenticated ? (
            <>
              <h2>Good to have you back</h2>
              <span>
                <Link to="/" onClick={deAuthenticate}>
                  ← logout
                </Link>
                <span className="separator" />
                <Link to="/secret">show me something cool →</Link>
              </span>
            </>
          ) : (
            <Link to="/login">let me in →</Link>
          )}
        </section>
*/
