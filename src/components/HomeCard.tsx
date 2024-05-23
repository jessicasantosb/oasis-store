import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';
import { ProductProps } from '../pages/Home';

type Divider = 2 | 4 | 6 | 10;

export default function Card(card: ProductProps) {
  const [priceDivided, setPriceDivided] = useState<number>();
  const [divider, setDivider] = useState<Divider>();
  const { addItemToCart } = useContext(CartContext);

  const handleAddItemToCart = (card: ProductProps) => {
    toast.success('Product added to cart');
    addItemToCart(card);
  };

  const formatPrice = (price: number): string => {
    const priceFormated = price.toLocaleString('us', {
      style: 'currency',
      currency: 'USD',
    });
    return priceFormated;
  };

  const price = card.price;
  const divideByTwo = price > 10 && price < 30;
  const divideByFour = price >= 30 && price < 80;
  const divideBySix = price >= 80 && price < 120;
  const divideByTen = price >= 120;

  useEffect(() => {
    if (divideByTwo) {
      setPriceDivided(price / 2);
      setDivider(2);
    } else if (divideByFour) {
      setPriceDivided(price / 4);
      setDivider(4);
    } else if (divideBySix) {
      setPriceDivided(price / 6);
      setDivider(6);
    } else if (divideByTen) {
      setPriceDivided(price / 10);
      setDivider(10);
    }
  }, []);

  return (
    <>
      <img src={card.image} alt={card.title} className='h-32' />
      <h2 className='text-center text-md line-clamp-2'>{card.title}</h2>

      <div className='h-28 w-full flex flex-col justify-between gap-4'>
        <div className='text-center'>
          <p className='font-bold text-xl'>{formatPrice(card.price)}</p>
          {priceDivided && (
            <p className='text-gray-500 '>{`or ${divider}x ${formatPrice(
              priceDivided
            )}`}</p>
          )}
        </div>

        <button
          className='group w-full p-2 bg-[#1b1a20] shadow-lg text-white flex items-center justify-center gap-2 hover:bg-[#eabf00]'
          onClick={() => handleAddItemToCart(card)}
        >
          Add to cart
          <FaShoppingCart className='text-[#eabf00] group-hover:text-white' />
        </button>
      </div>
    </>
  );
}
