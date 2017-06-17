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
    return (
      <div className="clearfix">
        <button className="button float-left" onClick={this.onTweetClicked}>Share on Twitter</button>
        <button className="button float-right" onClick={this.onGetQuoteClicked}>Get a New Quote</button>
      </div>
    );
  }
}
