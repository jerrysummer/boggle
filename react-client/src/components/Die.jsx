import React from 'react';

const Die = ( props ) => {
    let { die, pos , handleDieSelect } = props;

    return (
        <div 
            className={die.selected ? "selected die" : "die"} 
            onClick={() => handleDieSelect(die.val, pos)}
        >
            {die.val} 
        </div>
    )
}

export default Die;
