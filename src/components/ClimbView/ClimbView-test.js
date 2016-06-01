import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import ClimbView from './ClimbView';
import ListLayout from '../layouts/ListLayout/ListLayout';
import ColumnLayout from '../layouts/ColumnLayout/ColumnLayout';

test('ClimbView output classes', assert => {
  const props = {
    collectionId: 'aaa',
  };
  const output = shallow(<ClimbView {...props} />);

  const expected = true;
  const actual = output.hasClass('Climb-View');

  assert.equal(
    actual,
    expected,
    'Climb-View'
  );

  assert.end();
});


test('ClimbView default View', assert => {
  const props = {
    collectionId: 'aaa',
  };
  const output = shallow(<ClimbView {...props} />);

  const expected = 1;
  const actual = output.find(ListLayout).length;

  assert.equal(
    actual,
    expected,
    'ListLayout'
  );

  assert.end();
});

test('ClimbView View override', assert => {
  const props = {
    collectionId: 'aaa',
    View: ColumnLayout,
  };
  const output = shallow(<ClimbView {...props} />);

  const expected = 1;
  const actual = output.find(ColumnLayout).length;

  assert.equal(
    actual,
    expected,
    'ListLayout is replaced by ColumnLayout'
  );

  assert.end();
});

