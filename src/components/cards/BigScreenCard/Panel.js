import React, { PropTypes } from 'react';


class Panel extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onLeave: PropTypes.func,
  };

  componentWillUpdate({ onLeave: nextOnLeave }) {
    const { onLeave: currentOnLeave } = this.props;
    if (!currentOnLeave && nextOnLeave) nextOnLeave();
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}

export default Panel;
