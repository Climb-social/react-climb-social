import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import TextBody from './TextBody';

test('TextBody output classes', assert => {
  const props = {
    text: 'I\'m <strong> HTML </strong>',
  };

  const output = shallow(<TextBody {...props} />);

  const expected = true;
  const actual = output.hasClass('Climb-Card__text-body');

  assert.equal(
    actual,
    expected,
    'Climb-Card__text-body'
  );

  assert.end();
});

