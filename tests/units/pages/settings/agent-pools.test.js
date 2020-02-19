/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { AgentPools } from '@root/pages/agent-pools';

const defaultComponent = <AgentPools t={() => {}} />;

test('AgentPools is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
