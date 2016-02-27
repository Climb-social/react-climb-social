import React, { PropTypes } from 'react';
import Climb from 'climb-social';

import ListView from '../ListView/ListView';
import StackedCard from '../../components/Cards/StackedCard';

class ClimbView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const { collectionId } = this.props;
    this.subscription = Climb.getStream(collectionId)
      .subscribe(items => {
        this.setState({ items });
      });
  }

  componentWillUnMount() {
    this.subscription.dispose();
  }

  render() {
    const {
      View,
      ...otherProps
      } = this.props;

    return (
      <div className='Climb__Container'>
        <View items={ this.state.items } { ...otherProps } />
      </div>
    );
  }
}

ClimbView.propTypes = {
  View: PropTypes.oneOfType([PropTypes.func, PropTypes.elem]),
  Card: PropTypes.oneOfType([PropTypes.func, PropTypes.elem]),
  collectionId: PropTypes.string.isRequired
};

ClimbView.defaultProps = {
  View: ListView,
  Card: StackedCard
};

export default ClimbView;
