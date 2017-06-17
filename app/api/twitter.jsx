import axios from 'axios';

const TWITTER_URL = 'https://api.twitter.com/1.1/statuses/update.json';

export default function tweetQuote(quote, author) {
  var encodedQuoteWithAuthor = encodeURIComponent('"' + quote + '""' + ' - ' + author);

  var requestUrl = `${TWITTER_URL}&status=${encodedQuoteWithAuthor}`;

  return axios.post(requestUrl).then(function (response) {
    console.log(response);
  }, function (error) {
    throw new Error('Unable to post tweet');
  })
}
