/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { SearchIcon, MenuIcon, UserIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'


const Navbar = () => {

  const [menu, setMenu] = useState(false);
  const handleClick = () => setMenu(!menu);
  


  return (
      <div>
      <div className='w-screen h-24 grid grid-cols-6 grid-rows-1 grid-flow-col mb-2 md:h-28'>
      <div className='flex justify-center items-center col-span-1'>
          <div onClick={handleClick}>
            {/* When menu is clicked, transform into x icon */}
          {!menu ?<MenuIcon className='h-6 lg:hidden' />
            : <XIcon className='h-6' />
          }
        </div>
        
        <div onClick={handleClick}>
          {!menu ? <SearchIcon className='hidden h-6 lg:block' />
            : <div className='hiddden' />}
        </div>
      
        </div>

        <div className='flex justify-center items-center col-span-4 '>
          <div className='hidden lg:block'>
            <ul className='flex text-xs'>
              <a href='#'>Link 1</a>
              <a href='#'>Link 2</a>
              <a href='#'>Link 3</a>
            </ul>

          </div>
        </div>

        <div className='flex flex-col justify-between items-center col-span-1 mx-4 md:flex-row'>
          <UserIcon className='h-6' />
          <SearchIcon className='h-6 lg:hidden' />
          <ShoppingBagIcon className='h-6' />
        </div>
            
      </div >
      {/* Display Menu for smaller screens */}
      <div className={!menu ? 'hidden' : 'transition absolute w-screen h-1/5 bg-zinc-50'} >
        {/* If screen is lg(>1024 px w), menu icon should be changed to search icon. Hide menu when this happens */}
            <ul className='flex flex-col items-center lg:hidden '>
              <a className='border rounded-3xl border-solid px-10 text-lg hover:bg-white hover:drop-shadow-md' href='#'>Link 1</a>
              <a className='border rounded-3xl border-solid px-10 text-lg hover:bg-white hover:drop-shadow-md ' href='#'>Link 2</a>
              <a className='border rounded-3xl border-solid px-10 text-lg hover:bg-white hover:drop-shadow-md' href='#'>Link 3</a>
        </ul>
        <div className='hidden lg:block lg:w-full lg:h-full'>
          <div className = ' flex w-full h-full justify-center items-center border-solid border-white rounded '>
            <input type="text" className = 'placeholder:italic placeholder:text-zinc-300 placeholder:text-center border-zinc-100 border-8 rounded-3xl h-[44px] w-1/2 p-3' placeholder= 'Start Typing...'/>
          </div>

        </div>
        
        
        
        </div>

      </div>

  )
}




export default Navbar