/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { UnAuthedAccountPage } from '@root/components/unAuthedAccountPage';

const defaultComponent = <UnAuthedAccountPage t={() => {}} />;

test('UnAuthedAccountPage is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
