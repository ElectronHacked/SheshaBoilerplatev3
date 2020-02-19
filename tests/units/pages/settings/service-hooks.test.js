/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { ServiceHooks } from '@root/pages/service-hooks';

const defaultComponent = <ServiceHooks t={() => {}} />;

test('ServiceHooks is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
