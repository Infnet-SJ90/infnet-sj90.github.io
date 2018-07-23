'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Home from './index';

const snapshot = renderer.create(<Home />).toJSON();

it('Should Title match to snapshot', () => {
  expect(snapshot).toMatchSnapshot();
});
