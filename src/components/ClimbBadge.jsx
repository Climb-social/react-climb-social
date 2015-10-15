import React, {Component} from 'react';


class ClimbBadge extends Component {

    render() {

        const logo = require('../img/climb_logo.svg');

        return (
            <a href="http://climb.social/"
               className="climb-social-badge"
               dangerouslySetInnerHTML={{__html: logo}}>
            </a>
        );
    }
}

export default ClimbBadge;
