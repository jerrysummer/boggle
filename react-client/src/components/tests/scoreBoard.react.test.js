import React from 'react';
import renderer from 'react-test-renderer';
import ScoreBoard from '../ScoreBoard';

it('renders correctly', () => {
  const component = renderer
    .create(<ScoreBoard pastSelection="['TEST','TEST','QUE','AAAAAAAAA','A']" />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
