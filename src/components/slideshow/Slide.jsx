import React, {Component, PropTypes} from 'react';
import Panel from './Panel';
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
        shouldDisplayPanel: false
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.isCurrent) {
            setTimeout(() => {
                this.setState({
                    shouldDisplayPanel: true
                });
            }, 850);
        } else {
            this.setState({
                shouldDisplayPanel: false
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
                <Panel author={this.props.item.author} message={this.props.item.message} />
            );
        }

        const panelWidth = 300;

        const values = {
            x: this.state.shouldDisplayPanel ? spring(0) : spring(panelWidth)
        };

        const defaultValues = {
            x: 0
        };

        return (
            <Motion defaultStyle={defaultValues}
                    style={values}>
                {interpolatedValues =>
                    <Panel author={this.props.item.author}
                           message={this.props.item.message}
                           style={{marginLeft: `-${interpolatedValues.x}px`}} />
                }

            </Motion>
        );
    }

    render() {
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


