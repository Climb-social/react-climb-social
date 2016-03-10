import React from 'react';
import ReactDOM from 'react-dom';
import { ListView, ColumnView, RegularSquareView, ClimbView, StackedCard } from 'react-climb-social';

import 'react-climb-social/styles/main.css';
import './style.css';

const App = () => {
  return (
    <div className='clearfix'>

      <h1>
        React Climb Social
      </h1>

      <ClimbView collectionId='56b4b06908216f0cac62a86b' Card={ StackedCard } />


       <ClimbView collectionId='56b4b06908216f0cac62a86b'
                 View={ RegularSquareView } />

      <div className='sm-col sm-col-6 md-col-4 lg-col-3 px2'>
        <h2>List View</h2>

        <ClimbView collectionId='56b4b06908216f0cac62a86b'
                   View={ ListView } />

      </div>

      <div className='sm-col sm-col-6 md-col-8 lg-col-9 px2'>
        <h2>Column View</h2>
        <ClimbView collectionId='56b4b06908216f0cac62a86b'
                   View={ ColumnView } />
      </div>

    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('container')
);