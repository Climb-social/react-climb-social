import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import ColumnView from './ColumnView';

test('ColumnView classes', assert => {
  const output = shallow(<ColumnView collectionId='aaa' />);

  const expected = true;
  const actual = output.hasClass('Climb--ColumnView');

  assert.equal(
    actual,
    expected,
    'Climb--ColumnView'
  );

  assert.end();
});
