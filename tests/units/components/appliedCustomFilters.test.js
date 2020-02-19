/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { AppliedCustomFilters } from '@root/components/appliedCustomFilters';

const defaultComponent = <AppliedCustomFilters t={() => {}} />;

test('AppliedCustomFilters is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
