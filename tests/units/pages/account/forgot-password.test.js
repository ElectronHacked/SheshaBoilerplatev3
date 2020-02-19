/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { ForgotPassword } from '@root/pages/forgot-password';

const defaultComponent = <ForgotPassword t={() => {}} />;

test('ForgotPassword is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
