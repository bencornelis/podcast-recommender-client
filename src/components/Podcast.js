import React from 'react';
import './../styles/Podcast.css';

function Podcast(props) {
  return (
    <div className='podcast'>
      <img src={props.imageUrl} />
    </div>
  );
}

export default Podcast;