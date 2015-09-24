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

        let classString = `climb__tile climb__tile--${this.props.item.source_type}`;

        return (
            <div className={ classString }>
                <div className="climb__tile__content">
                    { message }
                </div>
            </div>
        );
    }
}

export default Tile;