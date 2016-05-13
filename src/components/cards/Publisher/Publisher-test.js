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

  assert.plan(2);
  const expected = true;

  let actual = output.hasClass('Climb__Meta');

  assert.equal(
    actual,
    expected,
    'Climb__Meta'
  );

  actual = output.hasClass('Climb__Meta__Publisher');

  assert.equal(
    actual,
    expected,
    'Climb__Meta__Publisher'
  );
});

