import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <header className='bg-black shadow-md'>
        <div className='flex justify-between items-center max-w-4xl mx-auto p-3'>
            <Link to='/'>
                <h1 className='font-bold text-2sm sm:text-2xl flex flex-wrap'>
                    <span className='text-slate-200'>Houes</span>
                    <span className='text-slate-400'>Estate</span>
                </h1>
            </Link>
            <form className='bg-slate-600 p-3 rounded-lg flex items-center'>
                <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64 text-slate-200'/>
                <FaSearch className='text-white'/>
            </form>
            <ul className='flex gap-4 text-slate-200'>
                <Link to='/'><li className='hidden sm:inline hover:underline'>Home</li></Link>
                <Link to='/about'><li className='hidden sm:inline hover:underline'>About</li></Link>
                <Link to='/signIn'><li className='hover:underline'>SignIn</li></Link>
            </ul>
        </div>
    </header>
  )
}

export default Header