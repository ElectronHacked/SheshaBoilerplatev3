/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { TestManagement } from '@root/pages/test-management';

const defaultComponent = <TestManagement t={() => {}} />;

test('TestManagement is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
