import React, { PropTypes } from 'react';
import Bricks from 'bricks.js';


class ColumnView extends React.Component {

  componentDidMount() {
    // Layout cards with Bricks
    this._packer = Bricks({
      container: '.Climb--ColumnView--inner',
      packed: 'data-packed',
      sizes: this.props.sizes,
    });

    this._packer.resize(true);
    this._packer.pack();
  }

  componentDidUpdate() {
    this._packer.pack();
  }

  componentWillUnmount() {
    // Destory layout (?)
    this._packer.resize(false);
  }

  render() {
    const { Card, items } = this.props;

    return (
      <div className='Climb--ColumnView'>
        <div className='Climb--ColumnView--inner'>
          {items.map(item =>
            <div key={ item.id } style={{width: 290}}>
              <Card {...item} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

ColumnView.propTypes = {
  items: PropTypes.array,
  Card: PropTypes.oneOfType([PropTypes.func, PropTypes.elem]).isRequired,
  collectionId: PropTypes.string.isRequired,
  sizes: PropTypes.array
};

ColumnView.defaultProps = {
  items: [],
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
