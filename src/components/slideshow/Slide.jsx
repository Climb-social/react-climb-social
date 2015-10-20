import React, {Component, PropTypes} from 'react';
import Message from '../common/Message';
import Image from '../common/Image';


class Slide extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        item: PropTypes.object.isRequired
    };

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

    render() {

        const {item} = this.props;
        const image = this.createImage();

        return (
            <div className="climb-slideshow__slide"
                 style={this.props.style}>
                {image}
                <Message body={ item.message }/>
            </div>
        );

    }
}

export default Slide;


