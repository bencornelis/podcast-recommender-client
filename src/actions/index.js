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

export const findRelatedPodcasts = podcasts => {
  return function (dispatch) {
    return PodcastSearchAPI.findRelated(podcasts).then(json => {
      dispatch(updateSearchResults(json.results));
    });
  }
}