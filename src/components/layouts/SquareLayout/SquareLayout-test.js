import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import SquareLayout from './SquareLayout';

test('SquareLayout classes', assert => {
  const props = {
    collectionId: 'aaa',
  };
  const output = shallow(<SquareLayout {...props} />);

  const expected = true;
  const actual = output.hasClass('Climb--SquareLayout');

  assert.equal(
    actual,
    expected,
    'Climb--SquareLayout'
  );

  assert.end();
});
