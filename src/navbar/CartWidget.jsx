import { IoCartOutline } from "react-icons/io5";
import "./CartWidget.css"

const CartWidget = () => {
    return(
        <div>
            <IoCartOutline id="carrito" size="38px" className="btn btn-outline-success" type="submit"/>
        </div>
    )
}

export default CartWidget