import React from 'react';
import ReactDOM from 'react-dom';
import { ListView, ComplexCard } from 'react-climb-social';

const App = () => {
  return (
    <div>
      <ListView items={[{id: 1}, {id: 2}]}
                Card={ComplexCard} />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('container')
);