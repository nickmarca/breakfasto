import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
  const router = useRouter();

  return (
    <div className="flex">
      <div className="flex-1">
        <Link href="/">
          <span className={classNames(styles.brand, 'text-burnt-sienna')}>
            Break
          </span>
          <span className={classNames(styles.brand, 'text-comet')}>fasto</span>
        </Link>
      </div>
      <div className="flex-1">
        <nav className={classNames(styles.nav)}>
          <Link
            className={classNames({
              [styles.activeLink]: router.pathname === '/',
            })}
            href="/"
          >
            Home
          </Link>
          <Link
            className={classNames({
              [styles.activeLink]: router.pathname === '/breakfast',
            })}
            href="/breakfast"
          >
            Breakfast
          </Link>
          <Link
            className={classNames({
              [styles.activeLink]: router.pathname === '/offers',
            })}
            href="/offers"
          >
            Offers
          </Link>
        </nav>
      </div>
    </div>
  );
}

const styles = {
  brand: ['text-xl', 'font-serif', 'font-black'],
  nav: [
    'flex',
    'justify-between',
    'text-sm',
    'font-serif',
    'text-stone-400',
    'tracking-wide',
  ],
  activeLink: [
    'font-extrabold',
    'relative',
    'text-comet',
    'before:absolute',
    'before:h-1',
    'before:w-4/5',
    'before:rounded',
    'before:bg-burnt-sienna',
    'before:top-[100%]',
    'before:right-1/2',
    'before:translate-x-1/2',
  ].join(' '),
};
