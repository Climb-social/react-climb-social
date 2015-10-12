import React, {Component, PropTypes} from 'react';
import climb from '../utils/climb';
import Wall from './Wall';


class WallContainer extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        items: []
    };

    static propTypes = {
        collectionId: PropTypes.string.isRequired,
        limit: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    };

    static defaultProps = {
        collectionId: '561ba63445284e1740e016f7',
        limit: 30
    };

    init() {

        if (!this.props.collectionId) {
            return;
        }

        climb
            .getStream(this.props.collectionId)
            .subscribe(items => {

                const maxSize = parseInt(this.props.limit, 0);

                const mappedItems = {};
                items.splice(0, maxSize).map(item => {
                    mappedItems[item.id] = item;
                });

                this.setState({
                    items: mappedItems
                });

            }.bind(this)
    )
    }

;

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
        return (
            <Wall items={this.state.items}/>
        );
    }
}

export default WallContainer;
