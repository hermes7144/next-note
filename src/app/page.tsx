import Counter from '@/components/Counter';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1>홈페이지다 10</h1>
      <Counter />
      <Image src='https://images.unsplash.com/photo-1441986300917-64674bd600d8' alt='shop' width={400} height={400} />
    </>
  );
}
