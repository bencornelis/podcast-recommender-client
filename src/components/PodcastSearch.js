import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './../styles/PodcastSearch.css';
import { updateSearch } from './../actions'

class PodcastSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(value) {
    this.props.dispatch(updateSearch(value))
  }

  render() {
    const options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
    ];

    return (
      <Select
        className='searchbar'
        multi
        name='form-field-name'
        options={options}
        onChange={this.handleSelectChange}
        value={this.props.value}
        simpleValue
      />
    )
  }
}

const mapStateToProps = state => ({
  value: state.searchbar_value
});

export default connect(mapStateToProps)(PodcastSearch);
