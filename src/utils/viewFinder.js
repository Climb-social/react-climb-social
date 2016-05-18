
import ListLayout from '../components/layouts/ListLayout/ListLayout';
import ColumnLayout from '../components/layouts/ColumnLayout/ColumnLayout';
import SquareLayout from '../components/layouts/SquareLayout/SquareLayout';
import SlideshowLayout from '../components/layouts/SlideshowLayout/SlideshowLayout';

const VIEWS = {
  list: ListLayout,
  column: ColumnLayout,
  square: SquareLayout,
  slideshow: SlideshowLayout,
};

const viewFinder = (viewStr = '') => VIEWS[viewStr.toLowerCase()] || null;

export default viewFinder;
