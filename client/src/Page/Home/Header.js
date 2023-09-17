/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { LogoTiktok, logo, logoFb, logoTiktokMobile } from '../../assets'

const Header = () => {
  return (
    <div className='flex shadow-md h-[70px] w-full shrink-0 items-center bg-gradient-to-r from-teal-200 to-pink-200 bg-center bg-no-repeat bg-cover bg-scroll overflow-hidden max-h-full px-6'>
      <a className="flex gap-2 w-4/12 items-center " target="_blank" href='https://www.facebook.com/profile.php?id=100012882123870' >
        <span className='text-base mobile:hidden font-semibold text-pink-600' >Liên hệ</span>
        <img className='h-8 rounded-sm' src={logoFb} />
      </a>
      <div className="flex justify-center  w-4/12">
        <img src={logo} className='w-40 rounded-full' />
      </div>
      <a className="flex justify-end w-4/12" target="_blank"  href='https://www.tiktok.com/@tamconcophat' >
        <span className='mobile:hidden'> {LogoTiktok} </span>
        <img className='mobile:block w-10 h-10 rounded-lg hidden' src={logoTiktokMobile} />
      </a>
    </div>
  )
}

export default Header