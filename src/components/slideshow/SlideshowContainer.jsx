import React, {Component, PropTypes} from 'react';
import climb from 'climb-social';
import Slideshow from './Slideshow';


class SlideshowContainer extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        items: {}
    };

    static propTypes = {
        collectionId: PropTypes.string.isRequired,
        delay: PropTypes.number
    };

    static defaultProps = {
        collectionId: '561ba63445284e1740e016f7',
        delay: 5
    };


    init() {

        if (!this.props.collectionId) {
            return;
        }

        climb
            .getStream(this.props.collectionId)
            .subscribe(items => {

                const mappedItems = {};
                items.map(item => {
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

    render() {
        return (
            <Slideshow items={this.state.items} delay={this.props.delay}/>
        );
    }
}

export default SlideshowContainer;
