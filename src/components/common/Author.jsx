import React, {Component, PropTypes} from 'react';


class Author extends Component {

    static propTypes = {
        link: PropTypes.string,
        picture: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    };

    render() {

        return (
            <a className="climb__author"
               href={ this.props.link }>

                <img height="34"
                     width="34"
                     src={ this.props.picture}
                     alt={ `Profile pic of ${this.props.name}` }/>

                <h4 className="climb__tile__author__username">
                    { this.props.username }
                </h4>
            </a>
        );
    }
}

export default Author;
