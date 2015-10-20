import React from 'react';


class Message extends React.Component {

    render() {

        const message = this.props.body
            .replace(/<a href="http:\/\/pic.twitter.com\/[^>]*>([^<]+)<\/a>/g, '');

        return (
            <div className="climb__tile__message"
                 style={this.props.style}
                 dangerouslySetInnerHTML={{__html: message}}>
            </div>
        );
    }
}

Message.propTypes = {
    body: React.PropTypes.string.isRequired
};

export default Message;
