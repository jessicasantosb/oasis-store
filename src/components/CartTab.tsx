import { useContext } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';
import CartCard from './CartCard';

export default function Cart() {
  const { cart, cartAmount, handleCartModal, total, modal } =
    useContext(CartContext);

  let cartIsEmpty = cart.length === 0;

  return (
    <section
      className={`fixed w-96 h-full top-0 bg-[#222125] grid grid-rows-[65px_1fr_100px] text-white shadow-2xl ${
        modal ? 'right-0' : 'left-full'
      } `}
    >
      <div className='absolute top-0 -left-16 bg-[#222125]'>
        <button
          onClick={handleCartModal}
          className='h-16 w-16 relative text-white flex items-center justify-center'
        >
          {!modal ? (
            <>
              <BsCart3 size={32} />
              {cartAmount > 0 && (
                <span className='absolute top-[39px] left-[34px] w-4 h-4 flex items-center justify-center rounded-full p-2 text-xs bg-red-500'>
                  {cartAmount}
                </span>
              )}
            </>
          ) : (
            <IoMdClose size={32} />
          )}
        </button>
      </div>

      <h3 className='relative text-center text-2xl flex items-center justify-center gap-4'>
        <span>
          <BsCart3 size={32} />
          {cartAmount > 0 && (
            <span className='absolute top-[41px] left-[137px] w-4 h-4 flex items-center justify-center rounded-full p-2 text-xs text-white bg-red-500'>
              {cartAmount}
            </span>
          )}
        </span>
        Your Cart
      </h3>

      {cartIsEmpty ? (
        <p className='text-center self-center text-[#eabf00]'>
          Add some products in the cart
        </p>
      ) : (
        <main className='px-4 overflow-auto '>
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
      )}

      <div className='inset-20 shadow-[inset_0_-5px_30px_rgba(0,0,0,0.6)]'>
        <h3 className='text-gray-600 h-[50%] px-4 flex items-center justify-between'>
          SUBTOTAL:
          <span className='text-[#eabf00]'> {total || '0,00 US$'}</span>
        </h3>
        <button className='w-full h-[50%] bg-black text-white font-bold hover:bg-[#eabf00]'>
          CHECKOUT
        </button>
      </div>
    </section>
  );
}
