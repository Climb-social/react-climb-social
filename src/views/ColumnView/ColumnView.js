import React, { PropTypes } from 'react';
import Climb from 'climb-social';
import StackedCard from '../../components/Cards/StackedCard';

class ColumnView extends React.Component {

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
