import React from 'react';
import renderer from 'react-test-renderer';
import Die from '../Die';

it('renders correctly when not selected', () => {
  const component = renderer
    .create(<Die die="{selected: false, val:A}" />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

it('renders correctly when selected', () => {
  const component = renderer
    .create(<Die die="{selected: true, val:A}" />)
    .toJSON();
  expect(component).toMatchSnapshot();
});


// it('changes the class when hovered', () => {
//   const component = renderer.create(<Die die="{selected: false, val:A}" />);
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseEnter();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseLeave();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
