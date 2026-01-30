//import { useState } from "react"
import { useCartStore } from "../store/cart.store";

function ProductCard({image, name, category, price}) {

  //const [quantity, setQuantity]= useState(0);

  const {addItemToCart, updateItemInCart, deleteItemCart, cart} = useCartStore();

  let quantity = 0;
  const productEnElCarro = cart.filter(item => item.name === name);
  if(productEnElCarro.length > 0){
    quantity = productEnElCarro[0].quantity;
  }

  const addOne = () => {
    const newQuantity = quantity +1; //Se crear con la finalidad de obtener el valor actualizado, ya que useState es asincrono, este caso quantity su valor es asincrono que aun este campo no se queda actualizado
    //setQuantity(newQuantity);
    
    if(newQuantity > 1){
      updateItemInCart(
        {image, name, price, quantity:newQuantity});
    }else {
      addItemToCart(
      {image, name, price, quantity:newQuantity});
    }
  }

  const sustracOne = () => {
    const newQuantity = quantity - 1;
    
    //setQuantity(newQuantity);

    if(newQuantity === 0){
      deleteItemCart( name );
    }else{
      updateItemInCart(
        {image, name, price, quantity:newQuantity});
    }
  }


  return (
    <div className="relative">
      <picture>
        <source media="(min-width: 768px)" srcSet={image.tablet} />
        <source media="(min-width: 1440px)" srcSet={image.desktop} />
        <img 
        className="rounded-lg mb-[38px] " 
        src={image.mobile} alt="" />
      </picture>
      

      {quantity ===0 ?
      (<button onClick={addOne} className="bg-Rose-50 border-2 border-Rose-300 w-40 rounded-full flex p-3 justify-center gap-2 absolute right-0 left-0 mx-auto top-[190px] cursor-pointer hover:border-Red transition-colors duration-300">
        <img src="/public/assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart" />
        <span>Add to Cart</span>
      </button>) 
      
      : (<div className="bg-Red  w-40 rounded-full flex p-3 justify-between items-center gap-2 absolute right-0 left-0 mx-auto top-[190px] cursor-pointer ">
        <img 
        onClick={sustracOne}
        className="border border-Rose-50 size-[18px] rounded-full p-1 hover:bg-Rose-50 " 
        src="/assets/images/icon-decrement-quantity.svg" alt="icon-decrement-quantity" />
        <p className="text-Rose-50">{quantity}</p>
        <img 
        onClick={addOne}
        className="border border-Rose-50 size-[18px] rounded-full p-1 hover:bg-Rose-50 " 
        src="/assets/images/icon-increment-quantity.svg" alt="icon-increment-quantity" />
      </div>)
      }
      

      <p className="text-Rose-500 text-sm">{category}</p>
      <h2 className="font-bold">{name}</h2>
      <p className="text-Red font-semibold">$. {price.toFixed(2)}</p>
    </div>
  )
}

export default ProductCard