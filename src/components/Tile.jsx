import React from 'react';
import Image from './Image';
import Message from './Message';
import Author from './Author';


class Tile extends React.Component {

    constructor(props) {
        super(props);
    }

    createImage() {

        if (this.props.image !== null) {
            const {url: src, width, height} = this.props.image;
            return (
                <Image src={ src }
                       width={ width }
                       height={ height }/>
            );
        }
        return null;
    }

    createMessage() {

        if (this.props.message) {
            return (
                <Message body={ this.props.message }/>
            );
        }
        return null;
    }

    createClassString() {

        let classString = `climb__tile climb__tile--${this.props.source_type}`;

        if (this.props.image) {
            classString += ' climb__tile--has-media climb__tile--has-image';
        } else {
            classString += ' climb__tile--has-no-image';
        }

        if (this.props.video_url) {
            classString += ' climb__tile--has-media climb__tile--has-video';
        } else {
            classString += ' climb__tile--has-no-video';
        }

        return classString;
    }

    render() {

        const image = this.createImage();
        const message = this.createMessage();
        const classString = this.createClassString();
        const {author} = this.props;

        return (
            <div className={ classString }
                 style={this.props.style}>

                <a href={ this.props.link }>
                    { image }
                </a>

                <div className="climb__tile__content">
                    { message }

                    <Author {...author} />
                </div>
            </div>
        );
    }
}


Tile.propTypes = {

    // Required attrs
    link: React.PropTypes.string.isRequired,
    source_type: React.PropTypes.string.isRequired,
    timestamp: React.PropTypes.number.isRequired,
    author: React.PropTypes.shape({
        username: React.PropTypes.string.isRequired,
        picture: React.PropTypes.string.isRequired,
        link: React.PropTypes.string.isRequired
    }),

    // Optional attrs
    message: React.PropTypes.string,
    video_src: React.PropTypes.string,
    image: React.PropTypes.shape({
        url: React.PropTypes.string.isRequired,
        width: React.PropTypes.number.isRequired,
        height: React.PropTypes.number.isRequired
    })

};

export default Tile;
