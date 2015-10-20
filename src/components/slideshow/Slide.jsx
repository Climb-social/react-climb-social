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

    createPanel() {

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
                           style={{marginLeft: `-${interpolatedValues.x}px`, width: panelWidth}} />
                }

            </Motion>
        );
    }

    createClassString() {

        let classString = `climb-slideshow__slide climb__tile--${this.props.item.source_type}`;

        if (this.props.item.image) {
            classString += ' climb-slideshow__slide--has-media climb-slideshow__slide--has-image';
        } else {
            classString += ' climb-slideshow__slide--has-no-image';
        }

        if (this.props.item.video_url) {
            classString += ' climb-slideshow__slide--has-media climb-slideshow__slide--has-video';
        } else {
            classString += ' climb-slideshow__slide--has-no-video';
        }

        return classString;
    }

    render() {
        const image = this.createImage();
        const panel = this.createPanel();
        const classString = this.createClassString();

        return (
            <div className={ classString }
                 style={this.props.style}>
                {image}
                {panel}
            </div>
        );

    }
}

export default Slide;


