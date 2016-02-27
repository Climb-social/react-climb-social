import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import ClimbView from './ClimbView';
import ListView from '../ListView/ListView';
import ColumnView from '../ColumnView/ColumnView';

test('ClimbView output classes', assert => {
  const props = {
    collectionId: 'aaa'
  };
  const output = shallow(<ClimbView {...props} />);

  const expected = true;
  const actual = output.hasClass('Climb__Container');

  assert.equal(
    actual,
    expected,
    'Climb__Container'
  );

  assert.end();
});


test('ClimbView default View', assert => {
  const props = {
    collectionId: 'aaa'
  };
  const output = shallow(<ClimbView {...props} />);

  const expected = 1;
  const actual = output.find(ListView).length;

  assert.equal(
    actual,
    expected,
    'ListView'
  );

  assert.end();
});

test('ClimbView View override', assert => {
  const props = {
    collectionId: 'aaa',
    View: ColumnView
  };
  const output = shallow(<ClimbView {...props} />);

  const expected = 1;
  const actual = output.find(ColumnView).length;

  assert.equal(
    actual,
    expected,
    'ListView is replaced by ColumnView'
  );

  assert.end();
});

