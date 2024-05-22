import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartCard from './CartCard';

export default function Cart() {
  const { cart, total, modal } = useContext(CartContext);

  let cartIsEmpty = cart.length === 0;

  return (
    <section
      className={`w-96 min-h-44 max-h-full top-14 right-0 p-4 flex flex-col justify-between bg-gray-300 shadow-2xl scrool-smooth scale-0 origin-right transition-transform duration-900 ease-in-out ${
        modal ? 'fixed scale-100' : 'hidden'
      } `}
    >
      <h3 className='font-bold text-3xl pb-14'>Your Cart</h3>

      {cartIsEmpty && <p className='text-center'>Your cart is empty...</p>}

      <main>
        {cart.map(({ id, image, title, price, amount, total }) => (
          <CartCard
            key={id}
            id={id}
            image={image}
            title={title}
            price={price}
            amount={amount}
            total={total}
          />
        ))}
      </main>

      {!cartIsEmpty && (
        <h3 className='font-bold pt-12'>
          Total: US$
          <span>{total}</span>
        </h3>
      )}
    </section>
  );
}
