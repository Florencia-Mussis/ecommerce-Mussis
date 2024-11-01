import { PiBagLight } from "react-icons/pi";
import { Badge } from "react-bootstrap";

const CartWidget = () => {
    return (
        <div className="d-flex position-relative pt-2 pb-2">
            <PiBagLight fontSize={'24px'}/>
            <Badge className="p-0" bg="Light" text="dark">3</Badge>
        </div>
    )
}

export default CartWidget