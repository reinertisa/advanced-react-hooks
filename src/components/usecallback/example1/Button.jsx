import React from 'react';

function Button({handleIncrement, children}) {
    console.log('Rendering button')
    return (
        <button onClick={handleIncrement}>{children}</button>
    )
}

export default React.memo(Button);