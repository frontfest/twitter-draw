// Get auth data
const config = require('./config.js')

// Load Twiiter library
const Twitter = require('twitter-node-client').Twitter
const twitter = new Twitter(config)

// Callback functions
const error = (err, response, body) => {
  console.log('ERROR: ', err)
};
const success = data => {
  const { statuses } = JSON.parse(data)
  const totalTweets = statuses.length
  const randomPosition = Math.floor(Math.random() * totalTweets)
  const selectedTweet = statuses[randomPosition]

  console.log('\nCANDIDATE TWEETS')
  statuses.forEach(status =>
    console.log(`https://twitter.com/${status.user.screen_name}/status/${status.id_str}`)
  )

  console.log('\nAND THE WINNER IS...')
  console.log(`https://twitter.com/${selectedTweet.user.screen_name}/status/${selectedTweet.id_str}`)
};

// Search command
twitter.getSearch({q:'#frontfest18 since:2018-02-12 -filter:retweets', count: 100}, error, success)
