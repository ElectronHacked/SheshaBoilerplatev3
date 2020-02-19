/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Retention } from '@root/pages/retention';

const defaultComponent = <Retention t={() => {}} />;

test('Retention is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
