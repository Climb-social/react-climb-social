import React from 'react';
import climb from '../utils/climb';


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
                debugger;
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
                <div ref={item.id} key={item.id}>
                    Item
                </div>
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