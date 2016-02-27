import React, { PropTypes } from 'react';
import Climb from 'climb-social';
import Bricks from 'bricks.js';

class ColumnView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const { collectionId, sizes } = this.props;

    this.instance = Bricks({
      container: '.Climb--ColumnView',
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

  componentWillUnMount() {
    this.subscription.dispose();
  }

  render() {
    const {
      Card
    } = this.props;

    return (
      <div className='Climb--ColumnView'>
        {this.state.items.map(item => {
          return (
            <Card key={ item.id } {...item} />
          );
        })}
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
