import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './../styles/PodcastSearch.css';
import { updateSearch } from './../actions';
import fetch from 'isomorphic-fetch';

class PodcastSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(value) {
    this.props.dispatch(updateSearch(value))
  }

  getPodcasts(term) {
    const q = term.replace(/\s/g, '+');
    const url = `https://itunes.apple.com/search?term=${q}&media=podcast&limit=10`;
    
    return fetch(url).then(
      response => response.json(),
      error    => console.log('An error occurred.', error)
    ).then(json => {
      const options = json.results.map(result => ({
        value: result.trackId,
        label: result.trackName
      }));

      return {
        options: options
      }
    });
  }

  render() {
    return (
      <Select.Async
        className='searchbar'
        multi
        name='form-field-name'
        loadOptions={this.getPodcasts}
        autoload={false}
        onChange={this.handleSelectChange}
        value={this.props.value}
      />
    )
  }
}

const mapStateToProps = state => ({
  value: state.searchbar_value
});

export default connect(mapStateToProps)(PodcastSearch);
