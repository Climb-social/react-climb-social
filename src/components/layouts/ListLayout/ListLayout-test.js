import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import ListLayout from './ListLayout';

test('ListLayout output classes', assert => {
  const props = {
    collectionId: 'aaa',
  };
  const output = shallow(<ListLayout {...props} />);

  const expected = true;
  const actual = output.hasClass('Climb--ListLayout');

  assert.equal(
    actual,
    expected,
    'Climb--ListLayout'
  );

  assert.end();
});
