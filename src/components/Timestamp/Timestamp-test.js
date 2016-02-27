import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import Timestamp from './Timestamp';

test('Timestamp output classes', assert => {
  const props = {
    value: 1455702231
  };

  const output = shallow(<Timestamp {...props} />);

  assert.plan(2);
  const expected = true;

  let actual = output.hasClass('Climb__Meta');

  assert.equal(
    actual,
    expected,
    'Climb__Meta'
  );

  actual = output.hasClass('Climb__Meta__Timestamp');

  assert.equal(
    actual,
    expected,
    'Climb__Meta__Timestamp'
  );
});

