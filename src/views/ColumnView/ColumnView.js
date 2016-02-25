import React, { PropTypes } from 'react';
import Climb from 'climb-social';
import Bricks from 'bricks.js';
import StackedCard from '../../components/Cards/StackedCard';

class ColumnView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const sizes = [
      { columns: 1, gutter: 30 },
      { mq: '768px', columns: 2, gutter: 30 },
      { mq: '1024px', columns: 3, gutter: 30 },
      { mq: '2000px', columns: 4, gutter: 30 }
    ];

    this.instance = Bricks({
      container: '.Climb--ColumnView',
      packed: 'data-packed',
      sizes
    });

    this.instance
      .resize();

    const { collectionId } = this.props;
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
  Card: PropTypes.oneOfType([PropTypes.func, PropTypes.elem]),
  collectionId: PropTypes.string.isRequired
};

ColumnView.defaultProps = {
  Card: StackedCard
};

export default ColumnView;
