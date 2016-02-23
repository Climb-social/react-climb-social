import React from 'react';
import ReactDOM from 'react-dom';
import { ListView, ComplexCard } from 'react-climb-social';

const App = () => {
  return (
    <div>
      <ListView collectionId='56b4b06908216f0cac62a86b'
                Card={ComplexCard} />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('container')
);