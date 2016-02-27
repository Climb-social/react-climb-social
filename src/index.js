import React from 'react';
import ReactDOM from 'react-dom';

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

const renderClimbDisplays = () => {
  const ClimbViews = document.querySelectorAll('.Climb');
  Array.from(ClimbViews).forEach(elem => {
    const collectionId = elem.dataset.collectionId;

    ReactDOM.render(
      React.createElement(ClimbView, { collectionId }),
      elem
    );
  });
};

const isBrowser = () => {
  try {
    return this === window;
  } catch (e) {
    return false;
  }
};

if (isBrowser) {
  document.addEventListener('DOMContentLoaded', renderClimbDisplays);
}
