/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { EntityHistoryDrawer } from '@root/components/EntityHistoryDrawer';

const defaultComponent = <EntityHistoryDrawer t={() => {}} />;

test('EntityHistoryDrawer is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
