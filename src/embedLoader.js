import React from 'react';
import { render } from 'react-dom';

import viewFinder from './utils/viewFinder';
import isBrowser from './utils/isBrowser';
import ClimbView from './components/ClimbView/ClimbView';


const main = () => {
  const embeds = document.querySelectorAll('[data-climb]');

  Array.from(embeds).forEach(elem => {
    const { view, limit, ...otherData } = elem.dataset;

    const props = {
      ...otherData,
      View: viewFinder(view),
      limit: limit ? parseInt(limit, 10) : undefined,
    };

    if (__DEV__) {
      // Use dummy data if running in development
      /* eslint global-require: 0 */
      // props.items = require('./dummyData.json');
    }

    render(<ClimbView {...props} />, elem);
  });
};


if (isBrowser) {
  document.addEventListener('DOMContentLoaded', main);
}
