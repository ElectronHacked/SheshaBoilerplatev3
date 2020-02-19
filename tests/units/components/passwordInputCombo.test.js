/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { PasswordInputCombo } from '@root/components/passwordInputCombo';

const defaultComponent = <PasswordInputCombo t={() => {}} />;

test('PasswordInputCombo is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
