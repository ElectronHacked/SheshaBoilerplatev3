/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { SettingGroupItem } from '@root/components/settingGroupItem';

const defaultComponent = <SettingGroupItem t={() => {}} />;

test('SettingGroupItem is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
