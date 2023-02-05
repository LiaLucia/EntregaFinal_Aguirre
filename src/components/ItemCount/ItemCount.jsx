import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';


const ItemCount = () => {
    const [count, setCount] = useState(0);


    const handleCount = () => {
        setCount(count + 1);
    }

console.log(count)

    return (
        <div>
            {//<Button variant="primary" onClick={handleCount}> Agregar al carrito </Button>
            }
        </div>
)
}

export default ItemCount