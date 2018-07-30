import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

const snapshot = renderer.create(<Button>Button Component</Button>).toJSON();

it('Should Title match to snapshot', () => {
  expect(snapshot).toMatchSnapshot();
});
