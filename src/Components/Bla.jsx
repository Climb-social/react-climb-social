var React = require('react');

var Bla = React.createClass({

    displayName: 'Bla',

    dog() {
        "use strict";
        console.log('hello');
    },

    render: function () {
        return (
            <h1>The component is rendering!</h1>
        );
    }

});

module.exports = Bla;