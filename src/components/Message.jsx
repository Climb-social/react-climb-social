import React from 'react';


class Message extends React.Component {

    render() {
        return (
            <div className="climb__tile__message"
                 dangerouslySetInnerHTML={{__html: this.props.body}}>
            </div>
        );
    }
}

Message.propTypes = {
    body: React.PropTypes.string.isRequired
};

export default Message;
