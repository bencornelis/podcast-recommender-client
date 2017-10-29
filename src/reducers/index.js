import constants from './../constants';
const { defaultState, types } = constants;

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.UPDATE_SEARCH_VALUE:
     return Object.assign({}, state, {
       searchbarValue: action.value
     });
    case types.UPDATE_SEARCH_RESULTS:
      return Object.assign({}, state, {
        searchResults: action.relatedPodcasts
      });
    default:
      return state;
  }
}