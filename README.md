# react-climb-social

[![Travis build](https://img.shields.io/travis/Climb-social/react-climb-social.svg?style=flat-square)](https://travis-ci.org/Climb-social/react-climb-social)

Create a [Climb.social](http://climb.social) wall with React.js

## Installing
    npm install -D react-climb-social

## Usage

There's a couple of ways you can use this library.

### HTML embed

If you just want a grid of approved items from your Climb.social collectionId,
you can hot-link to a pre-packaged bundle that will execute on the page and set
everything up for you.

This is the simple "HTML embed" method:

    <script src="https://fb.me/react-0.14.0.min.js"></script>
    <script src="https://fb.me/react-dom-0.14.0.min.js"></script>
    <div class="climb-wall" data-collection-id="561ba63445284e1740e016f7" data-limit="3"></div>
    <!-- TODO: bundle here -->

See the `data-collection-id` attribute in the 3rd line? Set that to your Climb CollectionId and you're done.

Once that's on the page, you'll probably want to change how it looks. You can do this with CSS.
Contact [support@climb.social](mailto:support@climb.social) if you're stuck.

### React components

This project also exposes some components for you to use in your existing React projects.

#### WallContainer

To render a Wall that auto-updates when content is approved within the Climb.social admin,
use the `WallContainer` component:

    import WallContainer from 'react-climb-social';

    <WallContainer collectionId="<collectionId>" limit="3" />

`limit` is optional. It specifies how many items you want displayed.

#### Wall

Lays out a grid of items

    import Wall from 'react-climb-social';

    <Wall items={items}>


Where `items` is an _Object_ of unique _keys_ and each key is an item returned from the [Climb.social API](http://docs.climb.social). i.e.:

    const items = {
        '1': {
            ...
        },
        '2': {
            ...
        },
        ...
    }

#### Tile

Renders a single Tile from a Wall.

