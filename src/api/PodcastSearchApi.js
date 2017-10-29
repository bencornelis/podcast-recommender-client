class PodcastSearchAPI {
  static findRelated(itunes_podcast_urls) {
    const request = new Request('http://localhost:3001/podcast_searches', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({itunes_urls: itunes_podcast_urls})
    });

    return fetch(request).then(response => {
      return response.json();
    });
  }
}

export default PodcastSearchAPI;