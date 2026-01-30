import React from 'react'
import { useCartStore } from '../store/cart.store'

function CartItems({name, price, quantity}) {

  const {deleteItemCart} = useCartStore();

  return (
    <div className='border-1 border-transparent border-b-Rose-300 text-sm py-4'>
      <div className='flex justify-between items-center'>
        <div> 
          <h3>{name}</h3>
          <div className='flex gap-2'>
            <p className='text-Red font-semibold'>{quantity}x</p>
            <p className='text-Rose-500 '>@${price.toFixed(2)}</p>
            <p className='font-semibold text-Rose-500'>${(quantity*price).toFixed(2)}</p>
          </div>
        </div>
        <img onClick={ () => deleteItemCart(name) } className='size-[18px] border border-Rose-300 rounded-full p-1 cursor-pointer hover:bg-Rose-50' src="/assets/images/icon-remove-item.svg" alt="" />
      </div>
    </div>
  )
}

export default CartItems