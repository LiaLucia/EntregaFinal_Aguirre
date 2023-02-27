import { useState } from "react"

import './ItemCount.css'

const ItemCount = ({initial, stock=20, onAdd}) => {
    const [ added, setAdded] = useState(false);
    const [ count, setCount] = useState(initial)
    
    const handleAdd = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }
    const handleSubs = () =>{
        if(count > initial){
            setCount(count - 1)
        }
    }

    const handleOnAdd = () =>{
        onAdd(count)
        setAdded(true)        
    }


    return (

        <div >   
        {!added ? (
            <div className="card m-5 w-50">
                <div className="card-body row align-items-center g-0">
                    <div className="col-4 btnAdd">
                        <button className="btn btn-dark " onClick={handleSubs}> - </button>
                    </div>
                    <div className="col-4">
                        <center>
                            <label>
                                {count}
                            </label>
                        </center> 
                    </div>
                    <div className="col-4 btnAdd">
                        <button className="btn btn-dark " onClick={handleAdd}> + </button>
                    </div>
                </div>
                <div className="card-footer btnCart">
                    <button className="btn btn-dark" onClick={handleOnAdd}>Agregar al carrito</button>
                </div>
            </div>
        ) : (
            <div>
                <div className="alert alert-success" role="alert">
                    Se añadió el producto correctamente al carrito
                </div>
                
            </div>
        )} 
            
        </div>

    )
}

export default ItemCount
