/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { PasswordChecklist } from '@root/components/passwordChecklist';

const defaultComponent = <PasswordChecklist t={() => {}} />;

test('PasswordChecklist is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
