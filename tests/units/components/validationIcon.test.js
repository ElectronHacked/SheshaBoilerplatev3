/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { ValidationIcon } from '@root/components/validationIcon';

const defaultComponent = <ValidationIcon t={() => {}} />;

test('ValidationIcon is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
