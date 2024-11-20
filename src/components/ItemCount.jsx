import React, { useState } from "react"

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const sumar = () => {
        if (count < stock ){
            setCount(count + 1)
        }
    }

    const restar = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const onAddHandler = () => {
        onAdd(count)
    }

    return(
        <div className="count-container d-flex flex-column w-100">
            <div className="units-count d-flex flex-column align-items-start">
                <p className="units-text text-uppercase mb-0">Unidades</p>
                <div className="d-flex count-selectors">
                    <button className="count-button bg-white p-0" onClick={restar}>
                        <span>-</span> 
                    </button>
                    <span className="amount">{count}</span>
                    <button className="count-button bg-white p-0" onClick={sumar}>
                        <span>+</span>
                    </button>
                </div>
            </div>
            <div>
                <button className="text-uppercase rounded-0 add-to-cart text-white w-100" onClick={onAddHandler} disabled={count === 0}>Añadir a la bolsa</button>
            </div>
        </div>
    )
}

export default ItemCount