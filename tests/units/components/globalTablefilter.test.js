/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { GlobalTablefilter } from '@root/components/globalTablefilter';

const defaultComponent = <GlobalTablefilter t={() => {}} />;

test('GlobalTablefilter is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
