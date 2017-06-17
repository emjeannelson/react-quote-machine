import React from 'react';
import ReactDOM from 'react-dom';

export default class Quote extends React.Component {
  render() {
    var {quote, author} = this.props;
    return (
      <div>
        <h1>{quote}</h1>
        <h2>{author}</h2>
      </div>
    );
  }
}
