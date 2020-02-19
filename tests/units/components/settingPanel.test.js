/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { SettingPanel } from '@root/components/settingPanel';

const defaultComponent = <SettingPanel t={() => {}} />;

test('SettingPanel is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
