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
                "use strict";
                this.setState({
                    items: items
                });
            });
    }

    componentDidMount() {
        this.init();
    }

    render() {
        let tiles = [];
        this.state.items.forEach(item => {

            tiles.push(
                <Tile ref={ item.id }
                      key={ item.id }
                      item={ item }/>
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
    collectionId: React.PropTypes.string.isRequired
};

export default Wall;
