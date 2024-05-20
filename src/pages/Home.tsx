import { useEffect, useState } from 'react';
import getProducts from '../api';
import Card from '../components/HomeCard';

interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
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
      <div className='container mx-auto py-14 px-2'>
        <h1 className='text-3xl font-bold pb-9'>List Products</h1>
        <main className='grid grid-cols-2 center gap-6 tablet:grid-cols-3 laptop:grid-cols-4'>
          {products.map(({ id, image, title, price }) => {
            return (
              <div
                key={id}
                className='max-h-[600px] p-4 bg-white flex items-center justify-between flex-col rounded'
              >
                <Card
                  image={image}
                  title={title}
                  price={price.toLocaleString('us', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                />
              </div>
            );
          })}
        </main>
      </div>
    </section>
  );
}
