'use client';

import React from 'react';
import { useTheme } from 'next-themes';

import Image from 'next/image';

import darkIcon from '../assets/dark.png';
import lightIcon from '../assets/light.png';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className='h-14 shadow-xl mb-12'>
      <div className='flex justify-between max-w-7xl h-full items-center mx-auto'>
        <h2 className='text-xl font-bold'>Next Theme</h2>
        {theme === 'dark' ? (
          <Image
            src={lightIcon}
            alt='theme-icon'
            width={30}
            height={30}
            className='cursor-pointer'
            onClick={() => setTheme('light')}
          />
        ) : (
          <Image
            src={darkIcon}
            alt='theme-icon'
            width={30}
            height={30}
            className='cursor-pointer'
            onClick={() => setTheme('dark')}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
