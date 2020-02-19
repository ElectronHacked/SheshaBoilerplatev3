/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Dashboards } from '@root/pages/dashboards';

const defaultComponent = <Dashboards t={() => {}} />;

test('Dashboards is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
