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

Wall.propTypes = {
    collectionId: React.PropTypes.string.isRequired,
    limit: React.PropTypes.number
};

export default Wall;