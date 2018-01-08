import React from 'react';
import { connect } from 'react-redux';
import { handleDieSelect } from '../actions';

const Die = ({ die, pos, handleDieSelect }) => (
  <div
    className={die.selected ? 'selected die' : 'die'}
    onClick={() => handleDieSelect(die.val, pos)}
  >
    <div className="die-circle">
      {die.val}
    </div>
  </div>
);

export default connect(null, { handleDieSelect })(Die);
