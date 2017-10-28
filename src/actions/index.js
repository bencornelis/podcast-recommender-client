import * as types from './../constants/ActionTypes';

export const updateSearch = value => ({
  type: types.UPDATE_SEARCH,
  value: value
});