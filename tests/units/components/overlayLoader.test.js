/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { OverlayLoader } from '@root/components/overlayLoader';

const defaultComponent = <OverlayLoader t={() => {}} />;

test('OverlayLoader is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
