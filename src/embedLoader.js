import React from 'react';
import { render } from 'react-dom';
import mapValues from 'lodash.mapvalues';

import viewFinder from './utils/viewFinder';
import isBrowser from './utils/isBrowser';
import ClimbView from './components/ClimbView/ClimbView';


function normaliseEmptyString(s) {
  return typeof s === 'string' && !s.length ? true : s;
}


const main = () => {
  const embeds = document.querySelectorAll('[data-climb]');

  Array.from(embeds).forEach(elem => {
    const { view, limit, ...otherData } = elem.dataset;

    delete otherData.climb;

    const props = {
      ...mapValues(otherData, normaliseEmptyString),
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
