import React from 'react';
import climb from '../utils/climb';
import Tile from './Tile';


class Wall extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = 'Wall';
        this.state = {
            items: []
        };
    }

    init() {
        climb
            .getFeed(this.props.collectionId)
            .then((items) => {
                this.setState({
                    items
                });
            });
    }

    componentDidMount() {
        this.init();
    }

    componentDidUpdate() {
        let cb;
        if (window.climb && window.climb.initCallback) {
            cb = window.climb.initCallback;
        } else {
            // noop
            cb = () => {
            };
        }
        cb();
    }

    render() {
        window.console.log('rendering wall');
        const tiles = [];
        this.state.items.forEach(item => {

            // What's with the `...`?
            // It's ES6.
            // https://facebook.github.io/react/docs/transferring-props.html#transferring-with-...-in-jsx
            const {id, ...otherProps} = item;

            tiles.push(
                <Tile ref={ id }
                      key={ id }
                    {...otherProps } />
            );
        });

        return (
            <div className="climb__wall">
                { tiles }
            </div>
        );
    }
}

Wall.propTypes = {
    collectionId: React.PropTypes.string.isRequired,
    limit: React.PropTypes.number
};

export default Wall;
