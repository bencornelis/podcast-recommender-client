import * as types from './../constants/ActionTypes';
import PodcastSearchAPI from './../api/PodcastSearchApi';

export const updateSearchValue = value => ({
  type: types.UPDATE_SEARCH_VALUE,
  value
});

export const updateSearchResults = relatedPodcasts => ({
  type: types.UPDATE_SEARCH_RESULTS,
  relatedPodcasts
});

export const clearSearchResults = () => ({
  type: types.CLEAR_SEARCH_RESULTS
});

export const updateLoading = () => ({
  type: types.UPDATE_LOADING
});

export const findRelatedPodcasts = podcasts => {
  return function (dispatch) {
    dispatch(clearSearchResults());
    dispatch(updateLoading());
    return PodcastSearchAPI.findRelated(podcasts).then(json => {
      dispatch(updateSearchResults(json.results));
      dispatch(updateLoading());
    });
  }
}