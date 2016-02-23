import React from 'react';
import ReactDOM from 'react-dom';
import { ListView } from 'react-climb-social';

const App = () => {
  return (
    <div>
      <ListView />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('container')
);