import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-200">
      <nav className="container h-12 flex justify-between items-center mx-auto">
        <Link to={'/'} className="font-bold">Oasis Store</Link>
        <Link to={'/cart'} className="bg-gray-500 text-white rounded-full p-2">
            <FaShoppingCart />   
        </Link>      
      </nav>
    </header>
  )
}
