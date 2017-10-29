import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './../styles/PodcastSearch.css';
import { updateSearchValue, findRelatedPodcasts } from './../actions';
import fetch from 'isomorphic-fetch';
import SearchResults from './SearchResults'

class PodcastSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const podcasts = this.props.value.map(value => value.value);
    this.props.dispatch(findRelatedPodcasts(podcasts))
  }

  handleSelectChange(value) {
    this.props.dispatch(updateSearchValue(value))
  }

  getPodcasts(term) {
    const q = term.replace(/\s/g, '+');
    const url = `https://itunes.apple.com/search?term=${q}&media=podcast&limit=10`;

    return fetch(url).then(
      response => response.json(),
      error    => console.log('An error occurred.', error)
    ).then(json => {
      const options = json.results.map(result => ({
        value: {
          itunes_url: result.collectionViewUrl.slice(0, -5),
          itunes_id: result.trackId
        },
        label: result.trackName
      }));

      return {
        options: options
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Select.Async
            className='searchbar'
            multi
            name='form-field-name'
            loadOptions={this.getPodcasts}
            autoload={false}
            onChange={this.handleSelectChange}
            value={this.props.value}
            ref='_searchTerms'
          />
          <button>Find Podcasts</button>
        </form>
        <SearchResults podcasts={this.props.searchResults} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  value: state.searchbarValue,
  searchResults: state.searchResults
});

export default connect(mapStateToProps)(PodcastSearch);