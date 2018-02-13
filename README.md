# twitter-draw
Node script to pick up a random tweet

## Configuration
In order to use this script, you must provide the credentials to use the Twitter API. Create a file named config.js with the following object:

```
module.exports = {
  consumerKey: 'yourConsumerKey',
  consumerSecret: 'yourConsumerSecret',
  accessToken: 'yourAccessToken',
  accessTokenSecret: 'yourAccessTokenSecret'
}
```

## Run script
```
$ npm install
$ npm start
```
