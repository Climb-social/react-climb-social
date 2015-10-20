import React, {Component, PropTypes} from 'react';
import climb from 'climb-social';
import Wall from './Wall';
import Badge from './ClimbBadge';


class WallContainer extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        items: {}
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
        return (
            <div>
                <Wall items={this.state.items}/>
                <Badge />
            </div>
        );
    }
}

export default WallContainer;
