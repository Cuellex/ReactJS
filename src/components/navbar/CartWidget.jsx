import { IoCartOutline } from "react-icons/io5";
import "./CartWidget.css"

const CartWidget = () => {
    return(
        <div className="colores carrito">
            <IoCartOutline id="carrito" size="43px" className="btn btn-outline-success " type="submit"/>
        </div>
    )
}

export default CartWidget