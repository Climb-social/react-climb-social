import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import ListView from './ListView';

test('ListView output classes', assert => {
  const output = shallow(<ListView collectionId='aaa' />);

  const expected = true;
  const actual = output.hasClass('Climb--ListView');

  assert.equal(
    actual,
    expected,
    'Climb--ListView'
  );

  assert.end();
});
