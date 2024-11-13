import { PiBagLight } from "react-icons/pi";
import { Badge } from "react-bootstrap";

const CartWidget = () => {
    return (
        <div className="cart-icon d-flex position-relative">
            <PiBagLight fontSize={'24px'}/>
            <Badge className="p-0" bg="Light" text="dark">3</Badge>
        </div>
    )
}

export default CartWidget