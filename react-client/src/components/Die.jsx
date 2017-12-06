import React from 'react';

const Die = ( props ) => {
    let { die, selected, pos , handleDieSelect} = props;
    console.log(handleDieSelect)
    return (
        <div>
            <button onClick={() => handleDieSelect(die.val, pos)}> 
                {die.val} 
            </button>
        </div>
    )
}

export default Die;