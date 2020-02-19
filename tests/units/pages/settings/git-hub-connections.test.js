/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { GitHubConnections } from '@root/pages/git-hub-connections';

const defaultComponent = <GitHubConnections t={() => {}} />;

test('GitHubConnections is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
