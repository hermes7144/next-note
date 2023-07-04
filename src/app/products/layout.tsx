import Link from 'next/link';
import styles from './layout.module.css';

export const metadata = {
  title: '멋진 제품 사이트 | 전체 제품 확인',
  description: '멋진 제품을 판매하는 곳입니다.',
};
export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href='/products/women'>여성옷</Link>
        <Link href='/products/men'>남성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}

