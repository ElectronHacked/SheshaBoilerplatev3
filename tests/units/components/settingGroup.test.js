/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { SettingGroup } from '@root/components/settingGroup';

const defaultComponent = <SettingGroup t={() => {}} />;

test('SettingGroup is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
