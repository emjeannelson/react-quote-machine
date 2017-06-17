import React from 'react';

import Quote from 'Quote';
import Controls from 'Controls';
import getQuote from 'randomQuote';
import tweetQuote from 'twitter';

export default class Main extends React.Component {
  constructor() {
    super();
    this.handleGetQuote = this.handleGetQuote.bind(this);
    this.handleTweet = this.handleTweet.bind(this);
    this.state = {
      quote: '[A] quotation is a handy thing to have about, saving one the trouble of thinking for oneself, always a laborious business.',
      author: 'A.A. Milne'
    };
  }
  handleGetQuote() {
    var that = this;
    getQuote().then(function (response) {
      that.setState({
        quote: response.quote,
        author: response.author
      });
    })
  }
  handleTweet(quote, author) {
    tweetQuote(quote, author);
  }

  /*
  openWeatherMap.getTemp(location).then(function (temp) {
    that.setState({
      location: location,
      temp: temp,
      isLoading: false
    });
  }, function (e) {
    that.setState({
      isLoading: false,
      errorMessage: e.message
    });
  });
  },
  */
  render() {
    return (
      <div className="row">
          <div className="columns small-12 small-centered medium-6 quote-card">
            <Quote quote={this.state.quote} author={this.state.author}/>
            <Controls onGetQuote={this.handleGetQuote} onTweet={this.handleTweet} quote={this.state.quote} author={this.state.author} />
          </div>
      </div>
    );
  }
}
