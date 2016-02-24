import React from 'react';
import ReactDOM from 'react-dom';
import { ListView, ComplexCard } from 'react-climb-social';

import 'react-climb-social/styles/main.css'

const App = () => {
  return (
    <div className='max-width-4 mx-auto'>
      <div className='clearfix'>

        <h1>
          React Climb Social
        </h1>

        <h2>List View</h2>

        <ListView collectionId='56b4b06908216f0cac62a86b'
                  Card={ComplexCard} />
      </div>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('container')
);