class PodcastSearchAPI {
  static findRelated(podcasts) {
    const request = new Request('http://localhost:3001/podcast_searches', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({podcasts: podcasts})
    });

    return fetch(request).then(response => {
      return response.json();
    });
  }
}

export default PodcastSearchAPI;