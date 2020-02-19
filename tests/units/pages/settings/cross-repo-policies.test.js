/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { CrossRepoPolicies } from '@root/pages/cross-repo-policies';

const defaultComponent = <CrossRepoPolicies t={() => {}} />;

test('CrossRepoPolicies is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
