import React from 'react';
import ReactDOM from 'react-dom';

import viewFinder from './utils/viewFinder';
import isBrowser from './utils/isBrowser';

import ClimbView from './components/ClimbView/ClimbView';

export { ClimbView as ClimbView };

export { default as ListLayout } from './components/layouts/ListLayout/ListLayout';
export { default as ColumnLayout } from './components/layouts/ColumnLayout/ColumnLayout';
export { default as SquareLayout} from './components/layouts/SquareLayout/SquareLayout';

export { default as StackedCard } from './components/cards/StackedCard';

export { default as MediaBody } from './components/cards/MediaBody/MediaBody';
export { default as ImageBody } from './components/cards/MediaBody/ImageBody';
export { default as VideoBody } from './components/cards/MediaBody/VideoBody';
export { default as TextBody } from './components/cards/TextBody/TextBody';
export { default as Timestamp } from './components/cards/Timestamp/Timestamp';
export { default as Publisher } from './components/cards/Publisher/Publisher';

const main = () => {
  const ClimbViews = document.querySelectorAll('.Climb');
  Array.from(ClimbViews).forEach(elem => {
    const {
      collectionId,
      view,
      limit
      } = elem.dataset;

    let props = {
      collectionId
    };

    const View = viewFinder(view);

    if (View) {
      props = {
        ...props,
        View
      };
    }

    if (limit) {
      props = {
        ...props,
        limit: parseInt(limit, 10)
      };
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

