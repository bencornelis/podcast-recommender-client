import constants from './../constants';
const { defaultState, types } = constants;

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.UPDATE_SEARCH:
     return Object.assign({}, state, {
       searchbar_value: action.value
     });
    default:
      return state;
  }
}