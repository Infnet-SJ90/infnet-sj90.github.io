import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';
import { mount } from 'enzyme';

const rendered = mount(<Button>Button Component</Button>);
const snapshot = renderer.create(<Button>Button Component</Button>).toJSON();

it('Should Button tag return output correctly', () => {
  expect(rendered.text()).toBe('Button Component');
});

it('Should Button match to snapshot', () => {
  expect(snapshot).toMatchSnapshot();
});
