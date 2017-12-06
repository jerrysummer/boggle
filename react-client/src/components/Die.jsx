import React from 'react';

const Die = ( props ) => {
    let { die, selected, pos , handleDieSelect} = props;
    return (
        <div>
            <button onClick={() => handleDieSelect(die.val, pos)}> 
                {die.val} 
            </button>
        </div>
    )
}

export default Die;