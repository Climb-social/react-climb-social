
import ListLayout from '../components/layouts/ListLayout/ListLayout';
import ColumnLayout from '../components/layouts/ColumnLayout/ColumnLayout';
import SquareLayout from '../components/layouts/SquareLayout/SquareLayout';

const VIEWS = {
  list: ListLayout,
  column: ColumnLayout,
  square: SquareLayout,
};

const viewFinder = (viewStr = '') => {
  const viewKey = viewStr.toLowerCase();

  if (VIEWS.hasOwnProperty(viewKey)) {
    return VIEWS[viewKey];
  }

  return null;
};

export default viewFinder;
