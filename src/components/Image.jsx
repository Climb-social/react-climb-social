import React from 'react';


class Image extends React.Component {

    render() {
        return (
            <img className="climb__tile__image"
                 src={ this.props.src }/>
        );
    }
}

Image.propTypes = {
    src: React.PropTypes.string.isRequired,
    width: React.PropTypes.number,
    height: React.PropTypes.number
};

export default Image;
