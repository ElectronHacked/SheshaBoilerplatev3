/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { ServiceConnections } from '@root/pages/service-connections';

const defaultComponent = <ServiceConnections t={() => {}} />;

test('ServiceConnections is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
