import { useCartContext } from "../../context/CartContext";

import { FiShoppingCart } from "react-icons/fi";
import './CartWidget.css'

function CartWidget() {
  const { totalCart } = useCartContext()

  return (
    
    <div>
      <div className="position-relative">
        <div className = "cart" >
        <FiShoppingCart />
        </div>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalCart}
        </span>
      </div>
    </div>
  )
}

export default CartWidget