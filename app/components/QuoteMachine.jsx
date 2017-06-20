import React from 'react';

import Quote from 'Quote';
import Controls from 'Controls';
import getQuote from 'randomQuote';

export default class QuoteMachine extends React.Component {
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
      quote: undefined,
      author: undefined
    });

    let that = this;

    getQuote().then(function (response) {
      that.setState({
        quote: response.quote,
        author: response.author,
        isLoading: false
      });
    }, function (e) {
    });
  }
  render() {
    return (
      <div className="quote-bubble">
            <Quote isLoading={this.state.isLoading} quote={this.state.quote} author={this.state.author}/>
            <Controls onGetQuote={this.handleGetQuote} quote={this.state.quote} author={this.state.author} />
      </div>
    );
  }
}
