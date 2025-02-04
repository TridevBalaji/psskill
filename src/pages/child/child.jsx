import React from 'react';

function Child({open},props){
    // con
    return (
        <h1>
             {open ? (
                <div> Open </div>
            ) : <div> Close </div>
            }
            {props.name}
        </h1>
        
    )
}
export default Child;