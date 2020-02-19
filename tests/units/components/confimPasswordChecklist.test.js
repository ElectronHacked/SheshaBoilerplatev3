/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { ConfimPasswordChecklist } from '@root/components/confimPasswordChecklist';

const defaultComponent = <ConfimPasswordChecklist t={() => {}} />;

test('ConfimPasswordChecklist is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
