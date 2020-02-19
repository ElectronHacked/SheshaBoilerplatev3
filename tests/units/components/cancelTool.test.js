/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { CancelTool } from '@root/components/cancelTool';

const defaultComponent = <CancelTool t={() => {}} />;

test('CancelTool is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
