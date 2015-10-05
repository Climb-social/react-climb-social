import React from 'react';
import climb from '../utils/climb';
import Tile from './Tile';


class Wall extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    init() {

        if (!this.props.collectionId) {
            return;
        }

        climb
            .getStream(this.props.collectionId)
            .subscribe(item => {

                const currentWindow = this.state.items.splice(0);
                currentWindow.unshift(item);

                this.setState({
                    items: currentWindow
                });
            });
    }

    componentDidMount() {
        this.init();
    }

    componentDidUpdate() {
        let cb;
        if (window.Climb && window.Climb.onUpdate) {
            cb = window.Climb.onUpdate;
        } else {
            // noop
            cb = () => {
            };
        }
        cb();
    }

    render() {
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

Wall.displayName = 'Wall';
Wall.propTypes = {
    collectionId: React.PropTypes.string.isRequired,
    limit: React.PropTypes.number
};

export default Wall;
