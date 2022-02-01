import React from 'react'
import MenuAlt from './icons/MenuAlt'
import Search from './icons/Search'
import Logo from './Logo'

const Nav = () => {
    return <nav className='w-full h-[64px] md:h-[96px] lg:h-[128px] mx-auto absolute z-10'>
        <div className='flex items-center justify-between w-11/12 h-full mx-auto text-white lg:w-10/12'>
            <div className='w-7 h-7 drop-shadow-main md:hidden'>
                <MenuAlt />
            </div>

            <div className='lg:mr-10 max-w-[180px] md:max-w-[240px] lg:max-w-[360px] xl:w-[360px] 1366px:w-[320px] 2xl:w-[360px] aspect-[16/3.60]'>
                <Logo />
            </div>

            <ul className='hidden md:flex items-center font-medium justify-center font-nav text-xl xl:text-[28px]'>
                <li className='mx-4 xl:mx-8'>
                    <a href='#' className='drop-shadow-main'>Collection</a>
                </li>
                            
                <li className='mx-4 xl:mx-8'>
                    <a href='#' className='drop-shadow-main'>Gallery</a>
                </li>
                            
                <li className='mx-4 xl:mx-8'>
                    <a href='#' className='drop-shadow-main'>Contact</a>
                </li>
                            
                <li className='ml-4 xl:ml-8'>
                    <div className='w-7 h-7 drop-shadow-main'>
                        <Search />
                    </div>
                </li>
            </ul>

            <div className='w-7 h-7 drop-shadow-main md:hidden'>
                <Search />
            </div>
        </div>
    </nav>
}

export default Nav
