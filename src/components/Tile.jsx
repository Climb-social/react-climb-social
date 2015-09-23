import React from 'react';
import Message from './Message';


class Tile extends React.Component {

    render() {

        var message;
        if (this.props.message) {
            message = (
                <Message body={this.props.message}/>
            )
        }

        return (
            <div className="climb__tile">
                <div className="climb__tile__content">
                    { message }
                </div>
            </div>
        );
    }
}

export default Tile;