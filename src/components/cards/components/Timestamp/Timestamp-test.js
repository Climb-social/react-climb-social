import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import Timestamp from './Timestamp';

test('Timestamp output classes', assert => {
  const props = {
    value: 1455702231,
  };

  const output = shallow(<Timestamp {...props} />);

  assert.plan(1);
  const expected = true;

  const actual = output.hasClass('Climb-Card__timestamp');

  assert.equal(
    actual,
    expected,
    'Climb-Card__timestamp'
  );

  // TODO: Add modifier className tests (--link)
});

