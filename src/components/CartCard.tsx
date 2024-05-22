import { useContext } from 'react';
import { CartContext, CartProps } from '../contexts/CartContext';

export default function CartCard(product: CartProps) {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  return (
    <div className='h-24 mb-4 flex justify-between items-center gap-2 bg-white p-2 rounded'>
      <div className='h-14 w-14 flex items-center justify-center'>
        <img
          src={product.image}
          alt={product.title}
          className='h-full rounded-xl'
        />
      </div>

      <p className='w-24 text-[0.75rem] line-clamp-3'>{product.title}</p>

      <h4 className='font-bold'>
        {product.total.toLocaleString('us', {
          style: 'currency',
          currency: 'USD',
        })}
      </h4>

      <div className='flex items-center gap-[5px]'>
        <button
          className='h-4 w-4 flex items-center justify-center bg-slate-600 rounded text-white font-medium'
          onClick={() => removeItemFromCart(product)}
        >
          -
        </button>
        {product.amount}
        <button
          className='h-4 w-4 flex items-center justify-center bg-slate-600 rounded text-white font-medium'
          onClick={() => addItemToCart(product)}
        >
          +
        </button>
      </div>
    </div>
  );
}
