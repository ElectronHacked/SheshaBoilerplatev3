/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { ProjectConfiguration } from '@root/pages/project-configuration';

const defaultComponent = <ProjectConfiguration t={() => {}} />;

test('ProjectConfiguration is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
