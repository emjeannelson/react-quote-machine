import React from 'react';
import ReactDOM from 'react-dom';

export default class Controls extends React.Component {
  constructor() {
    super();
    this.onGetQuoteClicked = this.onGetQuoteClicked.bind(this);
    this.onTweetClicked = this.onTweetClicked.bind(this);
  }
  onGetQuoteClicked() {
    this.props.onGetQuote();
  }
  onTweetClicked() {
    var {quote, author} = this.props;
    this.props.onTweet(quote, author);
  }
  render() {
    const TWEET_URL = 'https://twitter.com/intent/tweet';
    let {quote, author} = this.props;
    let encodedTweetText = encodeURIComponent(quote + ' - ' + author);
    return (
      <div className="clearfix">
        <a className="twitter-share-button button float-left" href={`${TWEET_URL}?text=${encodedTweetText}`}>Tweet</a>
        <button className="button float-right" onClick={this.onGetQuoteClicked}>Get a New Quote</button>
      </div>
    );
  }
}
