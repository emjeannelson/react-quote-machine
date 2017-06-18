import React from 'react';

import Quote from 'Quote';
import Controls from 'Controls';
import getQuote from 'randomQuote';

export default class Main extends React.Component {
  constructor() {
    super();
    this.handleGetQuote = this.handleGetQuote.bind(this);
    this.state = {
      quote: '[A] quotation is a handy thing to have about, saving one the trouble of thinking for oneself, always a laborious business.',
      author: 'A.A. Milne',
      isLoading: false
    };
  }
  handleGetQuote() {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      quote: undefined,
      author: undefined
    });
    
    let that = this;

    getQuote().then(function (response) {
      that.setState({
        quote: response.quote,
        author: response.author,
      });
    }, function (e) {
      console.log(e);
    });
  }
  render() {
    return (
      <div className="row">
          <div className="columns small-12 small-centered medium-6 quote-card">
            <Quote quote={this.state.quote} author={this.state.author}/>
            <Controls onGetQuote={this.handleGetQuote} quote={this.state.quote} author={this.state.author} />
          </div>
      </div>
    );
  }
}
