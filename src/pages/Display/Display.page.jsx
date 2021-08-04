import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {Header,Toggle, Search} from '../../components/Header/Toolbar.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch} from '@fortawesome/fontawesome-free-solid'
import {videosData} from '../../data/youtube-videos-mock';
import Player from "../../components/Player/Player";
import SearchBar from "../../components/Player/SearchBar";

function DisplayPage() {
  
  const [data , setData]=useState(null)

  const getData=()=>{
    fetch('./youtube-videos-mock.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       mode: 'no-cors',
    }
    )

      .then(function(response){
        //console.log(response)
        setData(response);
        return response.json();
      })

      .then(function(myJson) {
        //console.log(myJson);
        
      });
  }

  useEffect(()=>{
    getData()
  },[])

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  
  /*useEffect(() => {
    const results = data.filter((video) =>
    console.log(video)
    //video.items.snippet.description.toLowerCase().includes(searchText)
    );
    setSearchResults(results);
  }, [searchText]);*/
  

  return (
      <Header>
        <a href="www.google.com" className="logo">Dark Mode</a>
        {/*
        <Search>
          <input id="txtSearchId" placeholder="Search…" type="text" aria-label="search" value={searchText} onChange={handleChange}></input>
          <i className="logoSearch"><FontAwesomeIcon icon={faSearch} /></i>
        </Search>
        */}
        <Toggle>
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
            </label>
        </Toggle>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
          <ul className="menu">
            <li><a href="#work">Home</a></li>
          </ul>

        <div className="cards">
        {
          /** Filter videos data and map them to return an array of videos.*/
          /*searchResults.map((data) => (
            <h1>data.description</h1>
          ))*/
          /*data.items ? data.items.map(
            function(datax){
                    return (<div className="card"> 
                    <h4> {datax.kind}</h4>
                </div>)
            }
          ):""*/
        }
      </div>
      <Player></Player>    
      </Header>
  );
}

export default DisplayPage;
