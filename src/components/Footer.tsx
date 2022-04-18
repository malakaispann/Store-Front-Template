import React from 'react';
import gitLogo from '../assets/GitHub-Logo.png';

function Footer() {
  return (
      <div className='absolute bottom-0 h-16 w-screen bg-zinc-100 border-t-2'>
              <a href='https://github.com/KayyDVC' className='flex w-full h-full justify-center items-center text-sm hover:bg-white'>
                    2022 @KayyDVC 
                  <img src={gitLogo} className='h-6' />
              </a>
      </div>
  )
}

export default Footer