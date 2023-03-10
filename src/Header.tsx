import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiOutlineHome, HiOutlineFilm } from 'react-icons/hi';
import { FaRegWindowClose } from 'react-icons/fa';
import classNames from 'classnames';
import Logo from './Logo';

type Props = {
  showHeader?: boolean;
};

const Header: React.FC<Props> = ({ showHeader = true }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevVisible) => {
      const isScrollingUp = currentScrollPos < prevScrollPos;
      if (isScrollingUp && !prevVisible) {
        return true;
      } else if (!isScrollingUp && prevVisible) {
        return false;
      }
      return prevVisible;
    });
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const cx = classNames('fixed', 'w-full', 'bg-white', 'z-50', {
    'top-0': visible,
    '-top-20': !visible,
  });

  return (
    <header className={cx}>
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <Link href="/" className="flex items-center">
          <Logo />
          <span className="ml-2 text-lg font-bold">웹툰 서비스</span>
        </Link>
        <nav>
          <ul className="flex items-center">
            <li className="mr-6">
              <Link href="/" className="text-gray-800 hover:text-gray-600">
                <HiOutlineHome size={20} />
                <span className="ml-1">홈</span>
              </Link>
            </li>
            <li>
              <Link href="/movies" className="text-gray-800 hover:text-gray-600">
                <HiOutlineFilm size={20} />
                <span className="ml-1">영화</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
