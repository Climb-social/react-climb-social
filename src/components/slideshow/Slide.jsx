import React, {Component, PropTypes} from 'react';
import Message from '../common/Message';
import Image from '../common/Image';
import {Motion, spring} from 'react-motion';

class Slide extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        item: PropTypes.object.isRequired,
        isCurrent: PropTypes.bool
    };

    static defaultProps = {
        isCurrent: false
    };

    state = {
        shouldDisplayMessage: false
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.isCurrent) {
            setTimeout(() => {
                this.setState({
                    shouldDisplayMessage: true
                });
            }, 700);
        } else {
            this.setState({
                shouldDisplayMessage: false
            });
        }
    }

    createImage() {

        const {image} = this.props.item;

        if (image !== null) {
            const {url: src, width, height} = image;
            return (
                <Image src={ src }
                       width={ width }
                       height={ height }/>
            );
        }
        return null;
    }

    createMessage() {

        if (!this.props.item.image) {
            return (
                <Message body={ this.props.item.message } />
            );
        }

        const values = {
            x: this.state.shouldDisplayMessage ? spring(300) : spring(0)
        };

        return (
            <Motion defaultStyle={{x: this.props.item.image ? 0 : 300}}
                    style={values}>

                {interpolatedValues =>
                    <Message body={ this.props.item.message }
                             style={{
                                 width: `${interpolatedValues.x}px`}
                             } />
                }

            </Motion>
        );
    }

    render() {

        //const {item} = this.props;
        const image = this.createImage();
        const message = this.createMessage();

        return (
            <div className="climb-slideshow__slide"
                 style={this.props.style}>
                {image}
                {message}
            </div>
        );

    }
}

export default Slide;


