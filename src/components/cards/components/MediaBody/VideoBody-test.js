import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import VideoBody from './VideoBody';

const VIDEO_URL = 'http://url.to.image.com';


test('VideoBody default classes', t => {
  const props = {
    url: VIDEO_URL,
  };

  const output = shallow(<VideoBody {...props} />);

  t.plan(2);

  t.equal(output.hasClass('Climb-Card__media'), true, 'has Climb-Card__media class');

  t.equal(output.hasClass('Climb-Card__media--video'), true, 'has Climb-Card__media--video class');

  t.end();
});

