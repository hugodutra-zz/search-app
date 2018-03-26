import React from 'react';
import ReactDOM from 'react-dom';

import SearchApp from "./App";
import '../public/reset.css';

ReactDOM.render(
  <SearchApp />,
  document.getElementById('app')
);

module.hot.accept();
