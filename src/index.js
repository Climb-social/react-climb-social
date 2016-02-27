import React from 'react';
import ReactDOM from 'react-dom';

import viewFinder from './utils/viewFinder';
import isBrowser from './utils/isBrowser';

import ClimbView from './views/ClimbView/ClimbView';
export { ClimbView as ClimbView };
export { default as ListView } from './views/ListView/ListView';
export { default as ColumnView } from './views/ColumnView/ColumnView';
export { default as RegularSquareView} from './views/RegularSquareView/RegularSquareView';

export { default as StackedCard } from './components/Cards/StackedCard';
export { default as MediaBody } from './components/MediaBody/MediaBody';
export { default as ImageBody } from './components/MediaBody/ImageBody';
export { default as VideoBody } from './components/MediaBody/VideoBody';
export { default as TextBody } from './components/TextBody/TextBody';
export { default as Timestamp } from './components/Timestamp/Timestamp';
export { default as Publisher } from './components/Publisher/Publisher';

const main = () => {
  const ClimbViews = document.querySelectorAll('.Climb');
  Array.from(ClimbViews).forEach(elem => {
    const {
      collectionId,
      view
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

    ReactDOM.render(
      React.createElement(ClimbView, props),
      elem
    );
  });
};

if (isBrowser) {
  document.addEventListener('DOMContentLoaded', main);
}

