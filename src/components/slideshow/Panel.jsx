import React, {Component, PropTypes} from 'react';
import Message from '../common/Message';
import Author from '../common/Author';


class Panel extends Component {

    static propTypes = {
        message: PropTypes.string.isRequired,
        author: PropTypes.object.isRequired
    };

    createAuthor() {
        const {author} = this.props;

        return(
            <Author {...author} />
        );
    }

    createMessage() {
        return(
            <Message body={this.props.message} />
        );
    }

    render() {

        const author = this.createAuthor();
        const message = this.createMessage();

        return (
            <div style={this.props.style}
                 className="climb-slideshow__panel">

                {author}
                {message}
            </div>
        );
    }
}

export default Panel;
