import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';
import { ProductProps } from '../pages/Home';

export default function Card(card: ProductProps) {
  const { addItemToCart } = useContext(CartContext);

  const handleAddItemToCart = (card: ProductProps) => {
    addItemToCart(card);
  };

  return (
    <>
      <img src={card.image} alt={card.title} className='h-[50%]' />
      <h2 className='py-2 text-center text-sm'>{card.title}</h2>
      <div className='w-full flex items-center gap-2 justify-between'>
        <p className='font-bold text-xl'>
          {card.price.toLocaleString('us', {
            style: 'currency',
            currency: 'USD',
          })}
        </p>
        <button
          className='p-[5px] m-2 rounded-sm bg-gray-200'
          onClick={() => handleAddItemToCart(card)}
        >
          <FaShoppingCart />
        </button>
      </div>
    </>
  );
}
