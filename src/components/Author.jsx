import React from 'react';


class Author extends React.Component {

    render() {

        return (
            <a className="climb__tile__author"
               href={ this.props.link }>

                <img src={ this.props.picture}
                     alt={ `Profile pic of ${this.props.name}` }/>

                <h4 className="climb__tile__author__username">
                    { this.props.username }
                </h4>
            </a>
        );
    }
}

Author.propTypes = {};

export default Author;
