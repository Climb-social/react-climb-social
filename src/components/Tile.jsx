import React from 'react';
import Image from './Image';
import Message from './Message';
import Author from './Author';


class Tile extends React.Component {

    render() {

        let image;
        if (this.props.image !== null) {

            const {url: src, width, height} = this.props.image;

            image = (
                <Image src={ src }
                       width={ width }
                       height={ height }/>
            );
        }

        let message;
        if (this.props.message) {
            message = (
                <Message body={ this.props.message }/>
            );
        }


        let classString = `climb__tile climb__tile--${this.props.source_type}`;

        if (this.props.image && this.props.video_url) {
            classString += ' climb__tile--has-media';
        }

        if (this.props.image) {
            classString += ' climb__tile--has-image';
        }

        if (this.props.video_url) {
            classString += ' climb__tile--has-video';
        }

        const {author} = this.props;

        return (
            <div className={ classString }>

                { image }

                <div className="climb__tile__content">
                    { message }
                </div>

                <Author {...author} />

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
        link: React.PropTypes.string.isRequired,
    }),

    // Optional attrs
    message: React.PropTypes.string,
    video_src: React.PropTypes.string,
    image: React.PropTypes.shape({
        url: React.PropTypes.string.isRequired,
        width: React.PropTypes.number.isRequired,
        height: React.PropTypes.number.isRequired,
    })

};

export default Tile;
