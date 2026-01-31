import { CartButton } from "./cart-button"
import CartItems from "./cart-items"
import { TotalCart } from "./total-Cart"
import { useCartStore } from "../store/cart.store"

const Cart = () => {

  const {toggleClose, cart} =useCartStore() 

  return (
  <div className="bg-Rose-50 p-6 rounded-xl">
    <h2 className="text-Red font-bold text-2xl mb-6">Your Cart ({cart.length})</h2>
    {
      cart.map( (item) => <CartItems key={item.name} {...item} />
      )
    }
    < TotalCart />
    <div className="bg-Rose-100 rounded-lg flex justify-center gap-1 p-4 mb-4">
      <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
      <p className="text-sm">This is a <span className="font-bold">carbon neutral</span> delivery</p>
    </div>
    < CartButton onClick={toggleClose} text={'Confirm Order'}/>
  </div>
  )
}

export default Cart  