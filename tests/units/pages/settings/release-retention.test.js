/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { ReleaseRetention } from '@root/pages/release-retention';

const defaultComponent = <ReleaseRetention t={() => {}} />;

test('ReleaseRetention is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
