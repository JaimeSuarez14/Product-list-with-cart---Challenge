import React from 'react'

function CartConfirmItems({name, price, quantity, image}) {
  return (
    <div className='border-1 border-transparent border-b-Rose-300 text-sm py-4'>
      <div className='flex justify-between items-center px-4'>
        <div className='flex gap-4'>
          <img className='size-12 ' src={image.thumbnail} alt="" />
          <div>
            <h3 className='font-bold'>{name}</h3>
            <div className='flex gap-2'>
              <p className='text-Red font-semibold'>{quantity}x</p>
              <p className='text-Rose-500 '>@${price.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <p className='font-bold text-Rose-500'>${(price * quantity).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default CartConfirmItems