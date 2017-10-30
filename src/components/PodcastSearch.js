import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './../styles/PodcastSearch.css';
import { updateSearchValue, findRelatedPodcasts } from './../actions';
import fetch from 'isomorphic-fetch';
import SearchResults from './SearchResults';
import Spinner from 'react-spinkit';

class PodcastSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(newSearchValue) {
    this.props.dispatch(updateSearchValue(newSearchValue));

    const podcasts = newSearchValue.map(podcastSearchItem => podcastSearchItem.value);
    this.props.dispatch(findRelatedPodcasts(podcasts));
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
        <form>
          <Select.Async
            className='searchbar'
            multi
            name='form-field-name'
            placeholder='Type in a few of your favorite podcasts.'
            loadOptions={this.getPodcasts}
            autoload={false}
            onChange={this.handleSelectChange}
            value={this.props.searchValue}
            onKeyPress={this.handleKeyPress}
          />
        </form>
        <SearchResults podcasts={this.props.searchResults} />
        {this.props.loading &&
          <Spinner
            name='circle'
            fadeIn='quarter'
            color='#007eff' />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchValue:    state.searchValue,
  searchResults:  state.searchResults,
  loading:        state.loading
});

export default connect(mapStateToProps)(PodcastSearch);
