A React app using a [Rails API](https://github.com/bencornelis/podcast-recommender-api) for finding new podcasts.
Try it [here](https://bencornelis.github.io/podcast-recommender-client/).

Here is how it currently works:
* Enter some podcasts you like, which are autocompleted and fetched using the iTunes search api
* On each podcast page on iTunes, there is a section `listeners also subscribed to` with 5 podcasts
* The Rails backend scrapes the 5 related podcasts for each podcast you list in the search bar
* The related podcasts are ordered by number of relations to your podcasts (i.e. the number of scraped pages they appear on), and the top 5 most related are displayed
* The goal is to recommend a podcast that best fits the set you listed

TODO:
* Scrape all podcast relations data and store in a Neo4j graph database, so that 2nd, 3rd, etc degree relations can be considered, also speeding up the api request
