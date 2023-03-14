import React, { useState } from 'react';
import SelectList from './selectList';

function NestedSelects() {

    const [state, setState] = useState("");
    const [town, setTown] = useState("");
    const [suburb, setSuburb] = useState("");

    const TOKEN = '033953fb-5c12-45ff-949e-7830f5352590';

    return ( 
    <>
        <h2>Nested Selects</h2>
        <h3>Mexico</h3>
        <SelectList title='estado'
        url ={`https://api.copomex.com/query/get_estados?token=${TOKEN}`} 
        handleChange={(e) => {setState(e.target.value)}} />
        <br/>
        {state && (<SelectList 
        title='municipios' 
        url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`} 
        handleChange={(e) => {setTown(e.target.value)}}/>)}
        <br/>
        {town && (<SelectList 
        title='colonia' 
        url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`} 
        handleChange={(e) => {setSuburb(e.target.value)}}/>)}
        
        <pre>
            <code>
                {state} - {town} - {suburb}
            </code>
        </pre>
    </> 
    );
}

export default NestedSelects;