import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

export default function Header() {
  const {cartAmount, handleCartModal} = useContext(CartContext);

  return (
    <header className='bg-gray-200 fixed w-full'>
      <nav className='container h-14 flex justify-between items-center mx-auto p-2'>
        <Link to={'/'} className='font-bold text-lg'>
          Oasis Store
        </Link>
      
        <button
        onClick={handleCartModal}
          className='relative bg-gray-500 text-white rounded-sm p-2'
        >
          <FaShoppingCart />
          {cartAmount > 0 && (
            <span className='absolute -left-2 w-4 h-4 flex items-center justify-center rounded-sm text-xs bg-red-500'>
              {cartAmount}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}
