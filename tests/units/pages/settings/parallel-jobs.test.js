/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { ParallelJobs } from '@root/pages/parallel-jobs';

const defaultComponent = <ParallelJobs t={() => {}} />;

test('ParallelJobs is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
