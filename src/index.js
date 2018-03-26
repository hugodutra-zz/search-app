import React from 'react';
import ReactDOM from 'react-dom';

import SearchApp from "./App";

ReactDOM.render(
  <SearchApp />,
  document.getElementById('app')
);

module.hot.accept();
