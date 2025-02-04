import React, { useState } from 'react';
import Child from '../child/child';
function Greeting() {

    const [open, setOpen] = useState(false);
    const name = "Greeting"
    return (
        <>
            {open ? (
                <h1  onClick={() => setOpen(false)}> Open </h1>
            ) : <h1  onClick={() => setOpen(true)}> Close </h1>
            }
            {/* <h1>Applayout</h1> */}
            <Child open={open}/>
            <Child name={name} />
        </>
    )
}
export default Greeting;