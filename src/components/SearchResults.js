import React from 'react';
import Podcast from './Podcast';
import './../styles/SearchResults.css';

function SearchResults(props) {
  return (
    <div className='search-results'>
      {props.podcasts.length > 0 &&
        <h3 className='results-header'>You might also enjoy these podcasts:</h3>
      }
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