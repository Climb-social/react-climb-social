import React, {Component, PropTypes} from 'react';
import Slide from './slide';
import {TransitionMotion, spring} from 'react-motion';


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
        delay: 5
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

    getStyles() {
        const currentKey = Object.keys(this.props.items)[this.state.currentItemIndex];
        const configs = {};
        Object.keys(this.props.items).map(key => {
            configs[key] = {
                opacity: spring(0),
                scale: spring(0),
                zIndex: -5,
                item: this.props.items[key]
            };

            if (key === currentKey) {
                Object.assign(configs[key], {
                    opacity: spring(1),
                    scale: spring(1),
                    zIndex: 1
                });

            }
        });
        return configs;
    }

    willEnter(key) {
        return {
            opacity: spring(0),
            scale: spring(0),
            zIndex: -5,
            item: this.props.items[key]
        };
    }

    willLeave(key, style) {
        return {
            opacity: spring(0),
            scale: spring(0),
            zIndex: -5,
            item: style.item
        };
    }

    renderSlide(key, itemValues) {

        const {item, ...styleConfig} = itemValues;

        const style = {
            opacity: styleConfig.opacity,
            zIndex: Math.floor(styleConfig.zIndex),
            transform: `scale(${styleConfig.scale})`
        };

        return (
            <Slide key={key}
                   item={item}
                   style={style} />
        );

    }

    render() {
        return (
            <TransitionMotion
                styles={this.getStyles.bind(this)()}
                willEnter={this.willEnter.bind(this)}
                willLeave={this.willLeave.bind(this)}>
                {values =>
                    <div className="climb__slideshow__container">
                        {Object.keys(values).map(key => {
                            const itemValues = values[key];
                            return this.renderSlide(key, itemValues);
                        })}
                    </div>
                }
            </TransitionMotion>
        );
    }
}

export default Slideshow;
