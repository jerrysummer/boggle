import React from 'react';
import renderer from 'react-test-renderer';
import DiceGrid from '../DiceGrid';

const board = [{ val: 'A', selected: false },
  { val: 'E', selected: false },
  { val: 'S', selected: false },
  { val: 'Qu', selected: false },
  { val: 'H', selected: false },
  { val: 'N', selected: false },
  { val: 'J', selected: false },
  { val: 'C', selected: false },
  { val: 'T', selected: false },
  { val: 'P', selected: false },
  { val: 'U', selected: false },
  { val: 'U', selected: false },
  { val: 'E', selected: false },
  { val: 'M', selected: false },
  { val: 'N', selected: false },
  { val: 'I', selected: false },
  { val: 'D', selected: false },
  { val: 'N', selected: false },
  { val: 'R', selected: false },
  { val: 'S', selected: false },
  { val: 'D', selected: false },
  { val: 'Y', selected: false },
  { val: 'W', selected: false },
  { val: 'E', selected: false },
  { val: 'Y', selected: false }];

it('renders correctly', () => {
  const component = renderer
    .create(<DiceGrid board={board} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
