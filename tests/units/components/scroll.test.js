/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Scroll } from '@root/components/scroll';

const defaultComponent = <Scroll t={() => {}} />;

test('Scroll is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
