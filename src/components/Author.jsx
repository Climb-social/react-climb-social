import React from 'react';


class Author extends React.Component {

    render() {
        return (
            <div className="climb__tile__author">
                 { this.props.body }
            </div>
        );
    }
}

Author.propTypes = {
    body: React.PropTypes.string.isRequired
};

export default Author;
