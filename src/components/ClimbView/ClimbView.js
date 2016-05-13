import React, { PropTypes } from 'react';
import Climb from 'climb-social';

import ListLayout from '../layouts/ListLayout/ListLayout';
import TagManager from '../TagManager/TagManager';

class ClimbView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.setupStream(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.teardownStream();
    this.setupStream(nextProps);
  }

  componentWillUnmount() {
    this.teardownStream();
  }


  setupStream(props) {
    const { collectionId, refresh, domain, limit } = props;

    this.subscription = Climb
      .getStream(collectionId, refresh, domain)
      .subscribe(items => {
        const latestItems = items.slice(0, limit);
        const userId = items[0].userId;
        this.setState({
          items: latestItems,
          userId,
        });
      });
  }

  teardownStream() {
    this.subscription.dispose();
  }

  render() {
    const { View, Card, collectionId } = this.props;
    const { items, userId } = this.state;

    return (
      <div className="Climb__Container">
        <View items={items} Card={Card} />
        <TagManager dataLayer={[{ collection_id: collectionId, user_id: userId }]} />
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
  domain: PropTypes.string,
};

ClimbView.defaultProps = {
  View: ListLayout,
  limit: 30,
  refresh: 8,
  domain: 'http://app.climb.social',
};

export default ClimbView;
