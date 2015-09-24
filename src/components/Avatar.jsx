import React from 'react';


class Avatar extends React.Component {

    render() {
        return (
            <img className="climb__tile__avatar" src={ this.props.body } />
        );
    }
}

Avatar.propTypes = {
    body: React.PropTypes.string.isRequired
};

export default Avatar;
