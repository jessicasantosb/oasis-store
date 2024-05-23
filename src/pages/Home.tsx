import { useEffect, useState } from 'react';
import getProducts from '../api';
import HomeCard from '../components/HomeCard';

export interface ProductProps {
  id: number;
  title: string;
  image: string;
  price: number;
}

export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const allProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    allProducts();
  }, []);

  return (
    <section className=' bg-gray-100'>
      <div className='container mx-auto py-24 px-2'>
        <h1 className='text-5xl font-bold pb-24'>List Products</h1>
        <div className='flex justify-center'>
          <main className='grid grid-cols-1 gap-6 tablet:grid-cols-3 laptop:grid-cols-4'>
            {products.map(({ id, image, title, price }) => {
              return (
                <div
                  key={id}
                  className='h-[350px] tablet:h-[400px] p-4 bg-white flex items-center justify-between flex-col'
                >
                  <HomeCard id={id} image={image} title={title} price={price} />
                </div>
              );
            })}
          </main>
        </div>
      </div>
    </section>
  );
}
