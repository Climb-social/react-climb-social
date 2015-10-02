import React from 'react';
import Wall from './components/Wall.jsx';

if (window) {
    window.Climb = window.Climb || {};

    const $targets = document.querySelectorAll('.climb-wall');

    for (let i = 0; i < $targets.length; ++i) {
        const $item = $targets[i];
        const collectionId = $item.dataset.collectionId;
        const limit = $item.dataset.limit;

        React.render(
            React.createElement(Wall, {collectionId, limit}), $item
        );
    }
}

export default Wall;
