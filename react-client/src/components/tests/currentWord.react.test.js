import React from 'react';
import renderer from 'react-test-renderer';
import CurrentWord from '../CurrentWord';

it('renders correctly', () => {
  const component = renderer
    .create(<CurrentWord board="testword" />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

