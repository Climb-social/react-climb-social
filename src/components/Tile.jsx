import React from 'react';
import Image from './Image';
import Message from './Message';
import Avatar from './Avatar';
import Author from './Author';


class Tile extends React.Component {

    render() {

        var image;
        if (this.props.item.image != null) {
            image = (
                <Image body={this.props.item.image.url}/>
            )
        }

        var message;
        if (this.props.item.message) {
            message = (
                <Message body={this.props.item.message}/>
            )
        }

        var avatar;
        if (this.props.item.author.picture) {
            avatar = (
                <Avatar body={this.props.item.author.picture}/>
            )
        }

        var author;
        if (this.props.item.author.name) {
            author = (
                <Author body={this.props.item.author.name}/>
            )
        }

        let classString = `climb__tile climb__tile--${this.props.item.source_type}`;

        return (
            <div className={ classString }>
                <div className="climb__tile__content">
                    { image }
                    { message }
                </div>
                <div className="climb__tile__author">
                    { avatar }
                    { author }
                </div>

            </div>
        );
    }
}


Tile.propTypes = {
    item: React.PropTypes.object.isRequired
};

export default Tile;
