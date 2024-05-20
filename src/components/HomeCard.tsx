import { FaShoppingCart } from 'react-icons/fa';

interface Card {
  title: string;
  image: string;
  price: string;
}

export default function Card(card: Card) {
  return (
    <>
      <img src={card.image} alt={card.title} className='h-[50%]' />
      <h2 className='py-2 text-center'>{card.title}</h2>
      <div className='w-full flex items-center gap-2 justify-center flex-col tablet:flex-row tablet:justify-between'>
        <p className='font-bold text-xl'>{card.price}</p>
        <button className='flex items-center gap-2 p-[5px] rounded bg-gray-200'>
          <FaShoppingCart />
        </button>
      </div>
    </>
  );
}
