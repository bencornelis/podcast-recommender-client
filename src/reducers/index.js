import constants from './../constants';
const { defaultState, types } = constants;

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.UPDATE_SEARCH_VALUE:
     return Object.assign({}, state, {
       searchValue: action.newSearchValue
     });
    case types.UPDATE_SEARCH_RESULTS:
      return Object.assign({}, state, {
        searchResults: action.relatedPodcasts
      });
    case types.UPDATE_LOADING:
      return Object.assign({}, state, {
        loading: !state.loading
      });
    case types.CLEAR_SEARCH_RESULTS:
      return Object.assign({}, state, {
        searchResults: []
      });
    default:
      return state;
  }
}