import React from 'react';
import ReactDOM from 'react-dom';

import WallContainer from './components/wall/WallContainer';
import SlideshowContainer from './components/slideshow/SlideshowContainer';

import './style/main.scss';

if (window) {
    window.Climb = window.Climb || {};

    const $walls = document.querySelectorAll('.climb-wall');

    for (let i = 0; i < $walls.length; ++i) {
        const $item = $walls[i];
        const collectionId = $item.dataset.collectionId;
        const limit = $item.dataset.limit;
        const domain = $item.dataset.domain;

        ReactDOM.render(
            React.createElement(WallContainer, {collectionId, limit, domain}),
            $item
        );
    }

    const $slideshows = document.querySelectorAll('.climb-slideshow');

    for (let i = 0; i < $slideshows.length; ++i) {
        const $item = $slideshows[i];
        const collectionId = $item.dataset.collectionId;
        const delay = parseInt($item.dataset.delay, 0);
        const domain = $item.dataset.domain;

        ReactDOM.render(
            React.createElement(SlideshowContainer, {collectionId, delay, domain}),
            $item
        );
    }
}

export {WallContainer};
export {Wall} from './components/wall/Wall';
export {Tile} from './components/wall/Tile';
