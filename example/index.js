import React from 'react';
import ReactDOM from 'react-dom';
import { ListView, ColumnView } from 'react-climb-social';

import 'react-climb-social/styles/main.css';
import './style.css';

const App = () => {
  return (
    <div className='clearfix'>

      <h1>
        React Climb Social
      </h1>

      <div className='sm-col sm-col-6 md-col-5 lg-col-4 px2'>
        <h2>List View</h2>
        <ListView collectionId='56b4b06908216f0cac62a86b' />
      </div>

      <div className='sm-col sm-col-6 md-col-7 lg-col-8 px2'>
        <h2>Column View</h2>
        <ColumnView collectionId='56b4b06908216f0cac62a86b' />
      </div>

    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('container')
);