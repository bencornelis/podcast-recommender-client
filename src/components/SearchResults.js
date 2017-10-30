import React from 'react';
import Podcast from './Podcast';
import './../styles/SearchResults.css';

function SearchResults(props) {
  return (
    <div className='search-results'>
      {props.podcasts.map((podcast, index) =>
        <Podcast
          key={index}
          title={podcast.title}
          imageUrl={podcast.image_url} />
      )}
    </div>
  )
}

export default SearchResults;