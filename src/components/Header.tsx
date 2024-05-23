import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-[#1b1a20] text-white fixed w-full'>
      <nav className='container h-16 flex justify-between items-center mx-auto p-2'>
        <Link to={'/'} className='font-bold text-lg'>
          Oasis Store
        </Link>
      </nav>
    </header>
  );
}
