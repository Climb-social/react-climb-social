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
    const {
      collectionId,
      refresh,
      domain,
      limit
      } = this.props;
    this.subscription = Climb.getStream(collectionId, refresh, domain)
      .subscribe(items => {
        const latestItems = items.slice(0, limit);
        this.setState({ items: latestItems });
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
  collectionId: PropTypes.string.isRequired,
  limit: PropTypes.number,
  refresh: PropTypes.number,
  domain: PropTypes.string
};

ClimbView.defaultProps = {
  View: ListView,
  Card: StackedCard,
  limit: 30,
  refresh: 8,
  domain: 'http://app.climb.social'
};

export default ClimbView;
