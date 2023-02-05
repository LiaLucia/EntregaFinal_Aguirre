import React from 'react'
import {useState} from 'react';

const ItemCount = () => {
    const [count, setCount] = useState(0);
    //const [fecha, setFecha] = useState(Date());

    const handleCount = () => {
        setCount(count + 1);
    }


    return (
        <div>
            <h1> Click: {count}</h1>
            <button onClick={handleCount}> Click </button>
        </div>
    )
}

export default ItemCount