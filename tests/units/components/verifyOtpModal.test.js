/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { VerifyOtpModal } from '@root/components/verifyOtpModal';

const defaultComponent = <VerifyOtpModal t={() => {}} />;

test('VerifyOtpModal is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
