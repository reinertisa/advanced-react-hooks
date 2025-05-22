import React from 'react';

function Count({text, value}) {
    console.log('Rendering count', text);
    return (
        <div>{text} - {value}</div>
    )
}

export default React.memo(Count);