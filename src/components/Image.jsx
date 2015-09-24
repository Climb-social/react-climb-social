import React from 'react';


class Image extends React.Component {

    render() {
        return (
            <img className="climb__tile__image" src={ this.props.body } />
        );
    }
}

Image.propTypes = {
    body: React.PropTypes.string.isRequired
};

export default Image;
