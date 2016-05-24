import React, { PropTypes } from 'react';
import Climb from 'climb-social';
import css from 'react-css-modules';

import styles from './ClimbView.sass';
import ListLayout from '../layouts/ListLayout/ListLayout';
import TagManager from '../TagManager/TagManager';


@css(styles)
export default class ClimbView extends React.Component {

  static propTypes = {
    View: PropTypes.oneOfType([PropTypes.func, PropTypes.elem]).isRequired,
    Card: PropTypes.oneOfType([PropTypes.func, PropTypes.elem]),
    items: PropTypes.arrayOf(PropTypes.object),
    collectionId: PropTypes.string.isRequired,
    limit: PropTypes.number,
    refresh: PropTypes.number,
    domain: PropTypes.string,
  };

  static defaultProps = {
    View: ListLayout,
    items: [],
    limit: 30,
    refresh: 8,
    domain: 'http://app.climb.social',
  };

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    // Use provided items, otherwise setup steam
    if (this.props.items.length) this.handleItems(this.props.items);
    else this.setupStream(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.teardownStream();
    this.setupStream(nextProps);
  }

  componentWillUnmount() {
    this.teardownStream();
  }


  setupStream(props) {
    const { collectionId, refresh, domain } = props;

    this.subscription = Climb
      .getStream(collectionId, refresh, domain)
      .subscribe(this.handleItems.bind(this));
  }

  teardownStream() {
    this.subscription.dispose();
  }


  handleItems(items) {
    if (!items.length) return;

    const userId = items[0].userId;

    this.setState({ items, userId });
  }


  render() {
    const { View, collectionId, ...props } = this.props;
    const { items, userId } = this.state;

    return (
      <div
        styleName="root"
        className="Climb__Container"
      >
        <View items={items} {...props} />
        <TagManager dataLayer={[{ collection_id: collectionId, user_id: userId }]} />
      </div>
    );
  }
}
