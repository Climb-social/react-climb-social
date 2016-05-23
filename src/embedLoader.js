import React from 'react';
import { render } from 'react-dom';

import viewFinder from './utils/viewFinder';
import isBrowser from './utils/isBrowser';
import ClimbView from './components/ClimbView/ClimbView';


const main = () => {
  const embeds = document.querySelectorAll('[data-climb]');

  Array.from(embeds).forEach(elem => {
    const { collectionId, view, limit, domain, duration } = elem.dataset;

    const props = {
      collectionId,
      View: viewFinder(view),
      limit: limit ? parseInt(limit, 10) : undefined,
      domain,
      duration,
    };

    render(<ClimbView {...props} />, elem);
  });
};


if (isBrowser) {
  document.addEventListener('DOMContentLoaded', main);
}
