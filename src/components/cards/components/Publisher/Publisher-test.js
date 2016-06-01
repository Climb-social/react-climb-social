import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import Publisher from './Publisher';

test('Publisher output classes', assert => {
  const props = {
    pic: 'http://100shapes.com/pic.jpg',
    displayName: 'Climb Social',
    username: 'ClimbSocialUK',
    profileLink: 'http://twitter.com/ClimbSocialUK',
  };

  const output = shallow(<Publisher {...props} />);

  assert.plan(1);
  const expected = true;

  const actual = output.hasClass('Climb-Card__publisher');

  assert.equal(
    actual,
    expected,
    'Climb-Card__publisher'
  );

  // TODO: Add child node className tests
});
