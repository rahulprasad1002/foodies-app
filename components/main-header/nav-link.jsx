'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './nav-link.module.css';

export default function Navlink({ href, children }) {
  const path = usePathname(); // works only at client component
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active} `
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
