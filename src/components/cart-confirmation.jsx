import { CartButton } from "./cart-button"
import CartConfirmItems from "./cart-confirm-items"
import { TotalCart } from "./total-Cart"
import { useCartStore } from "../store/cart.store"

export const CartConfirmation = () => {

  const {isClose, toggleClose, cart, resetCart} =  useCartStore();

  const handlerClose = () => {
    toggleClose();
    resetCart()
  }

  return (
    <dialog hidden={!isClose} className="bg-black/50 w-full fixed h-screen grid place-content-center ">
      <div className="w-[375px] md:w-[600px] py-10 px-6 bg-white rounded-xl ">
        <img src="/assets/images/icon-order-confirmed.svg" alt="" />
        <h2 className="text-[2.5rem] font-bold text-center" >Order Confirmed</h2>
        <p className="text-Rose-500 mb-6">We hope you enjoy your Food!</p>
        <div className="bg-Rose-50 ">
          {cart.map( (item) => 
            <CartConfirmItems key={item.name} {...item} />)}
          
          < TotalCart />
        </div>
        < CartButton onClick={handlerClose} text={'Start New Order'}/>
      </div>
    </dialog>
  )
}
