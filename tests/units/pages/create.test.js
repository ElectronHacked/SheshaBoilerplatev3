/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Create } from '@root/pages/create';

const defaultComponent = <Create t={() => {}} />;

test('Create is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
