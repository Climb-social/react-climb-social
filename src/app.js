var React = require('react');

var ClimbWall = React.createClass({
    render: function() {
        return <div>Climb Wall {this.props.climbId}</div>;
    }
});

React.render(<ClimbWall climbId="XXX" />, document.body);