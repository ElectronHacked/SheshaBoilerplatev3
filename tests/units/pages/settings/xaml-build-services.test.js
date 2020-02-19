/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { XamlBuildServices } from '@root/pages/xaml-build-services';

const defaultComponent = <XamlBuildServices t={() => {}} />;

test('XamlBuildServices is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
