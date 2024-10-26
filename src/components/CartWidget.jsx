const CartWidget = ({counter}) => {
    return(
        <div className="cartWidgetContainer">
            <img src="./carrito-de-compras.png" alt='cart' className="cartIcon"/>
            <p className="cartCounter">{counter}</p>
        </div>
    )
}

export default CartWidget