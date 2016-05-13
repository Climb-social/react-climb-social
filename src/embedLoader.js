import React from 'react';
import ReactDOM from 'react-dom';

import viewFinder from './utils/viewFinder';
import isBrowser from './utils/isBrowser';

import ClimbView from './components/ClimbView/ClimbView';


const main = () => {
  const ClimbViews = document.querySelectorAll('.Climb');

  Array.from(ClimbViews).forEach(elem => {
    const { collectionId, view, limit } = elem.dataset;

    let props = { collectionId };

    const View = viewFinder(view);

    if (View) {
      props = { View, ...props };
    }

    if (limit) {
      props = { limit: parseInt(limit, 10), ...props };
    }

    ReactDOM.render(
      React.createElement(ClimbView, props),
      elem
    );
  });
};


if (isBrowser) {
  document.addEventListener('DOMContentLoaded', main);
}
