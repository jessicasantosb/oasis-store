import { ReactNode, createContext, useState } from 'react';
import { ProductProps } from '../pages/Home';

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemToCard: (newProduct: ProductProps) => void;
}

interface CartProps {
  id: number;
  title: string;
  image: string;
  price: number;
  amount: number;
  total: number;
}

interface CardProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CardProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);

  function addItemToCard(newProduct: ProductProps) {
    const productIndex = cart.findIndex((product) => product.id === newProduct.id);

    if (productIndex !== -1) {
      let cartList = [...cart];
      let product = cartList[productIndex];

      product.amount = product.amount + 1;
      product.total = product.amount * product.price;

      setCart(cartList);
      return;
    }

    const data = {
      ...newProduct,
      amount: 1,
      total: newProduct.price,
    };

    setCart([...cart, data]);
  }

  return (
    <CartContext.Provider
      value={{ cart, cartAmount: cart.length, addItemToCard }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
