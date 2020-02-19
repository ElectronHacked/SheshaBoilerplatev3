/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { TeamConfiguration } from '@root/pages/team-configuration';

const defaultComponent = <TeamConfiguration t={() => {}} />;

test('TeamConfiguration is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
