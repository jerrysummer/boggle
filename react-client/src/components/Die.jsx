import React from 'react';

const Die = ({ die, pos, handleDieSelect }) => (
    <div
      className={die.selected ? 'selected die' : 'die'}
      onClick={() => handleDieSelect(die.val, pos)}
    >
      {die.val}
    </div>
  );

export default Die;
