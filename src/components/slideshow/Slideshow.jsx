import React, {Component, PropTypes} from 'react';
import Slide from './slide';


class Slideshow extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        currentItemIndex: 0
    };

    static propTypes = {
        items: PropTypes.object.isRequired,
        delay: PropTypes.number
    };

    static defaultProps = {
        delay: 3
    };

    componentDidMount() {
        const {delay} = this.props;
        this.timer = setInterval(this.nextSlide.bind(this), delay * 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    nextSlide() {
        const slideshowLength = Object.keys(this.props.items).length;
        const newIndex = Math.floor(Math.random() * slideshowLength);
        this.setState({
            currentItemIndex: newIndex
        });
    }

    render() {

        const key = Object.keys(this.props.items)[this.state.currentItemIndex];

        if (!key) {
            return null;
        }

        const item = this.props.items[key];

        return (
            <div>
                <Slide key={key} item={item} />
            </div>
        );
    }
}

export default Slideshow;
