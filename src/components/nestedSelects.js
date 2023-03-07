import React, { useState } from 'react';
import SelectList from './selectList';

function NestedSelects() {

    const [state, setState] = useState("");
    const [town, setTown] = useState("");
    const [suburb, setSuburb] = useState("");
    return ( 
    <>
        <h2>Nested Selects</h2>
        <h3>Mexico</h3>
        <SelectList title='state' url='' handleChange={(e) => {setState(e.target.value)}} />

        {state && (<SelectList title='town' url='' handleChange={(e) => {setTown(e.target.value)}}/>)}
        {town && (<SelectList title='suburb' url='' handleChange={(e) => {setSuburb(e.target.value)}}/>)}
        
        <pre>
            <code>
                {state} - {town} - {suburb}
            </code>
        </pre>
    </> 
    );
}

export default NestedSelects;