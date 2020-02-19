/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { SaveFilterModal } from '@root/components/saveFilterModal';

const defaultComponent = <SaveFilterModal t={() => {}} />;

test('SaveFilterModal is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
