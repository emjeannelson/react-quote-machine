import React from 'react';
import ReactDOM from 'react-dom';

export default class Quote extends React.Component {
  render() {

    let {quote, author, isLoading} = this.props;

    if (isLoading) {
      return (
        <div className="loader"></div>
      );
    } else {
      return (
        <div>
          <h1 className="quote">{quote}</h1>
          <p className="author">{author}</p>
        </div>
      );
    }
  }
}
