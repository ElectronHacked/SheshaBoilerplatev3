/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { NavLinksRenderer } from '@root/components/navLinksRenderer';

const defaultComponent = <NavLinksRenderer t={() => {}} />;

test('NavLinksRenderer is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
