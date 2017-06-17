import React from 'react';
import ReactDOM from 'react-dom';

import QuoteMachine from 'QuoteMachine';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <QuoteMachine />,
  document.getElementById('app')
);
