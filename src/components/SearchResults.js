import React from 'react';
import Podcast from './Podcast';

function SearchResults(props) {
  return (
    <div>
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