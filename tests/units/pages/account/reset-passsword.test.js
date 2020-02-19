/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { ResetPasssword } from '@root/pages/reset-passsword';

const defaultComponent = <ResetPasssword t={() => {}} />;

test('ResetPasssword is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
