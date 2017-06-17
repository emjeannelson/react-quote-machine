import axios from 'axios';

const RANDOM_QUOTES_URL = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1'

export default function getQuote() {
  return axios.get(RANDOM_QUOTES_URL, {headers: {'X-Mashape-Key': 'hxnYChgLXtmshBOoj0O5FkT8lZGfp1oWIaCjsnI0tlCgDbpH0X'}}).then(function(response) {
    return response.data;
  }, function(error) {
    throw new Error('Unable to fetch quote');
  })
}
