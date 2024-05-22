import { Outlet } from 'react-router-dom';
import CartTab from './CartTab';
import Header from './Header';

export default function Layout() {
  return (
    <>
      <main>
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </>
  );
}
