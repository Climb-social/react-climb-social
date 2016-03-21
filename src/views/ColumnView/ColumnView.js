import React, { PropTypes } from 'react';
import Climb from 'climb-social';
import Bricks from 'bricks.js';
import TagManager from '../../components/TagManager/TagManager';

class ColumnView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  _setupStream(props) {
    const { collectionId, sizes } = props;

    this.instance = Bricks({
      container: '.Climb--ColumnView--inner',
      packed: 'data-packed',
      sizes
    });

    this.instance
      .resize();

    this.subscription = Climb.getStream(collectionId)
      .subscribe(items => {
        this.setState({ items });
        this.instance.pack();
      });
  }

  _teardownStream() {
    this.subscription.dispose();
  }

  componentDidMount() {
    this._setupStream();
  }

  componentWillReceiveProps(nextProps) {
    this._teardownStream();
    this._setupStream(nextProps);
  }

  componentWillUnmount() {
    this._teardownStream();
  }

  render() {
    const {
      Card
    } = this.props;

    return (
      <div className='Climb--ColumnView'>
        <div className='Climb--ColumnView--inner'>
          {this.state.items.map(item => {
            return (
              <Card key={ item.id } {...item} />
            );
          })}
        </div>
        <TagManager dataLayer={[{
          collection_id: this.props.collectionId
        }]} />
      </div>
    );
  }
}

ColumnView.propTypes = {
  Card: PropTypes.oneOfType([PropTypes.func, PropTypes.elem]).isRequired,
  collectionId: PropTypes.string.isRequired,
  sizes: PropTypes.array
};

ColumnView.defaultProps = {
  sizes: [
    { columns: 1, gutter: 30 },
    { mq: '640px', columns: 2, gutter: 30 },
    { mq: '945px', columns: 3, gutter: 30 },
    { mq: '1250px', columns: 4, gutter: 30 },
    { mq: '1556px', columns: 5, gutter: 30 },
    { mq: '1860px', columns: 6, gutter: 30 }
  ]
};

export default ColumnView;
