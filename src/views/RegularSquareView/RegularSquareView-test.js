import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import RegularSquareView from './RegularSquareView';

test('RegularSquareView classes', assert => {
  const output = shallow(<RegularSquareView collectionId='aaa' />);

  const expected = true;
  const actual = output.hasClass('Climb--RegularSquareView');

  assert.equal(
    actual,
    expected,
    'Climb--RegularSquareView'
  );

  assert.end();
});
