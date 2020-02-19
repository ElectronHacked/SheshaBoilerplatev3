/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { SettingGroupLink } from '@root/components/settingGroupLink';

const defaultComponent = <SettingGroupLink t={() => {}} />;

test('SettingGroupLink is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
