import React from 'react';

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

export default Die;
