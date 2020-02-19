/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { SettingsBody } from '@root/components/settingsBody';

const defaultComponent = <SettingsBody t={() => {}} />;

test('SettingsBody is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
