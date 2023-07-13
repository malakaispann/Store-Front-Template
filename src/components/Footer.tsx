import React from 'react';
import {default as gitLogo} from '../assets/github-logo.png';

function Footer() {
  return (
      <div className='absolute bottom-0 h-16 w-screen bg-zinc-100 border-t-2'>
              <a href='https://github.com/KayDVC' className='flex w-full h-full justify-center items-center text-sm hover:bg-white'>
                    2022 @KayDVC 
                  <img src={gitLogo} className='h-6' alt='Link to my GitHub account.' />
              </a>
      </div>
  )
}

export default Footer