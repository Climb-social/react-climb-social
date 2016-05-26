import React, { PropTypes } from 'react';
import Climb from '../../api';
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
    hostname: PropTypes.string,
  };

  static defaultProps = {
    View: ListLayout,
    items: [],
    refresh: 8,
  };

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    // Use provided items, otherwise setup steam
    // if (this.props.items.length) return this.handleItems(this.props.items);
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
    const {
      View,
      collectionId,
      hostname,
      protocol,
      refresh: interval,
    } = props;

    const createStream = View.createStream || Climb.defaultStream;

    this.subscription =
      createStream(collectionId, { protocol, hostname, interval })
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
      <div styleName="root" className="Climb__Container">
        <View {...props} items={items} />
        <TagManager dataLayer={[{ collection_id: collectionId, user_id: userId }]} />
      </div>
    );
  }
}
