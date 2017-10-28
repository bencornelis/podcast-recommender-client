import React from 'react';
import './../styles/Header.css';
import PodcastSearch from './PodcastSearch';

function Header(props) {
  return (
    <div className='header'>
      <PodcastSearch />
    </div>
  )
}

export default Header;