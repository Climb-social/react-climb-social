import React from 'react';


class Interaction extends React.Component {

    render() {

        return (
            <ul></ul>
        );
    }
}

Interaction.propTypes = {
    body: React.PropTypes.string.isRequired
};

export default Interaction;
