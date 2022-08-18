import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'
import LoginRegister from './LoginRegister'
import useWindowSize from '../hooks/useWindowSize'

type HeaderProps = {
    navBar: boolean
    setNavBar: () => void
}


const Header = ({ navBar = true, setNavBar } : HeaderProps) => {
  const { width, height } = useWindowSize()
  return (
    <header className='p-3 flex items-center justify-between bg-[#181818] text-white'>
        <button 
        onClick={setNavBar}
        title={navBar ? 'Close navigation bar' : 'Open navigation bar'}
        className='w-8 h-8 rounded-md grid place-items-center border border-[#eee]/40 text-xl'>
            {navBar && <BiChevronLeft />}
            {!navBar && <BiChevronRight />}
        </button>
        {width! > 768 && <SearchBar />}
        <LoginRegister />
    </header>
  )
}

export default Header