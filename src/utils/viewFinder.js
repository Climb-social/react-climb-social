
import ListView from '../views/ListView/ListView';
import ColumnView from '../views/ColumnView/ColumnView';
import RegularSquareView from '../views/RegularSquareView/RegularSquareView';

const VIEWS = {
  listview: ListView,
  columnview: ColumnView,
  regularsquareview: RegularSquareView
};

const viewFinder = (viewStr = '') => {
  const viewKey = viewStr.toLowerCase();

  if (VIEWS.hasOwnProperty(viewKey)) {
    return VIEWS[viewKey];
  }

  return null;
};

export default viewFinder;
