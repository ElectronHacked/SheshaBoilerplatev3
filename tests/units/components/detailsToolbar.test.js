/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { DetailsToolbar } from '@root/components/detailsToolbar';

const defaultComponent = <DetailsToolbar t={() => {}} />;

test('DetailsToolbar is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
