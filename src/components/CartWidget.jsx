import { PiBagLight } from "react-icons/pi";
import { Badge } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
    const {cartUnits} = useCart()

    return (
        <div className="cart-icon d-flex position-relative">
            <PiBagLight fontSize={'24px'}/>
            { cartUnits() > 0 && <Badge className="p-0" bg="Light" text="dark">{cartUnits()}</Badge>}
        </div>
    )
}

export default CartWidget