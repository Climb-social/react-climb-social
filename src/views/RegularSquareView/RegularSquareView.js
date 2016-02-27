import React, { PropTypes } from 'react';
import Climb from 'climb-social';
import StackedCard from '../../components/Cards/StackedCard';

class RegularSquareView extends React.Component {

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
      <div className='Climb--RegularSquareView'>
        {this.state.items.map(item => {
          return (
            <div key={ item.id }
                 className='Climb--RegularSquareView__square'>
              <Card {...item} />
            </div>
          );
        })}
      </div>
    );
  }
}

RegularSquareView.propTypes = {
  Card: PropTypes.oneOfType([PropTypes.func, PropTypes.elem]),
  collectionId: PropTypes.string.isRequired
};

RegularSquareView.defaultProps = {
  Card: StackedCard
};

export default RegularSquareView;
