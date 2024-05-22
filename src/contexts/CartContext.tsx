import { ReactNode, createContext, useState } from 'react';
import { ProductProps } from '../pages/Home';

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemToCart: (newProduct: ProductProps) => void;
  removeItemFromCart: (product: CartProps) => void;
  total: string;
  handleCartModal: () => void;
  modal: boolean;
}

export interface CartProps {
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
  const [modal, setModal] = useState(false);
  const [total, setTotal] = useState('');

  const handleCartModal = () => {
    setModal(!modal);
  };

  function addItemToCart(newProduct: ProductProps) {
    const productIndex = cart.findIndex(
      (product) => product.id === newProduct.id
    );

    if (productIndex !== -1) {
      let cartList = cart.map((product) => ({ ...product }));
      let product = cartList[productIndex];

      product.amount = product.amount + 1;
      product.total = product.amount * product.price;

      setCart(cartList);
      cartTotalPrice(cartList);
      return;
    }

    const data = {
      ...newProduct,
      amount: 1,
      total: newProduct.price,
    };

    setCart([...cart, data]);
    cartTotalPrice([...cart, data]);
  }

  function removeItemFromCart(product: CartProps) {
    const itemIndex = cart.findIndex((item) => item.id === product.id);

    const productToDelete = cart[itemIndex];

    if (productToDelete?.amount > 1) {
      let cartList = cart.map((product) => ({ ...product }));
      let product = cartList[itemIndex];

      product.amount = product.amount - 1;
      product.total = product.total - product.price;

      setCart(cartList);
      cartTotalPrice(cartList);
      return;
    }

    const newCart = cart.filter((item) => item.id !== product.id);

    setCart(newCart);
    cartTotalPrice(newCart);
  }

  function cartTotalPrice(products: CartProps[]) {
    let myCart = products;
    let total = myCart.reduce((accumulator, object) => {
      return accumulator + object.total;
    }, 0);
    const totalFormated = total.toLocaleString('us', {
      style: 'currency',
      currency: 'USD',
    });

    setTotal(totalFormated);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        addItemToCart,
        removeItemFromCart,
        total,
        handleCartModal,
        modal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
